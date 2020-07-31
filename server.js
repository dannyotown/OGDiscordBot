require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (msg) => {
  if (msg.content == "!Hello") {
    msg.reply("Hello World!");
  }
});

bot.login(process.env.Discord_Token);
