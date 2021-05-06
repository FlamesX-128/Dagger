import { commandBase } from '@flamesx_128/discord.js_cmds';

module.exports = new class cmdPing extends commandBase {
    constructor() {
        super();
        this.Command = {
            name: 'ping',
            aliases: null,
            category: ['fun'],
            activated: true
        };
    };

    async execute(prefix: string, message: any, args: string[]): Promise<void> {
        message.reply(`Pong! \nAPI latency: ${message.client.ws.ping}ms.`);
    };
};