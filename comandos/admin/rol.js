const ROLES = require('../../dev.json')
const { installRol, installAllRoles } = require('../../functions/installRol')
const { createRole } = require('../../controllers/controllerRoles')
module.exports = {
    name: "rol",
    alias:["roles"],
    description: "Crea o instala un rol en el servidor",
    usage: "\n crear => <command> create <name Rol> <color> <permissions?> \n instalar => <command> install <name rol>",
    run: async (client, message, args) =>{
        if(!message.member.hasPermission("MANAGE_ROLES",{ checkAdmin: false})) return message.reply("No tienes permisos")
        const name = args.slice(1,2)
        const num = args.slice(2,3)
        let perms = args.slice(3)
        if(args[0].toLowerCase() == "install" || args[0].toLowerCase() == "i"){
            const nameRol = args[1]
            if(nameRol.toLowerCase() == "all") {
                installAllRoles(ROLES.roles,message)
                return console.log("TODOS")
            }
            ROLES.roles[nameRol].forEach(r => installRol(r, message))
            return message.channel.send("Se han instalado los Roles predeterminados")
        }
        if(args[0].toLowerCase() == "create"){
            if(!name[0]) return message.channel.send("Especifica un nombre para el nuevo rol");
            if(!num[0]) return message.channel.send("Especifica un color para el rol")
            if(!perms) perms = [""]
            const role = {"name": name[0], "color": num[0], "permissions":perms}
            createRole(message,role)
        } 
        return
    }
}