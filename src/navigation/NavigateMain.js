import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginPage/Login';
import HomePage from '../screens/Home/HomePage';
import RaiseIssue from '../screens/Home/RaiseIssue';
import AcknowledgeIssue from '../screens/Home/AcknowledgeIssue';
import CloseIssue from '../screens/Home/CloseIssue';
import IssueReport from '../screens/IssueReport/IssueReport';
import Profile from '../screens/Profile/Profile';
import EachReportMoreInfoPage from '../screens/IssueReport/EachReportMoreInfoPage';
import SideMenu from './SideMenu';
import AboutUs from '../screens/MoreInfo/AboutUs';
import Contacts from '../screens/MoreInfo/Contacts';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();



function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName='Home'
			screenOptions={
				({ route }) => ({
					headerShown: false,
					tabBarActiveTintColor: 'cyan',
					tabBarInactiveTintColor: 'white',
					tabBarLabelStyle: {
						fontSize: 10,
					},
					tabBarStyle: {
						backgroundColor: '#004A8E',
						height: 55,
						borderTopRightRadius: 30,
						borderTopLeftRadius: 30,
						elevation: 0,
						position: 'absolute',
						bottom: 0,
						borderTopWidth: 0,
						paddingBottom: 5
					},
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused ? 'home-icon-focused' : 'home-icon';
						} else if (route.name === 'Settings') {
							iconName = focused ? 'settings-icon-focused' : 'settings-icon';
						}
						return <IconComponent name={iconName} size={size} color={color} />;
					}
				})
			}>
			<BottomTab.Screen name="Home" component={HomePage}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' color={color} size={size} />
					)
				}} />

			<BottomTab.Screen
				name="Issues"
				component={IssueReport}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='book' color={color} size={size} />
					)
				}}
			/>

			<BottomTab.Screen name="Profile" component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' color={color} size={size} />
					)
				}}
			/>
			<BottomTab.Screen name="Menu" component={SideMenu}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='md-menu-sharp' color={color} size={size} />
					)
				}}
			/>
		</BottomTab.Navigator>
	);
}

export default NavigateMain = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				initialRouteName='Login'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='BottomTabNavigatorMain'
					component={BottomTabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='AboutUs'
					component={AboutUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='IssueReport'
					component={IssueReport}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Home'
					component={HomePage}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='RaiseIssue'
					component={RaiseIssue}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='AcknowledgeIssue'
					component={AcknowledgeIssue}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='CloseIssue'
					component={CloseIssue}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='ProfileSection'
					component={Profile}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='EachReportMoreInfo'
					component={EachReportMoreInfoPage}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Menu"
					component={SideMenu}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Contacts'
					component={Contacts}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>

	)
}

const styles = StyleSheet.create({})