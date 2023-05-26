import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.d0a5abc1.js","_app/immutable/chunks/index.153e9287.js"];
export const stylesheets = [];
export const fonts = [];
