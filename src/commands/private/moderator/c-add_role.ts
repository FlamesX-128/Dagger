import { requiredRoles_addrole } from '../../../config';

module.exports = {
    commands: ['add-role', 'addrole'],
    expectedArgs: '[User] [Role]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'MANAGE_ROLES',
    requiredRoles: requiredRoles_addrole,
    callback: async (message: any, args: any) => {
        const userTarget = await message.mentions.members.first() ||
        await message.guild.members.cache.find((m: any) => m.id === args[0]);

        const roleTarget = await message.mentions.roles.first() ||
        await message.guild.roles.cache.find((r: any) => r.id == args[1]);
        
        if (!userTarget) {
            return await message.reply('You need to specify a valid user');

        } else if (!roleTarget) { 
            return await message.reply('You need to specify a valid role');

        } else {
            try {
                await userTarget.roles.add(roleTarget);
            } catch {
                return await message.reply('Error Occurred: Possible Problem ``[Missing Permissions]``');
            };

            await message.reply(`The user "${userTarget}" has received the role "${roleTarget}"`);
        };
    }
};