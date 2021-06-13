require('dotenv').config()
const { Client, Collection } = require('discord.js');
require('./db/conexion')
const client = new Client();
const fs = require('fs')
const messageSaveChats = require('./functions/register_chat')

client.music = new Map()
client.commands = new Collection();
client.cooldowns = new Collection();
client.calls = new Collection();
const { cooldowns } = client;
const { calls } = client;

const folders = fs.readdirSync('./comandos')

for (let folder of folders){
  const archivos = fs.readdirSync(`./comandos/${folder}`).filter((file)=> file.endsWith('.js'))
  for (archivo of archivos){
    const commands = require(`./comandos/${folder}/${archivo}`);
    client.commands.set(commands.name, commands);
  }
};

client.on('ready', ()=>{
    console.log('Bot is ready')
    client.user.setPresence( {
      activity: {
          name: `a todos`,
          type: "WATCHING"
      },
      status: "online"
    });
})
const now = Date.now(); 

client.on('message', message => {
  if(message.author.bot)return;
  messageSaveChats.saveMessage(message)
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  if (/[a-z]\:\/\/porn|xvi|(x{2,3})\.?$/i.test(message) || /[a-z]\:\/\/[a-zA-Z]\.?\/q= porn|xvi|(x{2,3})$/i.test(message) || /p{1,}o{1,}r{1,}n{1,}|xvi|(x{2,5})\.?$/i.test(message)){
    message.delete()
    .then(y=>console.log(`el mensaje borrado fue ${message.content}`))
    .catch(e=>console.log(`error al borrar mensaje: '${e}'`));
    message.channel.send("No se admite nopor")
  }

  if (message.content.startsWith(">")) {
    let args = message.content.slice(1).trim().split(/ +/g)
    let command = args.shift().toLowerCase()
    let cmd = client.commands.get(command) || client.commands.find(c=>c.alias.includes(command))

    if(!cmd) return message.channel.send("Valla que incomodo \nUtiliza !help para ver la lista de comandos")
    //cooldowns the commands
    // crea la colleccion si no existe
    if (!cooldowns.has(cmd.name)) {
      cooldowns.set(cmd.name, new Collection());
      calls.set(cmd.name, new Collection());
		}
    //get cooldown the command
    const timestamps = cooldowns.get(cmd.name);
    const cooldownAmount = (cmd.cooldown || 10) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`por favor espere ${timeLeft.toFixed(1)} segundos(s) para reusar el \`${cmd.name}\` command.`);
      } 
    }
    if(cmd){
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
      return cmd.run(client,message,args)
    }
  }
});

client.on('guildMemberAdd', member => { // event when add new user
  // Send the message to a designated channel on a server:
    let channel = member.guild.channels.cache.find(ch => ch.id === "818508230060802078" );
    if (!channel) return 
    // Send the message, mentioning the member
    return channel.send(`Bienvenido al server, por favor manten una conducta adecuada :wink: , aun estoy en desarrollo :stuck_out_tongue_closed_eyes:`);

});
  
client.login(process.env.TOKEN_BOT)
