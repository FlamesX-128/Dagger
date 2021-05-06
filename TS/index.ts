import { config } from 'dotenv';
config();

import { readCommands, readFiles } from '@flamesx_128/discord.js_cmds';
import { Client } from 'discord.js';
const client = new Client();
const prefix = "!";

client.on('ready', async () => {
    await readFiles(__dirname, 'commands');
    console.log('D̸̢̟̹͔͇̀͑̂̒ạ̶̭̺̣͆͝g̸̼̪͈̼̀̈́͆̑ğ̷̛̦͎̏̃͊ë̴̪̫̞͝ȓ̶͍͒ ready!');
});

client.on('message', async (message: any) => {
    if (message.author.bot) return;
    if (message.content.startsWith(!prefix)) return;
    await readCommands(prefix, message);
});

client.login(process.env.BOT);