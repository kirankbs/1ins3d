const Discord = require('discord.js');

module.exports = {
    name: 'respawns',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Respawn spots')
        .setDescription('These images show enemy respawn locations')

        const embed1 = new Discord.MessageEmbed()

        message.delete();
        message.channel.send(embed);
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588955430682634/IMG_20210201_132517-2.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588955656388608/IMG_20210201_132431-2.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588955900706836/IMG_20210201_132543.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956113829929/IMG_20210201_132454-2.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956339929118/IMG_20210201_132636-2.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956634578944/1610989048459.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956911534080/IMG_20210201_132701-1.jpg');
        message.channel.send('https://cdn.discordapp.com/attachments/801590191907274772/820588957124919306/IMG_20210201_132636-1.jpg');

    }

}