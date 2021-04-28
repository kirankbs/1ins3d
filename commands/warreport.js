const Discord = require('discord.js');
const warreportjson = require('./warreport.json');
const QuickChart = require('quickchart-js');

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function calculateWarResult(score) {
  const [squadScoreR, opponentScoreR] = score.split('vs');
  const squadScore = squadScoreR.trim().slice(-1) == "M" ? Number(squadScoreR.trim().slice(0, -1)) * 1000000 : Number(squadScoreR.trim().slice(0, -1)) * 1000;
  const opponentScore = opponentScoreR.trim().slice(-1) == "M" ? Number(opponentScoreR.trim().slice(0, -1)) * 1000000 : Number(opponentScoreR.trim().slice(0, -1)) * 1000;

  return squadScore > opponentScore ? "Victory" : "Defeat"
}

function differenceInScore(score) {
  const [squadScoreR, opponentScoreR] = score.split('vs');
  const squadScore = squadScoreR.trim().slice(-1) == "M" ? Number(squadScoreR.trim().slice(0, -1)) * 1000000 : Number(squadScoreR.trim().slice(0, -1)) * 1000;
  const opponentScore = opponentScoreR.trim().slice(-1) == "M" ? Number(opponentScoreR.trim().slice(0, -1)) * 1000000 : Number(opponentScoreR.trim().slice(0, -1)) * 1000;

  return squadScore > opponentScore ? squadScore - opponentScore : opponentScore - squadScore
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

      if(args[0] == "farthest"){
        
        const scoreDifferences = warreportjson.map(report => {
          const reportWithDifference = {report: report, difference: differenceInScore(report.score)};
          return reportWithDifference;
        });

        const closestWar = scoreDifferences.reduce(
          (prev, curr) => (prev.difference > curr.difference) ? prev : curr);

        const {date, event, opps, score, image} = closestWar.report

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

      if(args[0] == "closest"){
        
        const scoreDifferences = warreportjson.map(report => {
          const reportWithDifference = {report: report, difference: differenceInScore(report.score)};
          return reportWithDifference;
        });

        const closestWar = scoreDifferences.reduce(
          (prev, curr) => (prev.difference < curr.difference) ? prev : curr);

        const {date, event, opps, score, image} = closestWar.report

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

      if(args[0] == "stats"){

        const warResults = warreportjson.map(report => calculateWarResult(report.score));
        const victories = warResults.filter(result => result == "Victory").length;
        const defeats = warResults.filter(result => result == "Defeat").length;

        const chart = {
          type: 'pie',
          data: {
            labels: ['Victories', 'Defeats'],
            datasets: [{
                label: 'Victories vs Defeats', 
                data: [victories, defeats], 
                backgroundColor: ['rgb(19,136,8)', 'rgb(255,153,51)'],
                fontColor: 'red'
              }]
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