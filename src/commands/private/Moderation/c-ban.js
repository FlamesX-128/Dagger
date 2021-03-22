let roles_required_ban //Temporarily disabled 

module.exports = {
    commands: 'ban',
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'BAN_MEMBERS',
    requiredRoles: roles_required_ban,
    callback: async (msg, args) => {
        const userTarget = msg.mentions.members.first()

        if (!userTarget) {
            return msg.reply('You need to specify a valid user')
        
        } else if (msg.author.id == userTarget) {
            return msg.reply("You can't ban yourself")
        }

        try {
            await userTarget.ban()

        } catch {
            return msg.reply(`Error Occurred: Possible Problem **[Missing Permissions]**`)
        }

        return msg.reply(`The user '${userTarget}' has been successfully banned`)   
    }
}