
const Discord = require('discord.js');

module.exports = {
    name: 'autowelcome',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('MSR Upgrade Chart')
        .setDescription(
            "<@$authorID>! Welcome to the group chat of 1st_indians."+
            "\n\nTo join us \nYou have to comply with certain requirements before joining this group, they are:"+
            "\n1. A latest screenshot of your game profile"+
            "\n2. Your game name"+
            "\n3. You have to state your age"+
            "\n4. You have to state your wirking field and approx locality"+
            "\n\nIf you want to join us, please comply with requirements and we will take you in")
        .setImage('https://cdn.discordapp.com/attachments/801590191907274772/801590701338132500/sniper_msr_upgrade.jpg');

        message.delete();
        message.channel.send(embed);
    }

}
