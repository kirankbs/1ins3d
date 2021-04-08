const Discord = require('discord.js');

module.exports = {
    name: 'warreport',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad War Report')
        .setDescription('This report show war score and description')
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/803342971922808882/1611602275739.jpg');

        message.delete();
        message.channel.send(embed);
    }

}