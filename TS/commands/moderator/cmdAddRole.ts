import { commandBase } from '@flamesx_128/discord.js_cmds';

module.exports = new class cmdAddRole extends commandBase {
    constructor() {
        super();
        this.Command = {
            name: 'add-role',
            aliases: ['addrole'],
            category: ['Moderator'],
            activated: true
        };
        this.Args = {
            expectedArgs: ['USER', 'ROLE'],
            numberOfArgs: 2,
            NotMoreArgs: false,
            argsError: '[User] [Role]',
            minArgs: null,
            maxArgs: null
        };
        this.Perms = {
            alternative: true,
            requiredPerms: ['MANAGE_ROLES'],
            requiredRoles: ['MODERATOR']
        };
    };

    async execute(prefix: string, message: any, args: string[]): Promise<void> {     
        const userTarget = message.mentions.members?.first() ||
            message.guild?.members.cache.find((m: any) => m.id === args[0]);

        const roleTarget = message.mentions.roles.first() ||
            message.guild?.roles.cache.find((r: any) => r.id == args[1]);

        if (!userTarget) return message.reply('You need to specify a valid user!');
        if (!roleTarget) return message.reply('You need to specify a valid role!');

        try {
            await userTarget.roles.add(roleTarget);
        } catch {
            return message.reply('An error occurred');
        };

        message.reply(`The user "${userTarget}" has received the role "${roleTarget}"`);
    };
};