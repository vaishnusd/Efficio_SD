import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import CustomDrawer from './CustomDrawer';
// import ReduxCheck from '../services/ReduxCheck';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function DrawerNavigator() {

	return <Drawer.Navigator drawerType="slide"
		drawerStyle={{
			width: '100%',
		}} drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName='BottomTabNavigatorMain' screenOptions={{ headerShown: false }} >
		<Drawer.Screen name="Home" component={BottomTabNavigator} />
		<Drawer.Screen name="AcknowledgeIssue" component={AcknowledgeIssue} />
		<Drawer.Screen name="CloseIssue" component={CloseIssue} />
		{/* <Drawer.Screen name="ReduxCheck" component={ReduxCheck} /> */}
	</Drawer.Navigator>
}

function BottomTabNavigator() {
	return <BottomTab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
		<BottomTab.Screen name="Home" component={HomePage}
			options={{
				tabBarIcon: ({ color, size }) => (
					<Ionicons name='home' color={color} size={size} />
				)
			}} />

		<BottomTab.Screen name="Issue Report" component={IssueReport}
			options={{
				tabBarIcon: ({ color, size }) => (
					<Ionicons name='notifications-outline' color={color} size={size} />
				)
			}}
		/>
		<BottomTab.Screen name="Profile Section" component={Profile}
			options={{
				tabBarIcon: ({ color, size }) => (
					<Ionicons name='person-circle-outline' color={color} size={size} />
				)
			}}
		/>
		<BottomTab.Screen name="Side Menu" component={SideMenu}
			options={{
				tabBarIcon: ({ color, size }) => (
					<Ionicons name='reorder-four-sharp' color={color} size={size} />
				)
			}}
		/>
	</BottomTab.Navigator>
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
					name='DrawerNavigator'
					component={DrawerNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='BottomTabNavigatorMain'
					component={BottomTabNavigator}
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
			</Stack.Navigator>
		</NavigationContainer>

	)
}

const styles = StyleSheet.create({})