const {MessageEmbed} = require('discord.js');

module.exports ={
    name: "help",
    alias:["h","commands"],
    description: "muestra todos los comando o como se utiliza uno en especifico",
    usage: ' \n !help <comand>',
    coldown: 6,
    run: (client, message, args) =>{
        const { commands } = message.client;
        const embed = new MessageEmbed();
        if(!args.length){
            
            embed.setTitle("Lista de comandos")
            embed.setColor("BLUE")
            commands.map(command => {
                embed.addField(`${command.name} \n alias -> ${command.alias}:`, command.description)
            }).join('\n')
            embed.setFooter(`Nota\n Puedes enviar \`!help [command name]\` para obtener informacion de un comando especifico!`,'https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/Pexels-Screenshot-1.png')

            return message.reply({embed:embed})
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.alias.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }
        embed.setColor("PURPLE")
        embed.setTitle(`Comando ${command.name}`)
        embed.addField('Nombre:', command.name)

        if (command.alias) embed.addField(`Alias:`, command.alias.join(', '));
        if (command.description) embed.addField('Description:', command.description);
        if (command.usage) embed.addField('Uso(s):', `!${command.name} ${command.usage}`);
        
        // data.push(`**Cooldown:** ${command.cooldown || 5} second(s)`);

        message.channel.send({embed:embed, split: true });
    }
}
