let roles_required_remove_role //Temporarily disabled 

module.exports = {
    commands: ['removerole', 'remove-role'],
    expectedArgs: '[User] [Role]',
    requiredArgsA: true,
    minArgsA: 1,
    requiredArgsB: true,
    minArgsB: 1,
    permissions: 'MANAGE_ROLES',
    requiredRoles: roles_required_remove_role,
    callback: async (msg, args) => {
        const userTarget = msg.mentions.members.first() ||
                       msg.guild.members.cache.find((m) => m.user.tag === args[0]) ||
                       msg.guild.members.cache.find((m) => m.id === args[0])

        const roleTarget = msg.guild.roles.cache.find((r) => r.name == args[1]) ||
                     msg.guild.roles.cache.find((r) => r.id == args[1]) ||
                     msg.mentions.roles.first()
        
        if (!userTarget) {
            return msg.reply('You need to specify a valid user')
        
        } else if (!roleTarget) { 
            return msg.reply('You need to specify a valid role') 
        }

        try {
            await userTarget.roles.remove(roleTarget)
            
        } catch {
            return msg.reply('An error occurred')
        }
    
        msg.reply(`The role "${roleTarget}" has been taken from the user "${userTarget}"`)
    }
}