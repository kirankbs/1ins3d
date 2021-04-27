const Discord = require('discord.js');
const warreportjson = require('./warreport.json');
const QuickChart = require('quickchart-js');

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = {
    name: 'warreport',
    execute(message, args){

      const embed = new Discord.MessageEmbed()
        .setTitle('Squad War Report')

      message.delete();  

      if(args[0] == "latest") {
        const pos = (args[1] && Number(args[1]) > 1) ? (Number(args[1]) - 1) : 0

        if(warreportjson[pos]) {
          const {date, event, opps, score, image} = warreportjson[pos];
          const [squadScoreR, opponentScoreR] = score.split('vs');
          const squadScore = squadScoreR.trim().slice(-1) == "M" ? Number(squadScoreR.trim().slice(0, -1)) * 1000000 : Number(squadScoreR.trim().slice(0, -1)) * 1000;
          const opponentScore = opponentScoreR.trim().slice(-1) == "M" ? Number(opponentScoreR.trim().slice(0, -1)) * 1000000 : Number(opponentScoreR.trim().slice(0, -1)) * 1000;

          const result = squadScore > opponentScore ? "Victory" : "Defeat"
          embed.setDescription(
            `\ndate: ${date}`+
            `\nevent: ${event}`+
            `\nopps: ${opps}`+
            `\nscore: ${score}`+
            `\nresult: ${result}`
            ).setImage(image)

            message.channel.send(embed);
          }
      }
      
      if(args[0] == "last") {}

      if(args[0] == "highest"){}

      if(args[0] == "lowest"){}

      if(args[0] == "victories"){}

      if(args[0] == "defeats"){}

      if(args[0] == "vitoriesstreak"){}

      if(args[0] == "defeatsstreak"){}

      if(args[0] == "opshighest"){}

      if(args[0] == "opslowest"){}

      if(args[0] == "closest"){}

      if(args[0] == "stats"){

        const {score} = warreportjson[0];
        const [squadScoreR, opponentScoreR] = score.split('vs');
        const squadScore = squadScoreR.trim().slice(-1) == "M" ? Number(squadScoreR.trim().slice(0, -1)) * 1000000 : Number(squadScoreR.trim().slice(0, -1)) * 1000;
        const opponentScore = opponentScoreR.trim().slice(-1) == "M" ? Number(opponentScoreR.trim().slice(0, -1)) * 1000000 : Number(opponentScoreR.trim().slice(0, -1)) * 1000;

        const result = squadScore > opponentScore ? "Victory" : "Defeat"

        const chart = {
          type: 'pie',
          data: {
            labels: ['Victories', 'Defeats'],
            datasets: [{data: [20, 30]}]
          }
        }

        const encodedChart = encodeURIComponent(JSON.stringify(chart));  

        const chartUrl = `https://quickchart.io/chart?c=${encodedChart}`;

        const embed = new Discord.MessageEmbed()
        .setTitle('Squad War stats')
        .setImage(chartUrl)

        message.channel.send(embed);

      }
    }

}