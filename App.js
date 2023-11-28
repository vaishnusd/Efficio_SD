import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import navigate from './src/navigation/navigate';

export default function App() {
  return (
    <NavigationContainer>
    <View style={{ flex: 1 }}>
    <StatusBar
  backgroundColor={'#00293A'}  barStyle="light-content" /> 
      <navigate/> 
    </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
