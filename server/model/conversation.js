const mongoose = require("mongoose")


const conversationschema = new mongoose.Schema({
    members:{
        type:Array,
        required:true,
    },
}, {timestamps:true}
)

module.exports  = mongoose.model("Conversation", conversationschema)