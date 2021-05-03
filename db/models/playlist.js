const {Schema, model} = require('mongoose')

const playlist = new Schema ({
    userID: String,
    music: Array,
})
module.exports = model('playlist',playlist)
