import { config } from 'dotenv';
config();

import { readCommand, readFiles } from '@flamesx_128/discord.js_cmds';
import { Client, Message } from 'discord.js';
const client = new Client();
const prefix = '!>';

client.on('ready', async () => {
    await readFiles(__dirname, 'commands');
    console.log('D̸̢̟̹͔͇̀͑̂̒ạ̶̭̺̣͆͝g̸̼̪͈̼̀̈́͆̑ğ̷̛̦͎̏̃͊ë̴̪̫̞͝ȓ̶͍͒ ready!');
});

client.on('message', async (message: Message) => {
    if (message.author.bot) return;

    await readCommand(prefix, message);
});

client.login(process.env.BOT);