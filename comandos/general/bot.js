module.exports ={
	name: "bot",
	alias:[],
	description: "llama al bot",
	usage: "",
	cooldown: 7,
	run: (client, message, args) =>{
		const { cooldowns } = client;
		
		server = message.guild
		return message.channel.send(`Helou soy el Bot de ${server.name}`)
	}
}