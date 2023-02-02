const express = require('express')
const app = express()
const User = require('../model/user')
const Conversation = require('../model/conversation')
const Verify = require('../middleware/verifytoken')

//checking if the convo already exist
const conversation = async(req, res) =>{
    const {receiverId} = req.body
    const currentUserid = req.user.id
    const convoalreadyexist = await Conversation.findOne({members:{$all:[receiverId, currentUserid]} })
        if (convoalreadyexist) {
            return res.status(401).json({msg:'conversation already exist'})
        } 
    
    const conversation = new Conversation({
        members: [
        receiverId,
        currentUserid
        ]
    })
    const savedconvo = await conversation.save()
      res.json({
        status: 200,
        message: 'conversation created successful',
        successfull:true,
        data:savedconvo
      })

    
}
//get user conversation with id
const getAllconversation = async (req, res) => {
    if (req.user.id === req.params.userId) {
        try {
        const currentUserId = req.user.id
        const conversation = await Conversation.find({members: {$in: [currentUserId]}})
        return res.json({
            status: 200,
            message: 'available conversation',
            successfull:true,
            data:conversation
          })
        } catch (error) {
            console.log(error);
        }
        
    } else {
        res.json({
            status: 400,
            message: 'you cam only get your conversation',
            successfull:false,
            data:null
          })
    }
}

 //get single conversation
const getsingleconversation = async(req, res) => {
    const currentUserid = req.user.id
    const conversation =await Conversation.findById(req.params.convoId)
    if (conversation.members.includes(currentUserid)) {
        res.json({
            status: 200,
            message: 'available conversations',
            successfull:true,
            data:conversation
          })
    } else {
        res.json({
            status: 400,
            message: 'you cam only get conversation that includes you',
            successfull:false,
            data:null
          })
    }
}

module.exports = {conversation, getAllconversation, getsingleconversation}