import { commandBase } from '../commandBase';
import { activatedPing } from '../../config'

export const ping = new class cmd_ping extends commandBase {
    constructor() {
        super();
        this.commands = ['ping', 'p', 'lag'];
        this.category = ['misc', 'fun'];
        this.activated = activatedPing
    };

    async execute(message: any) {
        const validation = await this.validate(message);
        
        if (validation == true) {
            await message.channel.send("Pong!");
        };
    };

    async info(message: any) {
        await this.details(message, this.activated);
    };
};