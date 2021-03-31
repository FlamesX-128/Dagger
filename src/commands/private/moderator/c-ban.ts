import { requiredRoles_ban, requiredArgsB_ban } from '../../../config';

module.exports = {
    commands: 'ban',
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: requiredArgsB_ban,
    minArgsB: 1,
    permissions: 'BAN_MEMBERS',
    requiredRoles: requiredRoles_ban,
    callback: async (message: any, args: any) => {
        const userTarget = await message.mentions.members.first() ||
        await message.guild.members.cache.find((m: any) => m.id === args[0]);

        if (!userTarget) {
            return await message.reply('You need to specify a valid user');
        
        } else if (message.author.id == userTarget) {
            return await message.reply("You can't ban yourself");
            
        } else {
            try {
                await userTarget.ban();
            } catch {
                return await message.reply('Error Occurred: Possible Problem ``[Missing Permissions]``');
            };
    
            return await message.reply(`The user '${userTarget}' has been successfully banned`);
        };
    }
};