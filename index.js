const Discord = require('discord.js');
//calls the d.js [package]
const { token, prefix } = require('./config.js');
//cals the token and prefix from the config file
const client = new Discord.Client();
//makes it a bot
client.on('ready', () => {
    console.log(`${client.user.tag} is onlie`);
});
//ready event
client.on('message', function(message) {
    if(message.author.bot)return;
    if(message.channel.type !== "text")return;
    if(!message.content.startsWith(prefix))return;

    let args = message.content.split(' ');//args[1] (nt.ping doggo)=> doggo
    let command = args[0];
    command = command.slice(prefix.length)
    
    if(command === "ping"){
        message.channel.send("pong");
    }

});

client.login(token);
