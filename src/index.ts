import { config } from 'dotenv';
config();

import { Client } from 'discord.js';
import { loadConfig, loadSettings, prefix, commands } from './config';
const client = new Client();

client.on('ready', () => {
    console.log("Dagger ready!");
});

client.on('message', async (message: any) => {
    const { content, guild } = message;

    if (loadConfig == false) await loadSettings(guild.id);
    if (message.author.bot) return;
    //if (message.content.startsWith(prefix)) return;
    //if (message.content.startsWith(`${prefix}${commands}`)) {
        const args = content.split(/[ ]+/);
        const command = args[0].split(/[!>]+/);
        command.shift();
        args.shift();

        try {
            await commands[command].details(message, args);
        } catch {
            await message.reply('An error has occurred')
        };
    //};
});

client.login(process.env.TOKEN);