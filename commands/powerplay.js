const Discord = require('discord.js');

module.exports = {
    name: 'powerplay',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Power Play Yes or No!')
        .setFooter('👍 Playing - 👎 Not Playing')

        message.delete();
        message.channel.send(embed).then(embedMessage => {
            embedMessage.react('👍');
            embedMessage.react('👎');
        });
    }

}