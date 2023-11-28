import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/LoginPage/Login';
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
};
