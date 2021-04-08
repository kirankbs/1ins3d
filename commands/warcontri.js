const Discord = require('discord.js');
const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'warcontri',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad War Contributions!')
        .setFooter('👍 on score you are targetting')
        
    

        message.delete();
        message.channel.send(embed).then(embedMessage => {
            embedMessage.react(':thumbsup:');
        });
    }

}