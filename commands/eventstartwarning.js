const Discord = require('discord.js');

module.exports = {
    name: 'eventwarn',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('📢📢 No PvP 🚨🚨')
        .setDescription(`
        @everyone ALL PLAYERS OF RESERVE SQUAD PLEASE NOTE YOU will not play a single event in PVP or Downgrade untill it is declared to play
        
        Do not even open PvP Arena untill Management declares a GO, Remember it all times please!`)

        message.delete();
        message.channel.send(embed);
    }

}