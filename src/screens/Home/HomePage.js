import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign ,FontAwesome5} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = () => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.dashBoard}>
      <LinearGradient
						colors={['rgba(0, 33, 73, 1)',
              'rgba(85, 144, 215, 1)']}
            style={styles.dashBoardBox}
            start={{x:0,y:0.3}}
            end={{x:0.7,y:1}}
					>
						<AntDesign name='warning' size={24} color='white' />
						<Text style={styles.companyName}>Open Issue</Text>
						<Text style={styles.numberOf}>0</Text>
					</LinearGradient>

          <LinearGradient
						colors={['rgba(0, 33, 73, 1)',
              'rgba(85, 144, 215, 1)']}
            style={styles.dashBoardBox}
            start={{x:0,y:0.3}}
            end={{x:0.7,y:1}}
					>
					<FontAwesome5 name="hand-paper" size={24} color="white" />
						<Text style={styles.companyName}>ACK Issue</Text>
						<Text style={styles.numberOf}>0</Text>
					</LinearGradient>

          <LinearGradient
						colors={['rgba(0, 33, 73, 1)',
              'rgba(85, 144, 215, 1)']}
            style={styles.dashBoardBox}
            start={{x:0,y:0.3}}
            end={{x:0.7,y:1}}
					>
        <AntDesign name="checkcircleo" size={24} color="white" />
						<Text style={styles.companyName}>Closed Issue</Text>
						<Text style={styles.numberOf}>0</Text>
					</LinearGradient>

			</View>
		</View>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
	},
	dashBoard: {
		backgroundColor: 'Blue',
		flexDirection: 'row',
		justifyContent: 'space-between',
		top: 2,
	},
	dashBoardBox: {
		width: 125,
		height: 125,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
    gap:5
	},
	companyName: {
		color: '#fff',
	},
  numberOf:{
    color:'#fff'
  }
});
