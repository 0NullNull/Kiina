const { Client, Collection, Events, GatewayIntentBits, Guild } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });
client.commands = new Collection();

const Tasa = "846026685992402974";

client.once(Events.ClientReady, c => {
	console.log('\x1b[37m',`Ready! Logged in as ${c.user.tag}`);
	console.log('\x1b[34m',`${c.guilds.cache.get(Tasa).name} (${c.guilds.cache.get(Tasa).id})`);
	c.guilds.cache.get(Tasa).channels.cache.forEach(c => {
		console.log('\x1b[32m',`	${c.name} (${c.id})`)
	});
	console.log("")
	c.guilds.cache.get(Tasa).roles.cache.forEach(r =>{
		console.log('\x1b[31m',`	${r.name} (${r.id})`)
	})
});

client.on("messageCreate", (message) =>{
	if(message.guild.id != Tasa) return;
	if(message.author.id == "283295469143064576"){
		if(message.content == "olen nyt ylivaltias"){
			if(message.member.roles.cache.has("846041532950904884")){
				message.member.roles.remove(message.guild.roles.cache.get("846041532950904884"))
			}else{
				message.member.roles.add(message.guild.roles.cache.get("846041532950904884"))
			}
		}
		else if(message.content.startsWith("send")){
			let command = message.content.split("|")
			try{
				message.guild.channels.cache.get(command[1]).send(command[2])
			}catch{
				console.log("\x1b[31m","could not send message")
			}
		}
	}

})

client.login(token);
/*
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"
FgGray = "\x1b[90m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
BgGray = "\x1b[100m"
*/