import { View, Text, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProductionStatus from './ProductionStatus';
import APICall from '../../utils/APICall';
import BottomNavigator from '../../navigation/BottomNavigator';

const HomePage = () => {
	const IssueReportData = require('../../../assets/json/IssueReports.json');
	const navigation = useNavigation();
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [apiError, setAPIError] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const apiGot =
		'https://androidapi220230605081325.azurewebsites.net/api/approval/GetLineDetails';
	const jsonDataToPassInApi = {
		PlantName: "Grundfos"
	};

	function resultReport(dataGot, apiError) {
		if (apiError) {
			setIsLoading(false);
			setAPIError(true);
		} else {
			if (dataGot) {
				setData(dataGot);
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		}
	}

	useEffect(() => {
		APICall(apiGot, jsonDataToPassInApi, resultReport, 'getReport');
	}, []);

	return (
		<View style={styles.mainContainer}>
			<View style={styles.dashBoard}>
				<LinearGradient
					colors={['rgba(0, 33, 73, 1)',
						'rgba(85, 144, 215, 1)']}
					style={styles.dashBoardBox}
					start={{ x: 0, y: 0.3 }}
					end={{ x: 0.7, y: 1 }}
				>
					<AntDesign name='warning' size={24} color='white' />
					<Text style={styles.companyName}>Open Issue</Text>
					<Text style={styles.numberOf}>0</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgba(0, 33, 73, 1)',
						'rgba(85, 144, 215, 1)']}
					style={styles.dashBoardBox}
					start={{ x: 0, y: 0.3 }}
					end={{ x: 0.7, y: 1 }}
				>
					<FontAwesome5 name="hand-paper" size={24} color="white" />
					<Text style={styles.companyName}>ACK Issue</Text>
					<Text style={styles.numberOf}>0</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgba(0, 33, 73, 1)',
						'rgba(85, 144, 215, 1)']}
					style={styles.dashBoardBox}
					start={{ x: 0, y: 0.3 }}
					end={{ x: 0.7, y: 1 }}
				>
					<AntDesign name="checkcircleo" size={24} color="white" />
					<Text style={styles.companyName}>Closed Issue</Text>
					<Text style={styles.numberOf}>0</Text>
				</LinearGradient>
			</View>
			<View style={styles.productionStatus}>
				<Text style={{
					color: 'rgba(0, 0, 0, 1)', justifyContent: 'center', fontSize: 20, textAlign: 'center',
					fontWeight: 700
				}}>Production Line Status</Text>
				<FlatList
					data={data}
					contentContainerStyle={styles.stockBody}
					renderItem={
						({ item }) =>
							<ProductionStatus dataToSend={item} />
					}
				/>
			</View>
			<BottomNavigator />
		</View>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'rgba(207, 235, 255, 1)',
		paddingBottom: 190

	},
	dashBoard: {
		backgroundColor: 'Blue',
		flexDirection: 'row',
		justifyContent: 'space-between',
		top: 2,
		marginHorizontal: 10
	},
	dashBoardBox: {
		width: 120,
		height: 120,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,

	},
	companyName: {
		color: '#fff',
	},
	numberOf: {
		color: '#fff'
	},
	productionStatus: {
		top: 20,
		marginHorizontal: 10,
		gap: 10

	},
	stockBody: {
		gap: 20
	}

});