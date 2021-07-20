const Discord = require('discord.js');

module.exports = {
    name: 'team3tag',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('indians (rest squad) tag')
        .setDescription('b3861585')
        .setFooter('Long press to copy');

        //message.delete();
        message.channel.send(embed);
    }

}
