require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (msg) => {
  console.log(msg);
});

bot.login(process.env.Discord_Token);
