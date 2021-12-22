module.exports ={
    name: "afk",
    alias:["afk"],
    description: "Inicia un estado AFK",
    usage: "\n !afk <mensaje de afk>(opcional)\n !afk -d (para desactivar)",
    run: (client, message, args) =>{
        if(client.afk.has(message.author.id) && args[0]==="-d"){
            client.afk.delete(message.author.id)
        }else if(!client.afk.has(message.author.id)){
            const msg = args[0]!== "-d" || !args[0] ? args.join(" ") : "AFK";
            client.afk.set(message.author.id, {"start": new Date(), "msg": msg});
        }

        message.channel.bulkDelete(1)
        .catch(e => console.log("Ha ocurrido un error al eliminar los mensajes"))
    }
}
