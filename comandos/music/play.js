const ytdl = require('ytdl-core-discord');
const yts = require( 'yt-search' )

module.exports ={
    name: "play",
    alias:["p"],
    description: "pone musica",
    usage: "<name music> o <url>",
    run: async (client, message, args) =>{
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.reply("Debes estar conectado a un canal de voz")
        //join to the channelVoice
        const connection = await voiceChannel.join()
        if(!connection) return message.channel.send("Ha ocurrido un error al unirme al canal de voz, Lo siento :sob:")
        if(!/[a-z]\:\/\/\.?$/i.test(message.content)){
            let music = args.slice().join(' ')
            const result = await yts(music)
            if(!result) return message.channel.send("No se ha encontrado la cancion")
            const vids = result.videos.slice(0, 1);
            music = vids[0].url
            play(connection,music)
            // vids.forEach(v => {
                // const views = String( v.views ).padStart( 10, ' ' );
                // console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
            // }) 
        }else{
            let music = args[0]
            play(connection,music)
        }            

        //function for playing music
        async function play(connection, url) {
            connection.play(await ytdl(url), { type: 'opus' });
        }
    }
}