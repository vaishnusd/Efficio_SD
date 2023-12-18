import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigate from './src/navigation/NavigateMain';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AcknowledgeIssue from './src/screens/Home/AcknowledgeIssue';
import CloseIssue from './src/screens/Home/CloseIssue'
import Profile from './src/screens/Profile/Profile';
import IssueReport from './src/screens/IssueReport/IssueReport';
import SideMenu from './src/navigation/SideMenu';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// const Drawer=createDrawerNavigator()
const BottomTab=createBottomTabNavigator()


export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				    <Provider store={store}>
				<Navigate />
				</Provider>
				<StatusBar barStyle='dark-content' backgroundColor='rgba(207, 235, 255, 1)' />
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
