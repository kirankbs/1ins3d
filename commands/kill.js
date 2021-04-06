const Discord = require('discord.js');

module.exports = {
    name: 'killchart',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Kill points')
        .setDescription('This chart shows how many points player get per kill based on riffle, head shots, consecutive kills, Revenge kills')
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/803945646213169162/1611745917181.jpg');

        message.delete();
        message.channel.send(embed);
    }

}