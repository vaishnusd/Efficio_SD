import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigate from './src/navigation/Navigate';

export default function App() {
	return (
		<NavigationContainer>
			<View style={{ flex: 1 }}>
				<StatusBar backgroundColor={'#00293A'} barStyle='light-content' />
				<Navigate />
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
