const { Client, Intents, MessageEmbed, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '/';

const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.once('ready', () => {
    console.log('BOT is online!');
});


// Create an event listener for messages
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const   args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    console.log(command);

    if(command === 'msrchart'){
        client.commands.get('msrchart').execute(message, args);
    } else if(command == 'challengechart'){
        client.commands.get('challengechart').execute(message, args);
    } else if(command == 'gearchart'){
        client.commands.get('gearchart').execute(message, args);
    } else if(command == 'pvpchart'){
        client.commands.get('pvpchart').execute(message, args);
    } else if(command == 'killchart'){
        client.commands.get('killchart').execute(message, args);
    } else if(command == 'respawns'){
        client.commands.get('respawns').execute(message, args);
    } else if(command == 'squadwar'){
        client.commands.get('squadwar').execute(message, args);
    }
});




client.login('');
