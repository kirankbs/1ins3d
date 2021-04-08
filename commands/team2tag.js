const Discord = require('discord.js');

module.exports = {
    name: 'team2tag',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('indians 2 Squad tag')
        .setDescription('e321eafb')
        .setFooter('Long press to copy');

        message.delete();
        message.channel.send(embed);
    }

}
