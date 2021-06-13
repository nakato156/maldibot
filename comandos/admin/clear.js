module.exports = {
    name: "clear",
    alias:["clean","limpiar"],
    description: "Elimina un numero especifico de mensajes ()entre 1 y 99",
    usage: " <number (1,99)>",
    run:  async (client, message, args) =>{
        if(!message.member.hasPermission("MANAGE_MESSAGES",{ checkAdmin: false}))return message.reply("No tienes permisos para eliminar mensajes")
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES",{ checkAdmin: false}))return message.reply("No tengo el permisos para eliminar mensajes")

        let cantidad = args.slice(0);
        
        if(isNaN(cantidad)) return message.reply("Debes especificar un numero entero positivo")
        cantidad = parseInt(cantidad)
        if(0>=cantidad>=100) return message.reply("Debes especificar un numero mayor a 0 y menor de 100") 
        
        message.channel.bulkDelete(cantidad)
        .catch(err => message.channel.send("Ha ocurrido un error al eliminar los mensajes"))   
    }
}