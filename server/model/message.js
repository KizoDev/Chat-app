const mongoose = require("mongoose")


const messageschema = new mongoose.schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
    message:{
        type:Spring,
        required:true,
    },
    conversationId:{
        type:Spring,
        required:true,
    }
}, {timestamps}
)

module.exports  = mongoose.model("Message", messageschema)