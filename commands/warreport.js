const Discord = require('discord.js');

const warreportjson = require('./warreport.json');

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

}