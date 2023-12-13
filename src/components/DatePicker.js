import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePicker = ({
	changeValue
}) => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState("Select Date");

	const handleConfirm = (date) => {
		const SelectDate = moment(date).format('YYYY-MM-DD');
		setSelectedDate(SelectDate);
		changeValue(SelectDate);
		setDatePickerVisibility(false);
	};


	function dateCalc(date){
		let time;
		let hour = Number(date.slice(11,13));
		let minutes = date.slice(14,16);
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		date = Number(date.slice(0, 2)) + " " + months[Number(date.slice(3, 5)) - 1] + " " + date.slice(6, 10);
		if (hour > 12) {
			time = (hour - 12) +":"+ minutes + " PM";
		} else {
			time = hour +":"+ minutes + " AM"
	    }
		return date;
	  }

	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					setDatePickerVisibility(true);
				}}
				style={{
					top:4,
					flexDirection: 'row',
					alignItems: 'center',
					height: 50,
					elevation: 8,
					backgroundColor: '#fff',
					paddingRight: 30,
					borderTopRightRadius:8,
					borderBottomLeftRadius:8,
					borderBottomRightRadius: 8,
					borderColor:'#19647e',
					borderWidth:3
				}}
			>
				
				<Image
					style={{ marginLeft: 5, height: 35, width: 35}}
					source={require('../../assets/images/calenderIcon.png')}
				/>

				<Text style={{ marginLeft: 5, fontSize: 16, fontWeight: '500' }}>
					{selectedDate}
				</Text>
			</TouchableOpacity>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode='date'
				onConfirm={handleConfirm}
				maximumDate={new Date()}
				onCancel={() => {
					setDatePickerVisibility(false);
				}}
			/>
		</View>
	);
};
export default DatePicker;
