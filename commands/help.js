const Discord = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Available BOT commands')
        .setDescription(`!msrchart - MSR Upgrade Chart

        !challengechart - Arena Challange continue chart
        
        !tacticalchart - Upgrade tactical gear suite chart
        
        !pvpchart - PvP points chart
        
        !killchart - All kind of points for killing enemy
        
        !respawns <@userid> - Send Respawn spots to mentioned user id. 
        
        !squadwar - Poll to play Squad war or not
        
        !wc <@userid> - Welcome and Compliance list for new user
        
        !tags - All Squad tags
        
        !teamtag - indians 1¹ᶦᶰ Squad tag
        
        !team2tag - indians 2 Squad
        
        !team3tag - 1st_indians Reserve Squad tag
        
        !signature - Squad Signature
        
        !eventvote <Write any event name here> - Create voting event.
        
        !eventwarn - It is general event warning anouncement to not open PvP Arena`)

        message.delete();
        message.channel.send(embed);
    }

}

