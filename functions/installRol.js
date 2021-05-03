const { verifyRole } =require('./verifyRol')
const ctrlRol = require('../controllers/controllerRoles')
class installRoles{
    static installRol(rol,message) {
        if(!verifyRole(message,rol)){
            ctrlRol.updateRole(message,rol) //update the rol, set permission from json
            return message.channel.send(`El rol "${rol.name}" ha sido actualizado`)
        }
        return message.guild.roles.create({
            data:{
                name: rol.name,
                color: rol.color,
                permissions: rol.permissions
            }
        })
    }
    static installAllRoles(roles,message){
        for(rol in roles){
            role = roles[rol]
            role.forEach(r => {
                if(!verifyRole(message,rol)){
                    ctrlRol.updateRole(message,rol) //update the rol, set permission from json
                    return message.channel.send(`El rol "${rol.name}" ha sido actualizado`)
                }else{
                    message.guild.roles.create({
                        data:{
                            name: r.name,
                            color: r.color,
                            permissions: r.permissions
                        }
                    })
                }
            });
        }
    }
}
module.exports = installRoles