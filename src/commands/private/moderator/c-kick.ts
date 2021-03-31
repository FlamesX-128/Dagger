import { requiredRoles_kick } from '../../../config';

module.exports = {
    commands: 'kick',
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'KICK_MEMBERS',
    requiredRoles: requiredRoles_kick,
    callback: async (message: any, args: any) => {
        const userTarget = await message.mentions.members.first() ||
        await message.guild.members.cache.find((m: any) => m.id === args[0]);

        if (!userTarget) {
            return await message.reply('You need to specify a valid user');
        
        } else if (message.author.id == userTarget) {
            return await message.reply("You can't kick yourself");

        } else {
            try {
                await userTarget.kick();
            } catch {
                return await message.reply('Error Occurred: Possible Problem ``[Missing Permissions]``');
            };

            return await message.reply(`The user '${userTarget}' has been successfully kicked`);
        };
    }
};