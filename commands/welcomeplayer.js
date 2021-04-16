const Discord = require('discord.js');
const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'wc',
    execute(message, args){

        const targetMember = message.mentions.members.first();
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Welcome')
        .setColor('FF0000')
        .setDescription(`
        <@${targetMember.user.id}>! Welcome to the group chat of 1st_indians.
        
        To join us
        You have to comply with certain requirements before joining this group, they are:
        1. A latest screenshot of your game profile
        2. Your game name
        3. You have to state your age
        4. You have to state your wirking field and approx locality

        If you want to join us, please comply with requirements and we will take you in`)
        
    

        message.delete();
        message.channel.send(embed);
    }

}