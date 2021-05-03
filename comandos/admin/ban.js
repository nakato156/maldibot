const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "ban",
    alias:["banear"],
    description: "Banea a un usuario del servidor",
    usage: "<user> <razon>",
    run:  async (client, message, args) =>{
        if(!message.member.hasPermission("BAN_MEMBERS",{ checkAdmin: false})) return message.reply("No tienes permisos")
        
        const user = message.mentions.users.first()
        const userMenber = message.mentions.members.first()

        let reason = args.slice(1).join(" ")
        if(!userMenber) return message.channel.send("No has mencionado a un usuario")
        if(!reason) return message.channel.send("Indica la razon del baneo")

        const embed = new MessageEmbed()
        .setTitle("BANEO")
        .setThumbnail(user.avatarURL())
        .setColor("RED")
        .addField("Usuario baneado:", user)
        .addField("ID", userMenber.id)
        .addField("Motivo", reason)
        .setDescription(`${message.author.username} ha baneado a un Usuario`)
        await userMenber
        .ban({
            reason,
        }).then(()=>{
            message.channel.send({embed: embed})
            user.send({embed: embed}).catch(err=>console.error(err))
        }).catch(()=>message.reply("No se ha podido banear"))
    }
}