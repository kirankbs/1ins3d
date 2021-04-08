const Discord = require('discord.js');

module.exports = {
    name: 'signature',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad Signature')
        .setDescription('¹ᶦᶰ')
        .setFooter('Long press to copy');

        message.delete();
        message.channel.send(embed);
    }

}