const Discord = require('discord.js');

module.exports = {
    name: 'team2tag',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('indians 1¹ᶦᶰ 2 Squad tag')
        .setDescription('5ca30e86')
        .setFooter('Long press to copy');

        //message.delete();
        message.channel.send(embed);
    }

}