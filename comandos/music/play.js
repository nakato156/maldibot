const ytdl = require('ytdl-core');

module.exports ={
    name: "play",
    alias:["p"],
    description: "pone musica",
    usage: "<name music> o <url>",
    run: async (client, message, args) =>{
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.reply("Debes estar conectado a un canal de voz")
        //join to the channelVoice
        try{
            const connection = await voiceChannel.join()
            const dispatcher = connection.play(ytdl(args[0]))
            .on('finish',()=>{
                console.log("La cancion ha terminado")
                voiceChannel.leave()
            })
            .on('error',()=>console.log("Ha ocurrido un eror durante la reproduccion"))
        }catch(err){
            console.log(`Error weeeeyy noooooo ${err}`)
            return message.channel.send("Ha ocurrido un error al unirme al canal de voz, Lo siento :sob:")
        }
    }
}