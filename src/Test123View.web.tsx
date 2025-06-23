import * as React from 'react';

import { Test123ViewProps } from './Test123.types';

export default function Test123View(props: Test123ViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
