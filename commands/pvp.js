const Discord = require('discord.js');

module.exports = {
    name: 'pvpchart',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('PvP points scoring chart')
        .setDescription('This table shows how many points player will get on 4th spot')
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/803342971922808882/1611602275739.jpg');

        message.delete();
        message.channel.send(embed);
    }

}