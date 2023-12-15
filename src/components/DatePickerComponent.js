import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default DatePickerComponent = ({ initialDate, updateFunction ,mode}) => {
    const [date, setDate] = useState(initialDate);

    function dateFormatter(date) {
        console.log('DateFormat',date)
        let dateArray = date.toString().split(" ");
        return (Number(dateArray[2]) + " " + dateArray[1] + " " + dateArray[3]);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        updateFunction(currentDate);
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

    const dateDisplay=()=>{

    }

    const timeDisplay=()=>{
        
    }

   

    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
                <Text style={{ textAlign: 'center' }}>{dateFormatter(date)}</Text>
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});