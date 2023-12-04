import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigate from './src/navigation/Navigate';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IssueReport from './src/screens/IssueReport/IssueReport';
import Login from './src/screens/LoginPage/Login';


export default function App() {
	return (
		<IssueReport />
		// <Login />
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
