const mongoose = require("mongoose")


const conversationschema = new mongoose.Schema({
    member:{
        type:Array,
        required:true,
    },
}, {timestamps:true}
)

module.exports  = mongoose.model("Conversation", conversationschema)