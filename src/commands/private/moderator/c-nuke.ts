module.exports = {
    commands: ['nuke', 'clear', 'purge'],
    permissions: 'ADMINISTRATOR',
    callback: async (message: any, args: any) => {
        const Target: number = parseFloat(args);
        var Bulk: number = 0;

        try {
            for (Bulk <= Target;;) {
                await message.channel.bulkDelete(1);
                Bulk++;
            };
            
        } catch {
            console.log('Error in command: Nuke');

        } finally {
            await message.reply('Messages deletion completed');
        };
    }
};