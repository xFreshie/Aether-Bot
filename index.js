const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  messageCacheMaxSize: 500,
  messageCacheLifetime: 120,
  messageSweepInterval: 60
});
const economy = require('discord-eco');
const fs = require('fs');
const YTDL = require('ytdl-core');
const sql = require("sqlite");
 
const PREFIX = ".";

//Commands
    if (!message.content.startsWith(PREFIX)) return;
   
    var args = message.content.substring(PREFIX.length).split(" ");
    console.log(`(ChromeCommand) ${message.author.id}: ${message.content}`);
    switch (args[0].toLowerCase()) {
        case"ping":
            var botpppt = bot.ping.toString();
            var botzping = botpppt.substring(0, 5);
            var embed = new Discord.RichEmbed()
            .addField('Pong!', 'Bot`s Latency is '+botzping+"ms." )
            .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
            message.channel.send(embed);
break;
//Welcome GoodBye
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send('**' + member.user.username + '**, has joined the server!'); 
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('channelID').send('**' + member.user.username + '**, has left the server');
    //
});