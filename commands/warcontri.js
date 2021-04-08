const Discord = require('discord.js');

module.exports = {
    name: 'warcontri',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad War Contributions!')
        .setDescription('1M 👍 on score you are targetting')
        
        const embed1 = new Discord.MessageEmbed()
        .setDescription('750k 👍 on score you are targetting')

        message.delete();
        message.channel.send(embed).then(embedMessage => {
            embedMessage.channel.send(embed1);
        });
    }

}