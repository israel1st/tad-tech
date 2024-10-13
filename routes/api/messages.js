const express = require("express");
const router = express.Router();
const passport = require("passport");
// const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
// let path = require('path');


// Load Message model
const Msg = require("../../models/Message");

// Load Q&A model
const Question = require("../../models/Q&A");

// Load News model
const News = require("../../models/News");


router.post("/mainmessage", (req, res) => {

  const newMsg = new Msg({
    message: req.body.Msg,
    class: req.body.Dept,
  });
  
  
  newMsg
    .save()
    // .then(msg => res.json(msg))

    // .then(console.log(req.body))
    .catch(err => console.log(err));

   
});

router.post("/sendsubmessage", (req, res) => {

  Msg.updateOne({message: req.body.topic}, {$push: {"messageArray" : req.body.subMsg}})
.then(res => console.log("sent"))
    .catch(err => console.log(err));


});

router.get("/fetchmessages", async (req, res) => {

  const theMessages = await Msg.find();

  res.send(
    theMessages
  )
 
});

router.post("/deletemessage", (req, res) => {

  Msg.deleteOne({ _id: req.body.id })


    .catch(err => console.log(err));


});

router.post("/deletesubmessage", (req, res) => {

  // subs = Msg.findOne({_id: req.body.topicID}).class; 

  Msg.findOne({_id: req.body.topicID})
  .then(found =>{
    let subs = found.messageArray
    
    subs.splice(req.body.subIndex,1)
    console.log(subs);

    Msg.findOneAndUpdate({_id: req.body.topicID},{messageArray: subs},{new: true},
      function(
        err,
        inventory
      ) {
        if (err) {
          console.log("err", err);
          res.status(500).send(err);
        } else {
          console.log("success");
          res.send(inventory);
        }
      }
      );
  })

.catch(err => console.log(err));

});


router.post("/sendquestion", (req, res) => {

  const newQuestion = new Question({
    question: req.body.question,
    class: req.body.Dept,
    name: req.body.name
  });
  // res=>res.send(req.body.Msg)
  // .catch(err => console.log(err));

  newQuestion
    .save()
    .then(console.log(req.body))

    // .then(msg => res.json(msg))

    .catch(err => console.log(err));


});

router.get("/fetchquestions", async (req, res) => {

  const theQuestions = await Question.find();

  res.send(
    theQuestions
  );
});

router.post("/sendanswer", (req, res) => {

  
  Question.findOne({_id: req.body.id})
  .then(question =>{
    // console.log(question.question);

    Question.findOneAndUpdate({_id: req.body.id},{answer: req.body.answer},{new: true},
    function(
      err,
      inventory
    ) {
      if (err) {
        console.log("err", err);
        res.status(500).send(err);
      } else {
        console.log("success");
        res.send(inventory);
      }
    }
    );
  })


});


router.post("/uploadimage", async (req, res) => {

  // Msg.updateOne({message: req.body.topic}, {$push: {"imageArray" : req.body.image}})
  // .then(res => console.log("sent"))
  //     .catch(err => console.log(err));
  
  if (req.body.image === "") {
    // res.send('no image');
    console.log('no image');
  } else {
      Msg.updateOne({message: req.body.topic}, {$push: {"messageArray" : req.body.image}})
      .then(res => console.log("sent"))
          .catch(err => console.log(err));
      
  }  
 

    
});



router.post("/postnews", (req, res) => {

  const newNews = new News({
    title: req.body.title,
    story: req.body.story,
    image:  req.body.image,
    imageArray:  req.body.imageArray,
  });
  
  
  newNews
    .save()
    .then(res => console.log(newNews))
    .catch(err => console.log(err));

   
});

router.get("/fetchnews", async (req, res) => {

  const theNews = await News.find();

  res.send(
    theNews
  );
});

module.exports = router;