const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require("passport");
const jwt = require('jsonwebtoken');
const keys = require("./config/keys");

const users = require("./routes/api/users");
const messages = require("./routes/api/messages");

const app = express();

mongoose.set('strictQuery', true);
const cors = require('cors');
// const { Server } = require('socket.io');

// const http = require('http').createServer(app);

app.use(cors());

// const io = new Server(http, {
//   cors: {
//     origin: '*',
//     methods: ["GET", "POST", "OPTIONS"]
//   },
// });

// let ousers = [];



// io.on('connection', (socket) => {
//   consle.log(`⚡: ${socket.id} user just connected!`);
  
 
//     ousers.push(socket.id);
//     // console.log(users);
//     socket.emit('newUser', ousers);
 

//   socket.on('disconnect', () => {
//     console.log('🔥: A user disconnected');
//     // console.log(socket.id);
//     //Updates the list of users when a user disconnects from the server
//     ousers = ousers.filter((user) => user !== socket.id);
//     // console.log(users);
    
//     socket.emit('newUser', ousers);
//     socket.disconnect();
//   });
// });


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true},
  )
  .then(() => console.log("MongoDB successfully"))
  .catch(err => console.log(err));

// Passport middleware
// app.use(passport.initialize());

// Passport config
// require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/messages", messages);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// http.listen(port, () => console.log(`HTTP Server up and running on port ${port} !`));

