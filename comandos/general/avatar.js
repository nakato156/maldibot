module.exports ={
    name: "avatar",
    alias:["av"],
    description: "Muestra el avatar de la persona",
    usage: "\n !avatar <user>",
    run: (client, message, args) =>{
        const user = message.mentions.users.first();
        if(!user) return message.reply(message.author.displayAvatarURL());
        return message.reply(user.displayAvatarURL());
    }
}
