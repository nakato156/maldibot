module.exports ={
    name: "msg",
    alias:["msg"],
    description: "envia mensaje a la persona mencionada",
    usage:"<user> <mensaje> -d(opcional)",
    cooldowns: 15,
    run: (client, message, args) =>{
        const user = message.mentions.users.first();
        let mensaje = args.slice(1).join(" ")
        if(user){
          if (message.content.includes('-d')){
            message.delete({timeout: 100})
            mensaje = args.slice(1,args.length-1).join(" ")
          }
          return user.send(`${message.author} dice: ${mensaje}`)
        }else{
            return message.reply("No has mencianado a alguien para enviar el mensaje!");
        }
    }
}