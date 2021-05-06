const express = require('express');
const router = express.Router();
let userTable = require('./Data/usertable');
const { v4: uuidv4 } = require('uuid');

router.route('/')
  .post((req,res)=>{
  const {username, password, email} = req.body;
   let d = new Date();
   let a = d.toString()

  if(userTable.filter(one => one.email === email).length === 0){
    const newUser = {
      userId : uuidv4(),
      username,
      password,
      email,
      createdOn : a
    }
    userTable.push(newUser)
    console.log(userTable)
    res.json({success : true, user : newUser, message : "successful"})
  } else {
    res.json({success : false, user : null, message : "Email has been already defined"})
  }
});

module.exports = router;