const express  = require('express')
const router = express.Router();
let userTable = require('./Data/usertable');

router.route('/')
  .get((req, res) => {
  res.json(userTable)
})

router.route('/:id')
  .get((req, res)=>{
  const {id} = req.params;
  const currentUser = userTable.filter(one => one.userId === id)
  if(currentUser.length === 0){
    res.json({message : "Id not found"})
  }else{
    res.json({message : "Success", user : currentUser[0]})
  }
})
  .post((req, res) => {
  const {id} = req.params;
  const {username, email, password} = req.body;
 
  userTable.forEach(one => {
    if(one.userId === id){
      one.username = username
      one.password = password
      one.email = email
    }
  })
  console.log(userTable)
  res.json({message : "successful"})
})

module.exports = router;