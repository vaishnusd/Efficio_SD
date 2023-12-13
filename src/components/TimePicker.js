import React, { useState } from 'react';
import { Text } from 'react-native';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Colors } from '../utils/Colors';
import { Image } from 'react-native';

const TimePicker = ({
	changeValue,
	selectTimePiker,
}) => {
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [timeToDisplay, setTimeToDisplay] = useState('Select Time');

	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleConfirm = (time) => {
		const selectedTime = new Date(time);
		const options = { hour: '2-digit', minute: '2-digit' };
		const formattedTime = selectedTime.toLocaleTimeString(undefined, options);
		console.log(formattedTime);
		hideTimePicker();
		setTimeToDisplay(formattedTime);
		changeValue(formattedTime);
	};

	

	return (
		<View>
			<TouchableOpacity
				title={timeToDisplay}
				onPress={() => {
					setTimePickerVisibility(true);
				}}
				style={styles.clickButton}
			>
				<Image
					style={{ height: 25, width: 25,left:5 }}
					source={require('../../assets/images/clock.png')}
				/>

				<Text
					style={{ marginLeft: 5, fontSize: 16, fontWeight: '500',left:5 }}
				>
					{!selectTimePiker && timeToDisplay}
				</Text>
			</TouchableOpacity>

			<DateTimePickerModal
				isVisible={isTimePickerVisible}
				mode='time'
				onConfirm={handleConfirm}
				onCancel={hideTimePicker}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	clickButton: {
	    flexDirection:'row',
		top:5,
		alignItems: 'center',
		height: 50,
		width:150,
		

		elevation: 8,
		backgroundColor: '#fff',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		borderWidth: 3,
		
		
		borderColor: '#19647e',
	},
});

export default TimePicker;
