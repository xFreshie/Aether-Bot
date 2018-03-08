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
		message.channel.send("** Help Menu **\nIf you want the help of a command, type ``%commandhelp````command``\n1) *say* - **Sends the message the user told the bot to send**\n2) *ping* - **Pings**\n \n3) *serverinvite* - **Server Invitation Link**\n4) *factions* - **Information about conspiracycraft faction.**\n5) *hyperlegends* - **Information about the upcoming server.**\n6) *officers* - **List of the current faction officers.**\n \n``The prefix is %``");
		    break;
	case "commandhelpsay":
		    message.channel.send("``Command Help`` **%say** - Says a message using the bot.\n``For example`` **%say hi**");
			break;
	case "commandhelpping":
		    message.channel.send("``Command Help`` **%ping** - Pings...\n``For example`` **%ping**");
		    break;
	case "commandhelpserverinvite":
		    message.channel.send("``Command Help`` **%serverinvite** - sends the server permenant invite link.\n``For example`` **%serverinvite**");
		    break;
	case "commandhelpfactions":
		    message.channel.send("``Command Help`` **%factions** - Information about conspiracycraft faction.\n``For example`` **%factions**");
		    break;
	case "commandhelphyperlegends":
		    message.channel.send("``Command Help`` **%hyperlegends** - Information about upcoming server.");
		    break;
	case "officers":
		    message.channel.send("``Command Help`` **%officers** - List of the officers in the factions.");
		    break;
	case "serverinvite":
		    message.channel.send("**Server permenant invite link**\nhttps://discord.gg/7FvGWqE");
		    break;
	case "factions":
		    message.channel.send("**Join us at conspiracycraft factions!, ask the leader RyanePlayz or The Officers for an invite.**");
		    break;
	case "hyperlegends":
		    message.channel.send("**Upcoming minecraft server/network owned by RyanePlayz and xtend123, sponsored by IntelliCraft!**");
		    break;
	case "officers":
		    message.channel.send("``ConspiracyCraft Faction Officers!``\n**1**. ZaiZoe\n**2**. xtend123\n**3**. Fweshie");
		    break;
	//lol
		    client.on('guildMemberRemove', (member) => {
			    client.channels.find('welcome-and-goodbye').send(`**${member_username}** has left the server, Bye bye!` :sob:);
		    }
			      client.on('guildMemberAdd', (member) => {
			    		client.channels.find('welcome-and-goodbye').send(`**${member_username}** has joined the server, welcome!` :smile:);
		    }

});
bot.login(process.env.BOT_TOKEN);
