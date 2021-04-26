const Discord = require('discord.js');

module.exports = {
    name: 'wrongcommand',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Available BOT commands')
        .setDescription(
        '\n\n!msrchart - MSR Upgrade Chart'+
        '\n\n!challengechart - Arena Challange continue chart'+
        '\n\n!tacticalchart - Upgrade tactical gear suite chart'+
        '\n\n!pvpchart - PvP points chart'+
        '\n\n!killchart - All kind of points for killing enemy'+
        '\n\n!respawns <@userid> - Send Respawn spots to mentioned user id.'+
        '\n\n!squadwar - Poll to play Squad war or not'+
        '\n\n!wc <@userid> - Welcome and Compliance list for new user'+
        '\n\n!tags - All Squad tags'+
        '\n\n!teamtag - indians 1¹ᶦᶰ Squad tag'+
        '\n\n!team2tag - indians 2 Squad'+
        '\n\n!team3tag - 1st_indians Reserve Squad tag'+
        '\n\n!signature - Squad Signature'+
        '\n\n!eventvote <Write any event name here> - Create voting event.'+
        '\n\n!eventwarn - It is general event warning anouncement to not open PvP Arena'+
        '\n\n!powerplay - Poll to play Power play or not'+
        '\n\n!warreport latest 1 - Latest war report is shown. Number can be increased to show older report. e.x:- !warreport latest 2 shows 2nd last report.'
        );

        message.delete();
        message.author.send(`No such command: '${message.content}' exists!`);
        message.author.send(embed);
    }

}

