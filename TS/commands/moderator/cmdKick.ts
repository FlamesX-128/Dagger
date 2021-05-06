import { commandBase } from '@flamesx_128/discord.js_cmds';

module.exports = new class cmdKick extends commandBase {
    constructor() {
        super();
        this.Command = {
            name: 'kick',
            aliases: null,
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
            requiredPerms: ['KICK_MEMBERS'],
            requiredRoles: ['MODERATOR']
        };
    };

    async execute(prefix: string, message: any, args: string[]): Promise<void> {
        const userTarget = message.mentions?.members.first() ||
            message.guild?.members.cache.find((m: any) => m.id === args[0]);

        if (!userTarget) return message.reply('You need to specify a valid user');
        if (message.author.id == userTarget) return message.reply("You can't kick yourself");

        try {
            await userTarget.kick();
        } catch {
            return message.reply(`Error Occurred: Possible Problem **[Missing Permissions]**`);
        };

        message.reply(`The user '${userTarget}' has been successfully kicked`);
    };
};