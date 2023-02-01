const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
require('dotenv').config();
const User = require('../model/user')

 module.exports = function auth (req, res, next) {
  const token = req.header('auth-token');
  if(!token) return res.json({
        status: 401,
        message:('Access denied'),
        successfull:false,
        data:null
  })
      
  jwt.verify(token, 
   process.env.TOKEN_SECRET,(err, payload)=>{
    //req.user = verified
      if (err) {
        res.json({
            status: 400,
            message:('Invalid token'),
            successfull:false,
            data:null
          })
      }
    const {_id} = payload
    User.findById(_id).then(userdata =>{
      req.user = userdata
      next();

    })
  })
}
