import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, Image } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProductionStatus from './ProductionStatus';
import APICall from '../../utils/APICall';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

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
	const loaderImageAddress = 'https://icaengineeringacademy.com/wp-content/uploads/2019/01/ajax-loading-gif-transparent-background-2.gif';

	function dashBoardApiResultReport(dataGot, apiError) {
		if (apiError) {
			setIsLoading(false);
			setAPIError(true);
		} else {
			if (dataGot) {
				setDashBoardData(dataGot[0]);
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
			<Animatable.View style={styles.dashBoard} animation={'slideInDown'}>
				<LinearGradient
					colors={['rgba(0, 33, 73, 1)',
						'rgba(85, 144, 215, 1)']}
					style={styles.dashBoardBox}
					start={{ x: 0, y: 0.3 }}
					end={{ x: 0.7, y: 1 }}
				>
					{dashBoardData.open ?
						<Image source={require('../../../assets/icons/openIssueIcon.gif')} style={{ width: 40, height: 40, marginBottom: -5 }} /> :
						<AntDesign name='warning' size={30} color='white' />
					}
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
					<FontAwesome5 name="hand-paper" size={30} color="white" />
					<Text style={styles.companyName}>ACK Issue</Text>
					<Text style={styles.numberOf}>{dashBoardData.acknowledged === null ? '0' : dashBoardData.acknowledged}</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgba(0, 33, 73, 1)',
						'rgba(85, 144, 215, 1)']}
					style={styles.dashBoardBox}
					start={{ x: 0, y: 0.3 }}
					end={{ x: 0.7, y: 1 }}
				>
					<AntDesign name="checkcircleo" size={30} color="white" />
					<Text style={styles.companyName}>Closed Issue</Text>
					<Text style={styles.numberOf}>{dashBoardData.closed}</Text>
				</LinearGradient>

			</Animatable.View>
			<View style={styles.productionStatus}>
				<Animatable.Text
					style={{
						color: 'rgba(0, 0, 0, 1)', justifyContent: 'center', fontSize: 20, textAlign: 'center', fontFamily: 'Poppins'
					}}
					animation={'slideInLeft'}
				>
					Production Line Status
				</Animatable.Text>
				{loader ?
					<View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', marginTop: '40%' }}>
						{/* <ActivityIndicator size={'large'} color={'#003571'} /> */}
						<View style={{ width: 300, height: 100, alignItems: 'center', justifyContent: 'center' }}>
							<Image source={require('../../../assets/images/customer-service.gif')} style={{ width: 80, height: 80 }} />
						</View>
						<Text style={{ color: '#003571', fontSize: 20, marginTop: 20, fontFamily: 'Poppins_SemiBold' }}>Loading...</Text>
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
		justifyContent: 'center',
		top: 10,
		gap: 5
	},
	dashBoardBox: {
		width: 110,
		height: 110,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	companyName: {
		color: '#fff',
		fontFamily: 'Poppins_SemiBold',
		marginTop: 10
	},
	numberOf: {
		color: '#fff',
		fontFamily: 'Poppins_Regular',
	},
	productionStatus: {
		marginHorizontal: 10,
		gap: 10,
		marginTop: 40,
		paddingBottom: 100
	},
	stockBody: {
		gap: 20
	}

});