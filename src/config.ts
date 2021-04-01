// - - - - LoadCommands - - - - //
import { ping } from "./commands/misc/ping";

export const commands: any = { 
    "ping": { 
        "execute": async (message: any) => { await ping.execute(message) },
        "details": async (message: any) => { await ping.info(message) } 
    }
};


// - - - - Server config - - - - //
export let prefix: string;

// - - - - ping - - - - //
export let activatedPing: boolean


export let loadConfig: boolean = false;
export async function loadSettings(guild: any) {
    prefix = '!>';
    activatedPing = false;
    loadConfig = true;
};