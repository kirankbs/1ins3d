const Discord = require('discord.js');

module.exports = {
    name: 'msrchart',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('MSR Upgrade Chart')
        .setDescription('This chart shows how many battle coins required to upgrade MSR riffle')
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/801590701338132500/sniper_msr_upgrade.jpg');

        message.delete();
        message.channel.send(embed);
    }

}