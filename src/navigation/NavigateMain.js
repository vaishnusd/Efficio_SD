import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginPage/Login';
import HomePage from '../screens/Home/HomePage';
import RaiseIssue from '../screens/Home/RaiseIssue';
import IssueReport from '../screens/IssueReport/IssueReport';
import Profile from '../screens/Profile/Profile';
import EachReportMoreInfoPage from '../screens/IssueReport/EachReportMoreInfoPage';

const Stack = createNativeStackNavigator();

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