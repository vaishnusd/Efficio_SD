import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginPage/Login';
import HomePage from '../screens/Home/HomePage';
import RaiseIssue from '../screens/Home/RaiseIssue';

const Stack = createNativeStackNavigator();

export default Navigate = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name='Login'
					component={Login}
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
			</Stack.Navigator>
		</NavigationContainer>

	)
}

const styles = StyleSheet.create({})