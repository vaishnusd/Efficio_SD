import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image} from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default CustomDateTimePicker = ({ initialDate ,mode,updateFunction,changeValue,compStyle}) => {
    const [date, setDate] = useState(initialDate);

    function dateFormatter(date) {
        console.log('DateFormat',date)
        let dateArray = date.toString().split(" ");
        return (Number(dateArray[2]) + " " + dateArray[1] + " " + dateArray[3]);
    }

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate.slice(0, timestamp.indexOf('T'));
    //     console.log('CurrrenDate',currentDate);
    //     setDate(currentDate);
    //     changeValue(currentDate);
    // };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        changeValue(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,

        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
            <TouchableOpacity style={compStyle} onPress={showDatepicker} >
            <Image
					style={{ height: 30, width: 30 }}
                     source={require('../../assets/images/calender.png')}
				/>
                <Text style={{  marginLeft: 10, fontSize: 16, fontWeight: '500',width:100 }}>{dateFormatter(date)}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    dateButton: {
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
        alignItems:'center',
        justifyContent: 'center'
    }
});