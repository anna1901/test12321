import { requireNativeView } from 'expo';
import * as React from 'react';

import { Test123ViewProps } from './Test123.types';

const NativeView: React.ComponentType<Test123ViewProps> =
  requireNativeView('Test123');

export default function Test123View(props: Test123ViewProps) {
  return <NativeView {...props} />;
}
