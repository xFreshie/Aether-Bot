const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  messageCacheMaxSize: 500,
  messageCacheLifetime: 120,
  messageSweepInterval: 60
});
 
const PREFIX = "%";

var bot = new Discord.Client();
 
bot.on('ready', () => {
    console.log('-=-=-=-=-=-=-=-');
    console.log('Status = Successfully Started');
    console.log('Author = Fweshie');
    console.log('-=-=-=-=-=-=-=-');
    bot.user.setActivity('Official Aether Bot');
    bot.user.setStatus("online")
  });
 
bot.on("message", function(message) {
    console.log(`(General) ${message.author.id}: ${message.content}`);
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
   
    var args = message.content.substring(PREFIX.length).split(" ");
    console.log(`(AetherBot) ${message.author.id}: ${message.content}`);
    switch (args[0].toLowerCase()) {
        case"ping":
            var botpppt = bot.ping.toString();
            var botzping = botpppt.substring(0, 5);
            var embed = new Discord.RichEmbed()
            .addField('Pong!', 'Bot`s Latency is '+botzping+"ms." )
            .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
            message.channel.send(embed);
            break;
	case "say":
		     if(message.member.hasPermission("MANAGE_MESSAGES")){
        	var sayMessage = message.content.substring(4)
        	message.delete().catch(O_o=>{});
        	message.channel.send(sayMessage);
			}
			else {
				message.reply('``You dont have the Permission to use that Command``')
			}
			break;
		client.on("message", (message) => {
  			if(responseObject[message.content]) {
 		   message.channel.send(responseObject[message.content]);
		  }
		});
		    break;
	case "help":
		message.channel.send("    ** Help Menu **\nIf you want the help of a command, type %help ``command``\n*say* - **Sends the message the user told the bot to send**\n*ping* - **Pings**\n \n``The prefix is %``")
    }	
});
bot.login(process.env.BOT_TOKEN);
