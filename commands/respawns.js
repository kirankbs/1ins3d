const {MessageEmbed, Client} = require('discord.js');

module.exports = {
    name: 'respawns',
    execute(message, args, client){
        
        const embed = new MessageEmbed()
        .setTitle('Respawn spots')
        .setDescription('These images show enemy respawn locations')

        function getUserFromMention(mention) {  
            if(!mention) return;

            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.cache.get(mention);
            }
        }

        function sendRespawnLocations(destination) {
            destination.send(embed);
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588955430682634/IMG_20210201_132517-2.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588955656388608/IMG_20210201_132431-2.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588955900706836/IMG_20210201_132543.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956113829929/IMG_20210201_132454-2.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956339929118/IMG_20210201_132636-2.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956634578944/1610989048459.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588956911534080/IMG_20210201_132701-1.jpg');
            destination.send('https://cdn.discordapp.com/attachments/801590191907274772/820588957124919306/IMG_20210201_132636-1.jpg');
        }

        if(args[0]) {            
            const user = getUserFromMention(args[0])
            if (user) sendRespawnLocations(user);
        } else sendRespawnLocations(message.channel);

        message.delete();

    }

}