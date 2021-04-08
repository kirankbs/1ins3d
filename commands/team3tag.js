const Discord = require('discord.js');

module.exports = {
    name: 'team3tag',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('1st_indians Reserve Squad tag')
        .setDescription('5ca30e86')
        .setFooter('Long press to copy');

        message.delete();
        message.channel.send(embed);
    }

}