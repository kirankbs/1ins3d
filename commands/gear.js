const Discord = require('discord.js');

module.exports = {
    name: 'gearchart',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Tactical Gear Upgrade Chart')
        .setDescription('This chart shows how many battle tokens required to upgrade Tactical gear suite')
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/801590908234498048/image0.jpg');

        message.delete();
        message.channel.send(embed);
    }

}