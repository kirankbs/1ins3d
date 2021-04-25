const { MessageEmbed } = require('discord.js');
const schedule = require('node-schedule');

module.exports = {
    name: 'tips',
    execute(client) {

        const tips = [
            'Aim only Head',
            'Find your own way to stabilize before and while shooting ops head',
            'Remember 5 spots from every position when game starts',
            'Zoom out when searching ops',
            'Reload gun when searching ops',
            'Practise rythm of releasing bullets and understand your gun fire rate',
            'Find best way to hold your mobile and roll your fingers on the screen',
            'Increase agility while zooming in and out, swiping left and right',
            'When you kill ops, check  he might be also trying to kill others and find others too',
            'When you kill ops, someone else trying to kill him. So find him too',
            'When you are killing some one, see bullet traces in the background to find where others are shooting',
            'When you got killed, use that 10s time to view closely in the map to find any others are there or any one respawned. So when you come back you will not waste time to search ops',
            'When you kill ops, quickly search in same view for any other ops. This way you either go there if there are ops or you will avoid searching there as you know ops are not there. This saves time',
            'Practice shooting on fly without stabilizing the gun. It may be too late and some one will take  you or your kill',
            'Go for revenge Kill. Remember respawn spots',
            'Stick to one direction in killing. Either left or right',
            'Watch out killing notifications.  When you got killed back to back, notifications help you to track your previous and present revenge kill',
            'First find near targets. Reasons are: A.) bullet hit him first than others. B.) accuracy will be more in near spots than longer spots. C.) only less ops come to know your bullet traces',
            'When someone shooting you.  Continue searching for ops without panic and this reduces time to go for ops after respawn',
            'Start guessing how many bullets you need to kill enemy by seeing his Gear and status bar of enemy life. This way you will not waste bullet or not watching him die or not',
            'Start guessing where ops can be while sweeping for ops',
            'Release bullets fast. You no need to wait untill it hits enemy or enemy become stable',
            'Do not indulge into rivalry with good player in battle as it lowers score',
            'After shooting 2 to 3 bullets, gun point moves out of head so slowly adjust by moving against to it so point will be on head untill you kill enemy',
        ]

        const embed = new MessageEmbed().setTitle('Arena Tip!');

        const rule = new schedule.RecurrenceRule();
        //rule.dayOfWeek = [0, new schedule.Range(5, 6)];
        rule.hour = 4;
        rule.tz = 'Etc/UTC';


        const job = schedule.scheduleJob(rule, function () {
            const tip = embed.setDescription(tips[Math.floor(Math.random() * tips.length)]);
            client.channels.cache.get('822837245651976195').send(tip);
        });            

    }

}
