const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) => {
  message.reply({
    content: "Hi From Bot",
  });
})

