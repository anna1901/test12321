import { useEvent } from 'expo';
import * as Test123 from 'test123';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Greeting: {Test123.hello()}</Text>
    </View>
  );
}
