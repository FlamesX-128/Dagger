import { commandBase } from '@flamesx_128/discord.js_cmds';

module.exports = new class cmdBan extends commandBase {
    constructor() {
        super();
        this.name = {
            command: 'ban',
            aliases: null
        };
        this.category = ['Moderator'];
        this.IsActivated = true;
        this.Args = {
            numberOfArgs: 2,
            minArgs: 1,
            maxArgs: null
        };
        this.expectedArgs = '[User] [Reason]';
        this.Perms = {
            Alternative: false,
            requiredPerms: ['BAN_MEMBERS'],
            requiredRoles: []
        };
    };

    async execute(message: any) {
        const args = await message.content.split(/[ ]+/);
        args.shift();
        
        const userTarget = await message.mentions.members.first() ||
            await message.guild.members.cache.find((m: any) => m.id === args[0]);

        if (!userTarget) {
            return await message.reply('You need to specify a valid user');

        } else if (message.author.id == userTarget) {
            return await message.reply("You can't ban yourself");
        };

        try {
            await userTarget.ban();
        } catch {
            return await message.reply(`Error Occurred: Possible Problem **[Missing Permissions]**`);
        };

        return await message.reply(`The user '${userTarget}' has been successfully banned`);
    };
};