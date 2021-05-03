const model = require('../../db/models/playlist')
const {MessageEmbed} = require('discord.js')
module.exports ={
    name: "list",
    alias:["playlist","mylist"],
    description: "Guarda una cancion en una lista de favoritos o la muestra",
    usage: "\n !<command> <name music>",
    cooldowns: 2,
    run: async (client, message, args) =>{
        const music = args.slice(0).join(" ")
        const user = message.author.id
        if(!music || music == " "){
            //creacion de embed
            const embed = new MessageEmbed()
            .setTitle('Mi Playlist')
            .setColor("PURPLE");
            console.log('no hay music')
            //consulta de los datos
            const playlist = await model.findOne({'userID':user})
            if(!playlist || playlist.music =="") {
                return message.reply("No tienes canciones guardadas")
            }
            //recorriendo los datos obtenidos
            for(oneMusic of playlist.music){
                embed.addField("musica:", oneMusic)//llenado los campos
            }
            return message.channel.send({embed: embed})//retornando el mensaje
        }else{
            const lista = await model.findOne({'userID':user})
            if(lista !=null || lista != undefined){
                //agregando los datos en el array
                const playlist = await model.findOneAndUpdate({userID: user},{
                    $addToSet:{//si no exite lo guarda
                        music:music
                    }
                })
            }else{
                const playlist = new model({
                    userID:user,
                    music:[music]
                })
                playlist.save()
            }
        }
    }
}