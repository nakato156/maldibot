const { MessageEmbed } = require('discord.js')
const invocate = require('../../db/models/invocations')

module.exports ={
    name: "invocacion",
    alias:["invocation","super"],
    description: "Invoca a un usuario",
    usage: "<name of invocation>",
    cooldowns: 7,
    run: async (client, message, args) =>{
        const user = message.author;
        const invocation = args.slice(0).join(" ")
        let server = message.guild
        const userInvocation = await invocate.findOne({'invocation': invocation})
        if(userInvocation !=null || userInvocation!=undefined){
            //Message embed to User
            const embed = new MessageEmbed()
            .setTitle(`se ha invocado a un ${userInvocation.invocation}`);
            //Message embed to User invocate
            const userEmbed = new MessageEmbed()
            .setTitle('Se te ha invocado')
            .addField('invocado por', user)
            .addField('Servidor invocado', server.name)
            .addField('canal', message.channel.name )
            //get info to user from id 
            const userInvoked = await client.users.fetch(userInvocation.userID)
            console.log(userInvoked)
            //rellenando embed de la invocacion
            embed
            .setThumbnail(userInvoked.avatarURL())
            .setFooter('invocacion ',user.avatarURL())
            //send message embed
            userInvoked.send({embed:userEmbed})
            return message.channel.send({embed:embed})
        }
        return message.reply('No hay nadie con esa invocacion')
    }
}