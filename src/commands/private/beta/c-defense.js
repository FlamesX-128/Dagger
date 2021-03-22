const Discord = require('discord.js');

let roles_required_defense //Temporarily disabled 

module.exports = {
    commands: ['defense', 'anti-raid'],
    expectedArgs: '[init | stop]',
    requiredArgsA: true,
    minArgsA: 1,
    permissions: 'ADMINISTRATOR',
    requiredRoles: roles_required_defense,
    callback: async (msg, args) => {
        const guild = msg.guild.channels.cache.map(i => i.id)
        const user = msg.author;

        let counter = 0;

        if (user != "347787075308748801") {
            return msg.reply('YOU NOT ARE FlamesX-128!!')
        
        }
        
        if (args[0] === 'init') {
            while (counter < guild.length) {
                let Target = guild[counter]
                let channel = msg.guild.channels.cache.get(Target)
                counter++
                channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false } );

                try {
                    const pingembed = new Discord.MessageEmbed()
                    .setTitle("**Ramen's Bot | Anti-raid system activated**")
                    .setColor("#ff0000")
                    .setDescription('```This channel was blocked by administrators```')
                    .setTimestamp()
                    .setFooter(`Anti-raid activated by ${user.username}`, 'https://cdn.discordapp.com/avatars/784576515882352642/942956f090ff1e7e5385aeeaa8863b77.png?size=512');
                    await channel.send(pingembed);

                } catch {
                    console.log('An error has occurred: Possible error [Common error] ')
                }
            }
        
        } else if (args[0] === 'stop') {
            while (counter < guild.length) {
                let Target = guild[counter]
                let channel = msg.guild.channels.cache.get(Target)
                counter++
                channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: null } );

                try {
                    const pingembed = new Discord.MessageEmbed()
                    .setTitle(`**Ramen's Bot | Anti-raid system desactivated**`)
                    .setColor("#aaff00")
                    .setDescription('```This channel was unlocked by administrators```')
                    .setTimestamp()
                    .setFooter(`Anti-raid desactivated by ${user.username}`, 'https://cdn.discordapp.com/avatars/784576515882352642/942956f090ff1e7e5385aeeaa8863b77.png?size=512');
                    await channel.send(pingembed);

                } catch {
                    console.log('An error has occurred: Possible error [Common error]')
                }
            }

        } else {
            msg.reply('Incorrect Syntax!')
        }
    },
};