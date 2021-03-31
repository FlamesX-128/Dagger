// Config
export let prefix: string = '!>';

// Permissions

// > > > Add-role < < < //
export let requiredRoles_addrole: string[] = [];

// > > > Remove-role < < < //
export let requiredRoles_removerole: string[] = [];

// > > > Ban < < < //
export let requiredRoles_ban: string[] = [];
export let requiredArgsB_ban: boolean = true;

// > > > unBan < < < //
export let requiredRoles_unban: string[] = [];
export let requiredArgsB_unban: boolean = true;

// > > > Kick < < < //
export let requiredRoles_kick: string[] = [];

// > > > Warn < < < //
export let requiredRoles_warn: string[] = [];

export let channels_blocked: string[];