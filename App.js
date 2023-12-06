import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigate from './src/navigation/NavigateMain';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<Navigate />
				<StatusBar barStyle='dark-content' translucent backgroundColor='#fff' />
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
