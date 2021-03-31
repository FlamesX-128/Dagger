import {config} from 'dotenv'
config();

import path from 'path';
import fs from 'fs';
import {Client} from 'discord.js';
const client: Client = new Client();

client.on('ready', () => {
    const baseFile = 'command_base.js';
    const commandBase = require(`./commands/${baseFile}`);

    const readCommands = (dir: any) => {
        const files = fs.readdirSync(path.join(__dirname, dir));

        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));

            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));

            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file));

                commandBase(client, option);
                console.log(file, option);
            }
        }
    }

    readCommands('commands');
    console.log("Ramen's Bot is ready");
});

client.login(process.env.DISCORD_TOKEN);