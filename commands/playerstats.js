const Discord = require('discord.js');
const {MessageEmbed } = require('discord.js');
const QuickChart = require('quickchart-js');


const chart = {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Retweets',
        data: [12, 5, 40, 5]
      }, {
        label: 'Likes',
        data: [80, 42, 215, 30]
      }]
    }
  }

const encodedChart = encodeURIComponent(JSON.stringify(chart));  

const chartUrl = `https://quickchart.io/chart?c=${encodedChart}`;

module.exports = {
    name: 'ps',
    execute(message, args){

        const targetMember = message.mentions.members.first();
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Test Chart')
        .setImage(chartUrl)
        
    

        message.delete();
        message.channel.send(embed);
    }

}