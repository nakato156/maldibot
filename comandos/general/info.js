const {MessageEmbed} = require('discord.js')
module.exports ={
    name: "info",
    alias:[],
    description: "obtiene informacion de la persona mencionada o de si mismo si no se menciona a alguien",
    usage: "\n !info <user>",
    run: (client, message, args) =>{
        const user = message.mentions.users.first() || message.author;
        // if(!user) user = message.author
        // If we have a user mentioned
        const member = message.member;
        const embed = new MessageEmbed()
    
        .setAuthor('Username: ' + user.tag, user.avatarURL())
        .setThumbnail(user.avatarURL())
        .addField('Creación de la cuenta', user.createdAt.toLocaleDateString(), true)
        .addField('Estado', user.presence.status)
        .addField('Apodo', member.nickname ? member.nickname : 'No tiene', true)
        .addField('Roles', 
            message.member.roles.cache.map(rol => `${rol.name}`).join(', ')
        )
        .setFooter('ID: ' + user.id)
        message.channel.send({embed: embed});
    }
}