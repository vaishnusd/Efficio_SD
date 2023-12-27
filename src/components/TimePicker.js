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
					style={{ height: 30, width: 30 }}
                     source={require('../../assets/images/timer.png')}
				/>

				<Text
					style={{ marginLeft: 5, fontSize: 16, fontWeight: '500',width:100 }}
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
        borderWidth: 2,
        borderColor: "#4C6078",
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        flexDirection:"row",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    }
});

export default TimePicker;
