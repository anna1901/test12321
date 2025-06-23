import { registerWebModule, NativeModule } from 'expo';

import { Test123ModuleEvents } from './Test123.types';

class Test123Module extends NativeModule<Test123ModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(Test123Module, 'Test123Module');
