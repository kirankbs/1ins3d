const Discord = require('discord.js');

module.exports = {
    name: 'tags',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Squad tags')
        .setDescription(
            "indians 1¹ᶦᶰ : b04c97f6"+
            " \n\indians 1¹ᶦᶰ 2 : 5ca30e86"+
            "\n\n indians (rest squad) tag : b3861585");

        //message.delete();
        message.channel.send(embed);
    }

}
