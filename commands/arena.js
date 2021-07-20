const Discord = require('discord.js');

module.exports = {
    name: 'challengechart',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Arena Challenge Continue Chart')
        .setDescription('This chart shows how many diamonds needed to continue challenge after loosing any battle')
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/801590799376187422/sniper_challenge_continue.jpg');

        //message.delete();
        message.channel.send(embed);
    }

}