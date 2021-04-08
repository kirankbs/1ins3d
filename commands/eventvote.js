
const Discord = require('discord.js');

module.exports = {
    name: 'eventvote',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Poll for $message Event in Reserve Squad as per directions Yes or No?')
        .setDescription(`**Poll Time till 7PM IST.**

        🚨Rules for Events in Reserve Squad🚨
        1. No player shall even open PvP arena after entering reserve squad, he will only start playing when directed, This has to be remembered at all costs,
        2. Every player shall play to his level best when play in reserve is directed.
        3. Players should place their consent in voting channel for joining event in reserve
        4. Giving consent should be over till 7PM ist, then from 8 PM , reserve squad will be opened, players can directly enter, before that no one should place request as sometimes request gets lost and a player is stuck.
        Joining should be done till 00hrs after that reserve squad will be locked and no player will be allowed entry
        
        
        **Any queries regarding event or poll are to be asked in chat channel "Proud Indians".**`)
        .setFooter('Long press to copy')
        .setFooter('👍 Playing - 👎 Not Playing');

        message.delete();
        message.channel.send(embed).then(embedMessage => {
            embedMessage.react('👍');
            embedMessage.react('👎');
        });
    }

}