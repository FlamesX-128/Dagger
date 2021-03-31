import { requiredRoles_unban, requiredArgsB_unban } from '../../../config';

module.exports = {
    commands: ['unban', "un-ban"],
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: requiredRoles_unban,
    minArgsB: 1,
    permissions: 'BAN_MEMBERS',
    requiredRoles: requiredRoles_unban,
    callback: async (message: any, args: any) => {
        const userTarget = await message.mentions.members.first() ||
        await message.guild.members.cache.find((m: any) => m.id === args[0]);

        if (!userTarget) {
            return await message.reply('You need to specify a valid user');
        
        } else if (message.author.id == userTarget) {
            return await message.reply("You can't unban yourself");

        } else {
            try {
                await userTarget.unban();
            } catch {
                return await message.reply('Error Occurred: Possible Problem ``[Missing Permissions]``');
            };
    
            return await message.reply(`The user '${userTarget}' has been successfully unbanned`);
        };
    }
};