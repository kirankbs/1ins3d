const Discord = require('discord.js');

module.exports = {
    name: 'congratz',
    execute(message, args){
        
        const content = args[0] || ''
        const embed = new Discord.MessageEmbed()
        .setDescription(`Congratulations ${content}`)

        message.delete();
        message.channel.send(embed);
    }

}
