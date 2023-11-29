import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigate from './src/navigation/Navigate';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/screens/LoginPage/Login';

export default function App() {
	return (
		<NavigationContainer>
   
			<SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' translucent backgroundColor='white' /> 
				<Navigate />
			</SafeAreaView>
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
