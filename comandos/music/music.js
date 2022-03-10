module.exports ={
    name: "music",
    alias:["m"],
    description: "Reproduce/detiene musica",
    usage: "<option>\nopciones:\nplay: reproduce música\nstop: detiene la música",
    run: async (client, message, args) =>{
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.reply("Debes estar conectado a un canal de voz")
        const option = args[0]
        try{
            const queue = await client.distube.getQueue(voiceChannel)
            if(!queue && option!="play") return message.channel.send("Sin cola de reproducción")
            
            switch(option){
                case "play":
                    client.distube.play(voiceChannel, args.slice(1).join(" "), {textChannel: message.channel, member: message.member})
                    return message.channel.send("Reproduciendo música")
                case "stop": {
                    await queue.stop(voiceChannel)
                    return message.channel.send("Se ha detenido la música")
                }
                case "skip": {
                    return await queue.skip(voiceChannel)
                }
            }
        }catch(err){
            console.log(`Error weeeeyy noooooo ${err}`)
            return message.channel.send("Ha ocurrido un error al unirme al canal de voz, Lo siento :sob:")
        }
    }
}