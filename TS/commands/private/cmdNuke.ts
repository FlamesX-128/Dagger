import { commandBase } from '@flamesx_128/discord.js_cmds';

module.exports = new class cmdNuke extends commandBase {
    constructor() {
        super();
        this.name = {
            command: 'nuke',
            aliases: ['clear', 'clearchat']
        };
        this.category = ['Moderator'];
        this.IsActivated = true;
        this.Args = {
            numberOfArgs: 1,
            minArgs: 1,
            maxArgs: null
        };
        this.expectedArgs = '[amount]';
        this.Perms = {
            Alternative: false,
            requiredPerms: ['MANAGE_MESSAGES'],
            requiredRoles: []
        };
    };

    async execute(message: any) {
        const args = message.content.split(/[ ]+/);
        args.shift();

        const Target = parseFloat(args);

        if (args[0] == 'all') {
            try {
                const results: any = await message.channel.messages.fetch();
                await message.channel.bulkDelete(results);
            } catch {
                await message.reply ('An error occurred while executing the command');
            };

        } else {
            try {
                if (Target <= 2 || Target >= 1000) {
                    await message.reply('Maximum allowable range ``[Min => 3 | 999 <= Max]``');
                } else {
                    await message.channel.bulkDelete(args[0]);
                };
            } catch {
                await message.reply ('An error occurred while executing the command');
            };
        };
    };
};