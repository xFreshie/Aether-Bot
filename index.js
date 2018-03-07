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
		message.channel.send("** Help Menu **\nIf you want the help of a command, type %help ``command``\n1) *say* - **Sends the message the user told the bot to send**\n2) *ping* - **Pings**\n \n3) *serverinvite* - **Server Invitation Link**\n4) *factions* - **Information about conspiracycraft faction.**\n5) *hyperlegends* - **Information about the upcoming server.**\n6) *officers* - **List of the current faction officers.**\n \n``The prefix is %``")
	case "help say":
		    message.channel.send("``Command Help`` **%say** - Says a message using the bot.\n``For example`` **%say hi**");
	case "help ping":
		    message.channel.send("``Command Help`` **%ping** - Pings...\n``For example`` **%ping**");
	case "help serverinvite":
		    message.channel.send("``Command Help`` **%serverinvite** - sends the server permenant invite link.\n``For example`` **%serverinvite**");
	case "help factions":
		    message.channel.send("``Command Help`` **%factions** - Information about conspiracycraft faction.\n``For example`` **%factions**");
	case "help hyperlegends":
		    message.channel.send("``Command Help`` **%hyperlegends** - Information about upcoming server.");
	case "officers":
		    message.channel.send("``Command Help`` **%officers** - List of the officers in the factions.");
	case "serverinvite":
		    message.channel.send("**Server permenant invite link**\nhttps://discord.gg/7FvGWqE");
	case "factions":
		    message.channel.send("**Join us at conspiracycraft factions!, ask the leader RyanePlayz or The Officers for an invite.");
	case "hyperlegends":
		    message.channel.send("**Upcoming minecraft server/network owned by RyanePlayz and xtend123, sponsored by IntelliCraft!");
	case "officers":
		    message.channel.send("``ConspiracyCraft Faction Officers!``\n**1**. ZaiZoe\n**2**. xtend123\n**3**. Fweshie");
    }	
});
bot.login(process.env.BOT_TOKEN);
