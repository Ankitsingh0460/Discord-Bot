const { Client, GatewayIntentBits, } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generate Short Id For" + url,
    })

  }
  message.reply({
    content: "Hi From Bot"
  })
})

client.on("interactionCreate", (integration) => {
  integration.reply("pong");
})



client.login("client login path here")