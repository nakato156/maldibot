const {MessageEmbed} = require('discord.js')
const BDprefix = require('../../db/models/prefixs');

module.exports = {
    name: "prefix",
    alias:["prefix"],
    description: "Establece el prefijo para invocar al bot.\nIndica cual es el prefijo utilizado",
    usage: "<new_prefix>\n!prefix help",
    run:  async (client, message, args) =>{
        if(!message.member.hasPermission("MANAGE_ROLES",{ checkAdmin: false})) return message.reply("No tienes permisos")
        
        const prefix = args[0]
        const user = message.author;
        const serverID = message.guild.id;

        if(!prefix.trim()) return message.channel.send(`Indique un prefijo`)

        const server = await BDprefix.findOne({'serverID':serverID})
        console.log(prefix)

        if(prefix.trim()==="help"){
            let thisPrefix = server ? server.prefix : "!";
            return message.channel.send(`El prefijo establecido en el servidor es \`${thisPrefix}\``)
        }
        else if(server !=null || server != undefined){
            await BDprefix.findOneAndUpdate({"serverID": serverID},{
                $set:{
                    prefix: prefix,
                    userID: user.id
                }
            }, {useFindAndModify: false})
        }else {
            BDprefix.insertMany({
                serverID,
                prefix,
                userID: user.id,
            })
        }
        const embed = new MessageEmbed()
        .setTitle("Cambio de prefijo")
        .setColor("RED")
        .addField("Nuevo prefijo", prefix)
        .setDescription(`Se ha cambiado el prefijo del bot!.`)
        return message.channel.send({embed: embed})
    }
}