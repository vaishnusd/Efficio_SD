// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Navigate from './src/navigation/NavigateMain';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';


export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<Navigate />
					<StatusBar barStyle='dark-content' backgroundColor='rgba(207, 235, 255, 1)' />
				</SafeAreaView>
			</NavigationContainer>
		</Provider>
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
