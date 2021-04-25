const Discord = require('discord.js');
const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'wc',
    execute(message, args){

        const targetMember = message.mentions.members.first();
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Welcome')
        .setDescription(
        `<@${targetMember.user.id}>! Welcome to the group chat of 1st_indians.`+
        "\n\nTo join us"+
        "\nYou have to comply with certain requirements before joining this group, they are:"+
        "\n1. A latest screenshot of your game profile"+
        "\n2. Your game name"+
        "\n3. You have to state your approx. age"+
        "\n4. You have to state your working field and approx locality"+

        "\n\nIf you want to join us, please comply with requirements and we will take you in")
        
    

        message.delete();
        message.channel.send(embed);
    }

}