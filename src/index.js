
  
const express = require("express");
const app = express();
//console.log(app);
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
var nodemailer = require('nodemailer');
//const creds = require('./config');
//const mail = require('./mail');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');
const main = require('./main');

const db = mysql.createPool({
  host: 'localhost',
  database: 'learner3',
  user: 'learner3',
  password: 'learner@123'
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());



db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

db.query(function(err) {
    if (err) {
      //console.error('error connecting MYSQL : ' + err.stack);
      console.error("fullError : " + err);
    } else {
      console.log("MYSQL connected as id : " + db.threadId);
      console.log("status : " + db.state);
    }
});

app.get("/showemployee",(req,res)=>{
 console.log("calling");
  const query1 = "select * from append";
  db.query(query1,(err,result)=>{
  res.send(result);
  console.log(result);
   })
  });


app.post("/submitemployee",(req,res)=>{
  const name = req.body.name;
  
 console.log("calling");
  const query1 = "insert into append values (?)";
  db.query(query1,[name],(err,result)=>{
  console.log(result);
  })
  
  
  
 var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 3000, // changed from 465
        secure: true,
        auth: {
            admin: "GMAIL_USER",
            pass: "PASSWORD"
        }
    });


var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '${req.body.append}' //Here we have to change with database
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  
});
  
        
});
