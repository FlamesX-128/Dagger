import { validateCommand } from './validateCommand'
import { MessageEmbed } from 'discord.js'
import { prefix } from '../config'

export class commandBase {
    protected commands: string[];
    protected category: string[];
    protected activated: boolean;
    protected requiredArgsA: boolean;
    protected minArgsA: number;
    protected maxArgsA: null | number;
    protected requiredRoles: null | string[];
    protected permissions: null | string[]
    protected expectedArgs: string;

    protected constructor() {
        this.commands = ['undefined'];
        this.category = ['undefined'];
        this.requiredArgsA = false;
        this.minArgsA = 0;
        this.maxArgsA = null;
        this.activated = false;
        this.requiredRoles = null;
        this.permissions = null;
        this.expectedArgs = '';
    };

    async validate(message: any) {
        const validation = await validateCommand(
            message, 
            this.commands,
            this.activated,
            this.requiredArgsA,
            this.minArgsA,
            this.maxArgsA,
            this.requiredRoles,
            this.permissions,
            this.expectedArgs
        );

        return validation;
    };

    async details(message: any, activated: any) {
        const pingembed = new MessageEmbed()
        .setTitle(`${this.commands[0]}`)
        .setColor("#aaff00")
        .setDescription(`
        \`\`Commands     :\`\`  ${this.commands.join(' | ')}
        \`\`Category     :\`\`  ${this.category.join(' | ')}
        \`\`Activated    :\`\`  ${this.activated}
        \`\`RequiredArgs :\`\`  ${this.requiredArgsA}
        \`\`RequiredRoles:\`\`  ${this.requiredRoles}
        \`\`RequiredPerms:\`\`  ${this.permissions}
        \`\`Usage        :\`\`  ${prefix}${this.commands[0]} ${this.expectedArgs}`)
        .setTimestamp()
        .setFooter(`Consulta realizada por ${message.author.username}`, 'https://cdn.discordapp.com/avatars/827292958624579665/af8866ed9bdce940320bf89782a2a95d.png?size=512');
        await message.channel.send(pingembed);
    }
};