const {MessageEmbed} = require('discord.js');

module.exports = {
    name: "kick",
    alias:["patear"],
    description: "Patea a un usuario",
    usage:"<user> <razon>",
    run: (client, message, args)=>{
        if(!message.member.hasPermission("KICK_MEMBERS",{ checkAdmin: false})) return message.reply("No tienes permisos")

        const member = message.mentions.members.first();
        const user = message.mentions.users.first()
        let reason = args.slice(1).join(" ")
        
        if(!member) return message.channel.send("No has mencionado a un usuario")
        if(!reason) return message.channel.send("Indica la razon")

        const embed = new MessageEmbed()
        .setTitle("Kick")
        .setColor("RED")
        .addField("Usuario pateado:", user)
        .addField("ID", member.id)
        .addField("Motivo", reason)
        .setDescription(`${message.author.username} ha baneado a un Usuario`)

        member.kick().then(y=>{
            user.send({embed:embed})
            return message.channel.send(`el usuario ${member} ha sido ¿pateado?`)
        }).catch(e=>{
            return message.channel.send(`no se ha podido ¿patear? al usuario ${member} `)
        })
    }

}