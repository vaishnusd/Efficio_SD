import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({
	changeValue
}) => {
	return (
		<TextInput
			onChangeText={changeValue}
			style={styles.input}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignContent: 'center',
		borderColor: '#e8e8',
		borderWidth: 1,
        
		borderRadius: 10,
		paddingHorizontal: 15,
		justifyContent: 'center',
	},
	input: {
		backgroundColor:'rgba(218, 218, 218, 0.3)',
		height:45,
        borderColor:'rgba(0, 148, 255, 1)',
		borderWidth:1,
		borderRadius:5,
		paddingHorizontal: 15,

	},
});

export default CustomInput;
