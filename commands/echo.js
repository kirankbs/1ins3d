const Discord = require('discord.js');

module.exports = {
    name: 'echobot',
    execute(message, args){
        
        const content = args.join(' ') || '';
        const embed = new Discord.MessageEmbed()
        .setDescription(content);

        message.delete();
        message.channel.send(embed);
    }

}
