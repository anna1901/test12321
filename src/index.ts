// Reexport the native module. On web, it will be resolved to Test123Module.web.ts
// and on native platforms to Test123Module.ts
export { default } from './Test123Module';
export { default as Test123View } from './Test123View';
export * from  './Test123.types';
