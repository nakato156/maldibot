const myInvocate = require('../../db/models/invocations')

module.exports ={
    name: "myinvocation",
    alias:["myInvocation","myinvoc","nameinvoc"],
    description: "Establece tu nombre de invocacion",
    usage: "<my name of invocation>",
    cooldowns: 5,
    run: async (client, message, args) =>{
        const user = message.author;
        const nameInvocation = args.slice(0).join(" ")
        
        const invocate = await myInvocate.findOne({'userID':user.id})
        if(invocate !=null || invocate !=undefined){
            const newInvocation = await myInvocate.findOneAndUpdate({userID: user.id},{
                $set:{
                    invocation:nameInvocation
                }
            }, {useFindAndModify: false})
            console.log(invocate!=null)
            console.log(newInvocation)
            return user.send(`Tu nuevo comando de invocacion es: ${nameInvocation}`)
        }
        
        const myInvocation = new myInvocate({
            userID:user.id,
            invocation: nameInvocation
        })
        await myInvocation.save()
        return user.send(`Tu comando de invocacion es: ${nameInvocation}`)
    }
}