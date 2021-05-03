class Verify {
    constructor(message,role){
        this.message = message;
        this.role = role;
    }
    static verifyRole(message, role){
        let rol = message.guild.roles.cache.find(r => r.name === role.name);
        if(!rol) return true //rol not exist
        return false //rol exist
    }
}
module.exports = Verify;