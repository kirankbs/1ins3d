const Discord = require('discord.js');

module.exports = {
    name: 'tags',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad tags')
        .setDescription(`
            indians 1¹ᶦᶰ : b04c97f6

            indians 2 : e321eafb

            1st_indians Reserve : 5ca30e86
        `);

        message.delete();
        message.channel.send(embed);
    }

}
