import { prefix } from "../config";

const validatePermissions = async (permissions: string[]) => {
    const validPermissions = [
        'CREATE_INSTANT_INVITE',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'ADMINISTRATOR',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'ADD_REACTIONS',
        'VIEW_AUDIT_LOG',
        'PRIORITY_SPEAKER',
        'STREAM',
        'VIEW_CHANNEL',
        'SEND_MESSAGES',
        'SEND_TTS_MESSAGES',
        'MANAGE_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'MENTION_EVERYONE',
        'USE_EXTERNAL_EMOJIS',
        'VIEW_GUILD_INSIGHTS',
        'CONNECT',
        'SPEAK',
        'MUTE_MEMBERS',
        'DEAFEN_MEMBERS',
        'MOVE_MEMBERS',
        'USE_VAD',
        'CHANGE_NICKNAME',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS'
    ];

    for (const permission of permissions) {
        if (!validPermissions.includes(permission)) {
            throw new Error(`Unknown permission node "${permissions}"`);
        };
    };
};

export async function validateCommand(
    message: any, 
    commands: string[],
    activated: boolean,
    requiredArgsA: boolean,
    minArgsA: number,
    maxArgsA: null | number,
    requiredRoles: null | string[],
    permissions: null | string[],
    expectedArgs: string
    ) {
    const { member, content, guild } = message;
    const args = content.split(/[ ]+/);
    args.shift();

    if (activated == false) {
        return false;

    } else if (requiredArgsA == true ) {
        try {
            if (args[0].length < minArgsA || (maxArgsA !== null && args[0].length > maxArgsA) ) {
                await message.reply(`Incorrect syntax! Use ${prefix}${commands} ${expectedArgs}`);
                return false;     
            };
        } catch {
            await message.reply(`Incorrect syntax! Use ${prefix}${commands} ${expectedArgs}`);
            return false;
        };

    } else if (permissions) {
        if (permissions.length) {
            await validatePermissions(permissions)
        }

        for (const permission of permissions) {
            if (!member.hasPermissions(permission) ) {
                await message.reply('You do not have permissions to execute this command!');
                return false;
            };
        };
        
    } else if (requiredRoles) {
        for (const requiredRole of requiredRoles) {
            const role = guild.roles.cache.find (
                (role: any) => role.name === requiredRole
            );

            if (!role || !member.roles.cache.has(role.id) ) {
                await message.reply(`You must have the role "${requiredRoles}" role to use this command!`);
                return false;
            };
        };
        
    };
    return true;
};