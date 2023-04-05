const { Client, Collection, Events, GatewayIntentBits, Guild, TextChannel, ChannelType, ChannelManager } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });
client.commands = new Collection();

const Tasa = "846026685992402974";

var _Tasa;
var Cc;

const commandHelp = `\`\`\`\nCommands :\nsend|{ChannelID}|{Message}\ngsend|{GuildID}|{ChannelID}|{Message}\`\`\``
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
	console.log('\x1b[37m',`Ready! Logged in as ${c.user.tag}`);
	console.log('\x1b[34m',`${c.guilds.cache.get(Tasa).name} (${c.guilds.cache.get(Tasa).id})`);
	c.guilds.cache.get(Tasa).channels.cache.forEach(c => {
		console.log('\x1b[32m',`	${c.name} (${c.id})`)
	});
	console.log("")
	c.guilds.cache.get(Tasa).roles.cache.forEach(r =>{
		console.log('\x1b[31m',`	${r.name} (${r.id})`)
	})
	c.guilds.cache.forEach(g =>{
		console.log('\x1b[35m',`${g.name} ( ${g.id} )`)
	})
	
	Cc.messages.fetch("1092912862399320114")
		.then(message => message.edit(commandHelp))
	if(process.argv.slice(2)[0] == "invMsg"){
		var msg = RandomMessages[Math.floor(Math.random() * RandomMessages.length)]
		var channel = c.guilds.cache.get("840311235772678162").channels.cache.get("840311642747437118")
		console.log(`${channel.name} `,`\x1b[47m\x1b[30m> ${msg}`)
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
				console.log(`${command[0]} ${command[1]} ${command[2]}`)
			}catch{
				console.log("\x1b[31m","could not send message")
			}
		}
		else if(message.content.startsWith("gsend")){
			let command = message.content.split("|")
			try{
				client.guilds.cache.get(command[1]).channels.cache.get(command[2]).send(command[3])
				console.log(`${command[0]} ${command[1]} ${command[2]} ${command[3]}`)
			}catch(e){
				console.log("\x1b[31m","could not send message | ",e)
			}
		}
		else if(message.content.startsWith("invite")){
			console.log(message.guild.invites.cache)
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