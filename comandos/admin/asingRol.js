module.exports = {
    name: "asingRol",
    alias:["asingrol","asingRoles"],
    description: "asigna un rol a un usuario",
    usage: "<user> <name rol>",
    run: async (client, message, args) =>{
        if(!message.member.hasPermission("MANAGE_ROLES",{ checkAdmin: false})) return message.reply("No tienes permisos")
        const rolname = args[1]
        const user =  message.mentions.members.first();
        if(!user) return message.channel.send("Debes mencionar a un usuario")
        let rol = message.guild.roles.cache.find(r => r.name === rolname);
        if(!rol) return message.channel.send('Rol no encontrado en el servidor.');
        user.roles.add(rol).catch(err=>console.error(`Ha ocurrido un error => ${err}`));
    }
}