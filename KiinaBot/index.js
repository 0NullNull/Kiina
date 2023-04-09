const { Client, Collection, Events, GatewayIntentBits, Guild, TextChannel, ChannelType, ChannelManager, Message, PermissionsBitField } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });
client.commands = new Collection();

const Tasa = "846026685992402974";

var _Tasa;
var Cc;

const cms = [
	"(send message to channel)",
	"(send message in another server)",
	"(restart bot)"
]

const commandHelp = `\`\`\`\nCommands :
${cms[0].padEnd(40)}send|{ChannelID}|{Message}
${cms[1].padEnd(40)}gsend|{GuildID}|{ChannelID}|{Message}
${cms[2].padEnd(40)}<r
\`\`\``
const dcLink = "https://discord.gg/aKeqdGZMQQ"

const RandomMessages = [
	`Tässä on juuri sinulle sopiva yhteisö johon voit liittyä! ${dcLink}`,
	`Oletko miettinyt kiinasta poistumista? Liity meihin ja lunasta ilmainen 10€ lahjakortti! ${dcLink}`,
	`Onko sinulla ongelmia parisuhteessasi? Nyt voit liittyä ilmaiseksi meihin! ${dcLink}`,
	`Liity sinäkin nyt parempaan ympäristöön ilmaiseksi! ${dcLink}`,
	`Oletko kuullut uudesta hitti yhteisöstä? Liity sinäkin meidän joukkoon! ${dcLink}`,
	`Liity nyt ja voit voittaa täysin uuden **iPhone 4** älypuhelimen täysin ilmai seksi! ${dcLink}`,
	`Kohteleeko virkamies sinua liian rajusti? Liity nyt yhteisöön jossa sinun ääntäsi kuunnellaan! ${dcLink}`,
	`Tämän hetken kuumin yhteisö on nyt julkinen! Liity sinäkin! ${dcLink}`,
	`Ootte ihan vitun homoja jos ette olen uudella hitti palvelimella! ${dcLink}`,
	`Oletko jo liittynyt uudelle palvelimelleni? ${dcLink}`,
	`Voisitko jo liittyä minun palvelimelleni? ${dcLink}`,
	`LIITY JO VITTU ${dcLink}`,
	`Tiesitkö että 100% ihmisistä jotka eivät ole jo liittynyt palvelimelleni on todettu homoksi? ${dcLink}`,
	`${dcLink}`,
	`Voit keskustella kaikille lempi kavereillesi tällä palvelimella! ${dcLink}`,
	`Suurin osa pelaajista lopettaa juuri ennen voittoa. ${dcLink}`,
	`10/10 hammaslääkäristä suosittelee tätä palvelinta! ${dcLink}`,
	`Kaikki uudet kanavan jäsenet saavat vuoden ultra mega premiumin! ${dcLink}`,
]

client.once(Events.ClientReady, c => {
	_Tasa = client.guilds.cache.get(Tasa)
	Cc = _Tasa.channels.cache.get("1092891853189300345")
	console.log('\x1b[0m\x1b[37m',`Ready! Logged in as \x1b[41m\x1b[33m${c.user.tag}\x1b[0m`);
	c.guilds.cache.forEach(g =>{
		console.log('\x1b[34m',`${g.name} (${g.id})\x1b[0m`);
		g.channels.cache.forEach(c => {
			console.log('\x1b[32m',`	${c.name} (${c.id})\x1b[0m`)
		});
		console.log("")
		g.roles.cache.forEach(r =>{
			console.log('\x1b[31m',`	${r.name} (${r.id})\x1b[0m`)
		})
	})
	
	Cc.messages.fetch("1092912862399320114")
		.then(message => message.edit(commandHelp))
	if(process.argv.slice(2)[0] == "invMsg"){
		var msg = RandomMessages[Math.floor(Math.random() * RandomMessages.length)]
		var channel = c.guilds.cache.get("840311235772678162").channels.cache.get("840311642747437118")
		console.log(`${channel.name} `,`\x1b[47m\x1b[30m> ${msg}\x1b[0m`)
		channel.send(msg)
	}
});
client.on("messageCreate", (message) =>{
	if(message.author.bot)return;
	if(message.guild.id != Tasa) return;
	if(message.channel.id != "1092891853189300345"){
		if(message.author.id == "283295469143064576"){
			if(message.content == "olen nyt ylivaltias"){
				if(message.member.roles.cache.has("846041532950904884")){
					message.member.roles.remove(message.guild.roles.cache.get("846041532950904884"))
				}else{
					message.member.roles.add(message.guild.roles.cache.get("846041532950904884"))
					message.reply(`Kyllä herra ylivaltias ${message.member.nickname}`)
				}
			}
		}
	}
	//if(message.author.id == "283295469143064576"){
		if(message.content == "olen nyt ylivaltias" || message.content ==  "lOl"){
			if(message.channel.id == "1092891853189300345"){
					if(message.member.roles.cache.has("846041532950904884")){
						message.member.roles.remove(message.guild.roles.cache.get("846041532950904884"))
					}else{
						message.member.roles.add(message.guild.roles.cache.get("846041532950904884"))
					}
			}
		}
		else if(message.content.startsWith("send")){
			let command = message.content.split("|")
			try{
				message.guild.channels.cache.get(command[1]).send(command[2])
				console.log("\x1b[1m\x1b[40m\x1b[34m",`${message.author.username}`,"\x1b[31m",`${command[0]}> \x1b[1m\x1b[33m${command[1]} \x1b[2m\x1b[47m\x1b[30m${command[2]}\x1b[0m`)
			}catch{
				console.log("\x1b[31m","could not send message\x1b[0m")
			}
		}
		else if(message.content.startsWith("gsend")){
			let command = message.content.split("|")
			try{
				client.guilds.cache.get(command[1]).channels.cache.get(command[2]).send(command[3])
				console.log("\x1b[1m\x1b[40m\x1b[34m",`${message.author.username}`,"\x1b[31m",`${command[0]}> \x1b[1m\x1b[33m${command[1]}>${command[2]} \x1b[2m\x1b[47m\x1b[30m${command[3]}\x1b[0m`)
			}catch(e){
				console.log("\x1b[31m","could not send message | ",e,"\x1b[0m")
			}
		}
		else if(message.content.startsWith("<r")){
			message.delete();
			setTimeout(() => {
				throw new Error("Restart");
			}, 2000);
		}
	//}
	if(message.channel.id == "1092891853189300345"){
		if(message.content != commandHelp) message.delete();
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