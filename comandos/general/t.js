module.exports ={
    name: "temp",
    alias:["t"],
    description: "el mensaje es temporal se elimina luego de 5s",
    usage:"<mensaje>",
    run: (client, message, args) =>{
        message.delete({timeout: 5000})
        .then(msg => console.log(`delete message to ${msg.content}`))
        .catch((err)=> message.reply('Fuiste!, el mensaje no se pudo eliminar'));
    }
}