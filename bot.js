var Discord = require('discord.io');
 
var bot = new Discord.Client({
    token: "NDMxODUwNjM1OTI3ODc5Njkw.DakzGQ.G3exkP65rOHTIca20-4OQQV1i8k",
    autorun: true
});
 
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});
 
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});
