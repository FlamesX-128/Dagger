import { commandBase } from '@flamesx_128/discord.js_cmds';

module.exports = new class cmdNuke extends commandBase {
    constructor() {
        super();
        this.Command = {
            name: 'clear-chat',
            aliases: ['clearchat', 'purge', 'nuke'],
            category: ['Moderator'],
            activated: true
        };
        this.Args = {
            expectedArgs: ['TEXT'],
            numberOfArgs: 1,
            NotMoreArgs: false,
            argsError: '[Amount]',
            minArgs: 1,
            maxArgs: 4
        };
        this.Perms = {
            alternative: true,
            requiredPerms: ['MANAGE_MESSAGES'],
            requiredRoles: ['MODERATOR']
        };
    };

    async execute(prefix: string, message: any, args: string[]): Promise<void> {
        const Target = parseFloat(args[0]);

        if (args[0] == 'all') {
            try {
                const results: any = await message.channel.messages.fetch();
                await message.channel.bulkDelete(results);
                return message.reply('The chat cleaner has been completed');
            } catch (err) {
                message.reply('An error occurred');
                console.log(err)
            };
        };

        if (typeof args[0] == 'number') {
            try {
                for (let i = 0; i < Target; i++) {
                    await message.channel.bulkDelete(Target);
                    return message.reply('The chat cleaner has been completed');
                };
            } catch (err) {
                try {
                    for (let i = 0; i < Target; i++) {
                        await message.channel.bulkDelete(1);
                        return message.reply('The chat cleaner has been completed');
                    };
                } catch (error) {
                    message.reply('An error occurred');
                    console.log(err);
                };
            };
        };
    };
};
