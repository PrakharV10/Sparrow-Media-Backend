const express = require('express');
const router = express.Router();
let userTable = require('./Data/usertable');

router.route('/')
  .post((req, res) => {
  const {email, password} = req.body;
  const currentUser = userTable.filter((one) => one.password === password && one.email === email)

  if(currentUser.length !== 0){
    res.status(200).json({verified : true , userId : currentUser[0].userId, message : "Login successful"})
  } else{
    res.status(401).json({verified : false, userId : null, message : "Something is wrong"})
  }
})

module.exports = router;