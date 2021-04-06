const Discord = require('discord.js');

module.exports = {
    name: 'squadwar',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad War Yes or No!')
        .setFooter('👍 Playing - 👎 Not Playing')

        message.delete();
        message.channel.send(embed).then(embedMessage => {
            embedMessage.react('👍');
            embedMessage.react('👎');
        });
    }

}