const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const multer = require('multer');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validatePasswordUpdate = require("../../validation/updatepassword");

// Load User model
const User = require("../../models/User");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.Email }).then(user => {
    if (user) {
      return res.status(400).json({ Email: "Email already exists" });
    } else {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.Email,
        role: req.body.Role,
        password: req.body.Psw,
      });




      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});




// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);

  }

  const email = req.body.Email;
  const password = req.body.Psw;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      console.log("user not found");
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          email: user.email,
          name: user.firstname,
        };

        console.log(user.firstname);

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              userFirstName: user.firstname,
              userLastName: user.lastname,
              userEmail: user.email,
              userRole: user.role,
              userClass: user.class,
              userHasPaid: user.hasPaid,
              userJoinDate: user.date,
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});


router.get("/fetchusers", async (req, res) => {

  const users = await User.find();

  res.send(
    users
  )

});


router.post("/deleteuser", (req, res) => {

  User.deleteOne({ _id: req.body.id })


    .catch(err => console.log(err));


});

router.post("/updateuser", (req, res) => {

  let params = req.body;
  for (let prop in params) if (!params[prop]) delete params[prop];//it will remove fields who are undefined or null 


  User.findOne({ _id: req.body.id })
    .then(user => User.findOneAndUpdate({ _id: user._id }, params, { new: true },
      function (err, res) {
        if (err) {
          console.log("err", err);
          res.status(500).send(err);
        } else {
          console.log("success");
          res.send(res);
        }
      }
    ))
    .catch(err => console.log(err));


});


router.post("/enterclass", (req, res) => {


  const email = req.body.email;
  const studentID = req.body.studentID;

  // Find user by email
  User.findOne({ studentID }).then(user => {

    if (!user) {
      console.log("Student ID not found");
      return res.status(404).json({ idnotfound: "Student ID not found" });
    }

    if (email === user.email) {
      console.log("found");
      return res
        .status(200)
        .json({ hasPaid: user.hasPaid, course: user.course });
    } else {
      console.log(studentID, user.studentID);
      return res
        .status(400)
        .json({ doesnotmatch: "Student ID and Email do not match" });
    }
    // console.log(user);

  });
});




const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './client/public/files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`.replace(/\s/g, ''));
    }
  }),
  limits: {
    fileSize: 5000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

router.post(
  '/uploaddp',
  upload.single('file'),
  async (req, res) => {

    User.findOne({ _id: req.body.id })
      .then(user => {
        console.log(req.file);

        User.findOneAndUpdate({ _id: req.body.id }, { profileimage: req.file.filename }, { new: true })
          .then(fil => { console.log(req.file.filename); res.send("success") })
          .catch(err => { console.log(err) })
      })
  }
);



router.post("/updatepassword", (req, res) => {


  const password = req.body.OPsw;

  User.findOne({ _id: req.body.id })
    .then(user => {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // Form validation

          const { errors, isValid } = validatePasswordUpdate(req.body);

          // Check validation
          if (!isValid) {
            return res.status(400).json(errors);
            // console.log("no match")
          }

          var passw = req.body.Psw;

          // Check if new password is same as old password
          if (password === passw) {
            return res.status(400).json({ samepassword: "New Password cannot be same as Old Password" });
            // console.log("no match")
          }


          // Hash password before updating in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(passw, salt, (err, hash) => {
              if (err) throw err;
              passw = hash;

              User.findOneAndUpdate({ _id: req.body.id }, { password: passw }, { new: true })
                .then(res.status(200).json("Password Changed"))
                .catch(err => { console.log(err) })
            })


          });

        } else {
          return res
           .status(400)
            
            .json({ passwordincorrect: "Old Password Incorrect" });
            console.log("not correct")

        }
      });



    });
});


module.exports = router;



