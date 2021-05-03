const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "unban",
    alias:["desban"],
    description: "Desbanea a un usuario del servidor",
    usage: "<user ID>",
    run:  async (client, message, args) =>{
        // if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes permisos")

        let reason = args.slice(1).join(" ")
        let userID = args[0]
        console.log(userID)
        
        if(!reason) reason = "No se ha obtenido una razon"
        if(!args[0]) return message.reply('no se que hace')
        if(isNaN(args[0])) return message.reply("El ID no es un numero")

        message.guild.fetchBans().then(async bans=> {
            if(bans.size === 0)return message.channel.send("Este servidor no tienen usuarios baneados");
            let bUser = bans.find(b => b.user.id == userID);
            if(!bUser) return message.channel.send("El usuario no esta baneado");
            await message.guild.members.unban(bUser.user, reason).catch(err=>{
                console.error(err)
                return message.channel.send("Ha ocurrido un error al Desbanear al usuario")
            }).then((e)=>{
                console.log(e)
                message.channel.send(`Se ha Desbaneado satisfactoriamente a ${args[0]}`)
            })
        })
    }
}