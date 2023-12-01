import { View, Text, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = () => {


	const navigation = useNavigation();
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
				<Text style={{ color: 'rgba(0, 0, 0, 1)', justifyContent: 'center', fontSize: 20,textAlign:'center',
				 fontWeight: 700 }}>Production Line Status</Text>
				{/* <FlatList
                    data={allStocksData}
                    contentContainerStyle={styles.stockBody}
                    renderItem={({ item }) =>
                        <EachStockCard itemName={item.name} totalAvailable={item.available} totalUsed={item.used} manName={item.manufacturer} supName={item.supplier} />}
                /> */}


				<View style={styles.productionStatusHeader}>
					<Text style={{ color: '#fff' }}>CR</Text>
					<View style={{ flexDirection: 'row' }}>
						<Entypo name="bug" size={24} color="white" />
						<Text style={{ color: '#fff' }}>Issue:0</Text>
					</View>

				</View>
				<LinearGradient
					colors={['rgba(85, 144, 215, 1)',
						'rgba(0, 33, 73, 1)']}
					style={styles.productionLineStatus}


				>
					<View>
						<Image source={require('../../../assets/images/HomeMachine.png')} style={{
							width: 108,
							height: 189,
						}} />


					</View>
					<View style={styles.options}>
						<TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
							<Text>Name Plate Printing</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
							<Text>Stage 1</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionsButton} onPress={'handlePress'} >
							<Text>Stage 2</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
							<Text>Stage 3</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
							<Text>Testing</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
							<Text>Packing</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.footerProduction}>
						<TouchableOpacity
							style={styles.IssueButton}
							onPress={() => {
								navigation.navigate('RaiseIssue');
							}}
						>
							<Image source={require('../../../assets/images/WebsiteBug.png')} style={{
								width: 25,
								height: 25,
							}} />
							<Text style={{ color: '#fff' }}>Raise Issue</Text>
						</TouchableOpacity>

					</View>
					{/* <FontAwesome5 names="hand-paper" size={24} color="white" />
					<Text style={styles.companyName}>ACK Issue</Text>
					<Text style={styles.numberOf}>0</Text> */}
				</LinearGradient>
			</View>


		</View>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'rgba(207, 235, 255, 1)',

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
		

	},
	productionStatusHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 40,
		

		backgroundColor: 'rgba(0, 70, 150, 1)',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingHorizontal: 20,
		alignItems: 'center'
	},
	productionLineStatus: {
		width: Dimensions.get('window'),
		height: 400,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,

		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
		padding: 10


	},
	options: {
		alignItems: 'center',
		top: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: Dimensions.get('window'),

		gap: 5,
	},
	optionsButton: {

		height: 24,
		padding: 3,
		borderRadius: 8,
		backgroundColor: 'rgba(24, 192, 193, 1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	IssueButton: {
		flexDirection: 'row',
		top: 25,
		width: 132,
		height: 35,
		borderRadius: 8,
		backgroundColor: 'rgba(84, 106, 131, 1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	footerProduction: {
		gap: 10
	}
});