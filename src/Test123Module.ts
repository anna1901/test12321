import { NativeModule, requireNativeModule } from 'expo';

import { Test123ModuleEvents } from './Test123.types';

declare class Test123Module extends NativeModule<Test123ModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<Test123Module>('Test123');
