import { channels_blocked } from '../../../config';

module.exports = {
    commands: ['defense', 'anti-raid'],
    expectedArgs: '[init | stop]',
    requiredArgsA: true,
    minArgsA: 1,
    permissions: 'ADMINISTRATOR',
    callback: async (message: any, args: any) => {
        const Target = message.guild.channels.cache.map((i: any) => i.id);
        var counter = 0;

        if (args[0] === 'init') {
            while (counter < Target.length) {
                var channelID = Target[counter];
                let channel = message.guild.channels.cache.get(channelID);

                let channel_role = await message.guild.roles.cache.find((r: any) => r.name === '@everyone');
                let channel_perms = await channel.permissionOverwrites.get(channel_role.id);

                if (channel_perms.SEND_MESSAGES === false) {
                    channels_blocked.push(channel);
                }

                channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false } )
                console.log('System antiraid activated')

                counter++;
            };            

        } else if (args[0] === 'stop') {
            while (counter < Target.length) {
                let channelID = Target[counter];
                let channel = message.guild.channels.cache.get(channelID);

                let channel_role = await message.guild.roles.cache.find((r: any) => r.name === '@everyone');
                let channel_perms = await channel.permissionOverwrites.get(channel_role.id);

                channels_blocked.forEach((channels) => {
                    if (channels && channel_perms.SEND_MESSAGES === false) {
                        return;
                    };
                });

                channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: null } );
                console.log('System antiraid desactivated');

                counter++;
            };

        } else {
            message.reply('Incorrect Syntax!');
        };
    }
};