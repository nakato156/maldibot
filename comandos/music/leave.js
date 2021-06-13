module.exports ={
    name: "leave",
    alias:["salir"],
    description: "detiene la musica",
    usage: "",
    run: async (client, message, args) =>{
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.reply("Debes estar conectado a un canal de voz")
        try{
            voiceChannel.leave()
            message.channel.send(`${message.author} me ha botado del canal de voz`)
        }catch (err){
            message.channel.send("Ha ocurrido un error al salir del canal de voz")
        }
    }
}