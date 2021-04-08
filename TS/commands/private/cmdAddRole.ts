import { commandBase } from '@flamesx_128/discord.js_cmds'

module.exports = new class cmdAddRole extends commandBase {
    constructor() {
        super();
        this.name = {
            command: 'add-role',
            aliases: ['addrole']
        };
        this.category = ['Moderator'];
        this.IsActivated = true;
        this.Args = {
            numberOfArgs: 2,
            minArgs: 5,
            maxArgs: null
        };
        this.expectedArgs = '[User] [Role]';
        this.Perms = {
            Alternative: false,
            requiredPerms: ['MANAGE_ROLES'],
            requiredRoles: []
        };
    };

    async execute(message: any) {
        const args = await message.content.split(/[ ]+/);
        args.shift();
        
        const userTarget = await message.mentions.members.first() ||
            await message.guild.members.cache.find((m: any) => m.id === args[0]);

        const roleTarget = await message.mentions.roles.first() ||
            await message.guild.roles.cache.find((r: any) => r.id == args[1]);

        if (!userTarget) {
            return await message.reply('You need to specify a valid user');

        } else if (!roleTarget) {
            return await message.reply('You need to specify a valid role');
        };

        try {
            await userTarget.roles.add(roleTarget);
        } catch {
            return await message.reply('An error occurred');
        };

        await message.reply(`The user "${userTarget}" has received the role "${roleTarget}"`);
    };
};