const Discord = require('discord.js');

module.exports = {
    name: 'teamtag',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('indians 1¹ᶦᶰ Squad tag')
        .setDescription('b04c97f6')
        .setFooter('Long press to copy');

        message.delete();
        message.channel.send(embed);
    }

}
