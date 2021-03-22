let roles_required_warn //Temporarily disabled 

module.exports = {
    commands: 'warn',
    expectedArgs: '[User] [Reason]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'BAN_MEMBERS',
    requiredRoles: roles_required_warn,
    callback: async (msg, args) => {
        const userTarget = msg.mentions.members.first()

        if (!userTarget) {
            return msg.reply('You need to specify a valid user')
        
        } else if (msg.author.id == userTarget) {
            return msg.reply("You can't warn yourself")
        }

        try {
            args.shift()
            await userTarget.send(`You were warned by: ${args.join(" ")}`)

        } catch {
            return msg.reply('Error Occurred: Possible Problem ``[Missing Permissions]``')
        }

        return msg.reply(`The user '${userTarget}' has been successfully warned`)
    }
}