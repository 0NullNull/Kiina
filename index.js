const config = require("/config.json");
const {Client, Events, GatewayIntentBits} = require("discord.js");
const token = process.env.TOKEN;

const client = new Client({intents: [GatewayIntentBits]});
client.once(Events.ClientReady,c =>{
    console.log(`${c.user.username} is Ready`);
})

client.login(token);