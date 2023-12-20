import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useForm, Controller } from 'react-hook-form';

const SelectDropDownPage = ({
	data,
	name,
	// setterHandle,
	// setDropDownState,
	changeValue
}) => {
 
	const [productSelected, setProductSelected] = useState(data[0]);
	return (
		<View style={styles.selectDropDownButtonContainer}>
			<Text style={styles.InputHeader}>
				{name}
				<Text style={{ color: 'red' }}> *</Text>
			</Text>
			<SelectDropdown
				data={data}
				
				onSelect={(selectedItem) => {
					
					changeValue(selectedItem);
				}}
				renderDropdownIcon={() => (
					<Image
						source={require('../../assets/images/dropdown.png')}
						style={styles.dropDownIconStyle}
					/>
				)}
				buttonStyle={styles.selectDropDownButton}
				defaultButtonText={'Select'}
				rowStyle={styles.selectDropDownRow}
				rowTextStyle={styles.selectDropDownText}
				buttonTextStyle={styles.selectDropDownButtonText}
				selectedRowStyle={styles.selectedRowStyle}
				buttonTextAfterSelection={(selectedItem) => {
					return selectedItem;
				}}
				rowTextForSelection={(item) => {
					return item;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	dropDownIconStyle: {
		width: 15,
		height: 15,
		left:10
	},
	selectDropDownText: {
		fontSize: 16,
	},
	selectDropDownRow: {
		
		width: 'auto',
		
	},
	selectDropDownButton: {
		width: 'auto',
		height: 45,
		borderWidth: 2,
		borderColor:'#004696',
		backgroundColor: 'white',
		borderRadius:8
	},
	selectDropDownButtonText: {
		fontSize: 16,

	},
	selectDropDownButtonContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	InputHeader: {
		fontSize: 16,
		fontWeight: '600',
		color: '#000',
		fontFamily:'Poppins',
		alignSelf: 'flex-start',
		marginBottom: 5,
	},
	selectedRowStyle: {
		backgroundColor: '#219ebc',
		color:'#fff',
	
	},
});

export default SelectDropDownPage
