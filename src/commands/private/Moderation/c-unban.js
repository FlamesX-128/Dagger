let roles_required_unban //Temporarily disabled 

module.exports = {
    commands: ['unban', "un-ban"],
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'BAN_MEMBERS',
    requiredRoles: roles_required_unban,
    callback: async (msg, args) => {
        const userTarget = msg.mentions.members.first()

        if (!userTarget) {
            return msg.reply('You need to specify a valid user')
        
        } else if (msg.author.id == userTarget) {
            return msg.reply("You can't unban yourself")
        }

        try {
            await userTarget.unban()

        } catch {
            return msg.reply(`Error Occurred: Possible Problem **[Missing Permissions]**`)
        }

        return msg.reply(`The user '${userTarget}' has been successfully unbanned`)   
    }
}