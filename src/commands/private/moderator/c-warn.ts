import { requiredRoles_warn } from '../../../config';

module.exports = {
    commands: 'warn',
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'BAN_MEMBERS',
    requiredRoles: requiredRoles_warn,
    callback: async (message: any, args: any) => {
        const userTarget = await message.mentions.members.first() ||
        await message.guild.members.cache.find((m: any) => m.id === args[0]);

        if (!userTarget) {
            return await message.reply('You need to specify a valid user');
        
        } else if (message.author.id == userTarget) {
            return await message.reply("You can't warn yourself");

        } else {
            try {
                args.shift();
                await userTarget.send(`You were warned by: ${args.join(" ")}`);
            } catch {
                return await message.reply('Error Occurred: Possible Problem ``[Missing Permissions]``');
            };
    
            return await message.reply(`The user '${userTarget}' has been successfully warned`);
        };
    }
};