import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default DatePickerComponent = ({ initialDate, updateFunction }) => {
    const [date, setDate] = useState(initialDate);

    function dateFormatter(date) {
        const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = Number(date.split("/")[1]);
        const month = allMonths[Number(date.split("/")[0]) - 1];
        const year = date.split("/")[2];
        return (day + " " + month + " " + year);
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

    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
                <Text style={{ textAlign: 'center' }}>{dateFormatter(date.toLocaleString().split(",")[0])}</Text>
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