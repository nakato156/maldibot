const {Schema, model} = require('mongoose')

const chat = new Schema ({
    channelID:String,
    channelName:String,
    userID: String,
    message: String,
})
module.exports = model('chats',chat)