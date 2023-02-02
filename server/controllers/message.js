const express = require('express')
const app = express()
const Messsage = require('../model/message')

// create essage
const message = async (req, res) => {
    const {conversationId, message} = req.body

    const messages = new Messsage({
        conversationId,
        message,
        senderId:req.user.id

    })
    const savedMessage = await messages.save()
    res.json({
        status: 200,
        message: 'message created successful',
        successfull:true,
        data:savedMessage
      })
}
    
// getting all messages from a conversation

    const getAlllMessage = async (req, res) => {
        try {
            const allmessages = await Messsage.find({conversationId: req.params.convoId})
            res.json({
                status: 200,
                message: 'available messages',
                successfull:true,
                data:allmessages
              })
        } catch (error) {
            console.log(error);
        }
        

    }
 
module.exports = {message, getAlllMessage }
