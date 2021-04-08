import { commandBase } from '@flamesx_128/discord.js_cmds'

module.exports = new class cmdPing extends commandBase {
    constructor() {
        super();
        this.name = {
            command: 'ping',
            aliases: null
        };
        this.category = ['misc'];
        this.IsActivated = true;
    };

    async execute(message: any) {
        message.channel.send(`Pong! \nAPI latency: ${message.client.ws.ping}ms.`);
    };
};