const chatModel = require('../db/models/chats')
module.exports = {
    saveMessage: async (message)=>{
        if(process.env.ENVIROMENT_TYPE == "Dev") return console.log("Env Dev")
        const user = message.author.id
        const channelID = message.channel.id
        const channelName = message.channel.name   
        const atach = message.attachments;
        let Urls = []
        if (atach !=  []){
            atach.forEach(at => Urls.push(at.url))
        } 
        await chatModel.insertMany({
            channelID,
            channelName,
            userID: user,
            message: message.content,
            urls: Urls
        })
        // console.log(messageSave)
    }
}