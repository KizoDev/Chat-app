const mongoose = require("mongoose")


const messageschema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
    message:{
        type:String,
        required:true,
    },
    conversationId:{
        type:String,
        required:true,
    }
}, {timestamps:true}
)

module.exports  = mongoose.model("Message", messageschema)