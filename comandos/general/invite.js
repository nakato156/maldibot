const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "invite",
    alias:["invitacion"],
    description: "crea una invitacion para el servidor",
    usage: "",
    cooldowns: 7,
    run: (client, message, args) =>{
        const embed = new MessageEmbed()
        .setTitle('Invitacion')
        .setColor("GREEN");
        message.channel.createInvite()
        .then(invite => {
            console.log(`Created an invite with a code of ${invite.code}`)
            embed.setDescription(`enlace de invitacion: ${invite}`)
            return message.channel.send({embed: embed})
        })
        .catch(console.error);
    }
}