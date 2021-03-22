const Discord = require('discord.js');

module.exports = {
    commands: 'ping',
    callback: async (msg, args) => {
        const user = msg.author;
        const pingembed = new Discord.MessageEmbed()
        .setTitle("Ramen's Bot | Latency command")
        .setColor("#aaff00")
        .setDescription(`:satellite_orbital: Latency is: **${Date.now() - msg.createdTimestamp}ms.** \n :incoming_envelope: API Latency is: **${Math.round(msg.client.ws.ping)}ms.**`)
        .setTimestamp()
        .setFooter(`Consulta realizada por ${user.username}`, 'https://cdn.discordapp.com/avatars/784576515882352642/942956f090ff1e7e5385aeeaa8863b77.png?size=512');
        await msg.channel.send(pingembed);
    },
};