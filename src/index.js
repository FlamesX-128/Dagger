require('dotenv').config();

const path = require('path');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async (ready) => {
    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))

        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))

            if (stat.isDirectory()){
                readCommands(path.join(dir, file))
            
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
                console.log(file, option)
            }
        }
    }

    readCommands('commands')
    console.log('\nThe client is ready!')
})

client.login(process.env.BOT)