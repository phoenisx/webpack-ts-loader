const mutableRegistry = new Map();
export const registry = mutableRegistry;

// Registers an item type, and returns a statically typed (specific) ItemSDK.
export async function register (config: any): Promise<any> {
  if (!config.type) {
    throw new TypeError('Cannot register item type with an empty name');
  }
  if (mutableRegistry.has(config.type)) {
    throw new TypeError(`Item type '${config.type}' was already registered`);
  }

  // We must import ItemSDK lazily, to prevent circular imports.
  const ItemSDKClass = await import('./sdk.ts').then(m => m.default);
  const sdk = new ItemSDKClass(config);
  mutableRegistry.set(config.type, sdk);
  return sdk;
}
