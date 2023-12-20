import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProductionStatus from './ProductionStatus';
import APICall from '../../utils/APICall';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {

	const navigation = useNavigation();
	const [data, setData] = useState([]);
	const [dashBoardData, setDashBoardData] = useState([]);

	const [isLoading, setIsLoading] = useState(true);
	const [loader, setLoader] = useState(true);
	const [apiError, setAPIError] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const dashBoardApi = "https://androidapi220230605081325.azurewebsites.net/api/approval/GetAndonStatus"
	const dashBoardJsonDataToPassInApi = {
		PlantName: "Grundfos"
	};

	function dashBoardApiResultReport(dataGot, apiError) {
		if (apiError) {
			setIsLoading(false);
			setAPIError(true);
		} else {
			if (dataGot) {
				setDashBoardData(dataGot[0]);
				// console.log(dataGot[0]);
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		}
	}
	useEffect(() => {
		APICall(dashBoardApi, dashBoardJsonDataToPassInApi, dashBoardApiResultReport, 'getReport');
	}, []);



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
				setLoader(false);
			} else {
				setIsLoading(false);
			}
		}
	}

	useEffect(() => {
		APICall(apiGot, jsonDataToPassInApi, resultReport, 'getReport');
	}, []);

	return (
		<ScrollView style={styles.mainContainer}>
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
					<Text style={styles.numberOf}>{dashBoardData.open === null ? '0' : dashBoardData.open}</Text>
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
					<Text style={styles.numberOf}>{dashBoardData.acknowledged}</Text>
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
					<Text style={styles.numberOf}>{dashBoardData.closed}</Text>
				</LinearGradient>

			</View>
			<View style={styles.productionStatus}>
				<Text style={{
					color: 'rgba(0, 0, 0, 1)', justifyContent: 'center', fontSize: 20, textAlign: 'center',
					fontWeight: 700
				}}>Production Line Status</Text>
				{loader ?
					<View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
						<ActivityIndicator size={"large"} />
					</View> :
					<FlatList
						data={data}
						contentContainerStyle={styles.stockBody}
						renderItem={
							({ item }) =>
								<ProductionStatus dataToSend={item} />
						}
					/>
				}
			</View>

		</ScrollView>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'rgba(207, 235, 255, 1)',
		paddingBottom: 20

	},
	dashBoard: {
		backgroundColor: 'Blue',
		flexDirection: 'row',
		justifyContent: 'space-between',
		fontWeight: 500,
		top: 10,
		marginHorizontal: 10,
		flex: 2
	},
	dashBoardBox: {
		width: 120,
		height: 120,
		borderRadius: 30,
		fontWeight: 500,
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
		gap: 10,
		flex: 7

	},
	stockBody: {
		gap: 20
	}

});