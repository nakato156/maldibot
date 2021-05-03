class controllerRoles{
    constructor(message,role){
        this.message = message;
        this.role = role;
    }
    static getRole(message,nameRole){
        let rol = message.guild.roles.cache.find(r => r.name === nameRole);
        if(!rol) return null
        return rol
    }
    static updateRole(message,role,permissions=null){
        let perms = permissions ? permissions : role.permissions;
        this.SetPermissions(message,role,perms)
    }
    static SetPermissions(message,role, permissions=null){
        const rol = this.getRole(message,role.name)
        if(!rol) return message.channel.send("El rol elejido no fue encontrado, verifica que este escrito correctamente")
        let perms = permissions ? permissions : role.permissions
        return rol.setPermissions(perms);
    }
    static createRole(message,role){
        try {
            message.guild.roles.create({
                data:{
                    name: role.name,
                    color: role.color,
                    permissions: role.permissions
                }
            });
            return message.channel.send(`Se ha creado el rol ${role.name}`)
        } catch (err) {
            return message.channel.send(`Vaya! No se ha podido crear el rol ${role.name} verifica que el color o los permisos ingresados sean validos `)
        }
    }
}
module.exports = controllerRoles;