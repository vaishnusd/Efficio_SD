import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePickerComponent from "../../components/DatePickerComponent";
import { useState } from "react";

export default IssueReportFilter = ({ isVisible, onClose, dateDetails, functionsPassed }) => {
    const [propValue, setPropValue] = useState(0);
    const [key, setKey] = useState(0);

    function resetFunction() {
        functionsPassed.resetFunction();
        setPropValue(propValue + 1);
        setKey(prevKey => prevKey + 1);
    }


    return (
        <Modal visible={isVisible} animationType="slide" transparent>
            <TouchableOpacity style={styles.modalBackground} onPress={onClose} activeOpacity={1}>
                <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                    <View style={styles.filterHeader}>
                        <Text style={styles.filterHeading}>Date Filter</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, padding: 20, gap: 5 }}>
                                <Text style={styles.filterProperties}>From Date: </Text>
                                <DatePickerComponent key={key} prop={propValue} initialDate={dateDetails.fromDate} updateFunction={dateDetails.updateFromDate} />
                            </View>
                            <View style={{ flex: 1, padding: 20, gap: 5 }}>
                                <Text style={styles.filterProperties}>To Date: </Text>
                                <DatePickerComponent key={key} prop={propValue} initialDate={dateDetails.toDate} updateFunction={dateDetails.updateToDate} />
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10, flexDirection: 'row', gap: 20 }}>
                        <TouchableOpacity style={styles.saveButton} onPress={resetFunction}>
                            <Text style={styles.buttonText}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={functionsPassed.savingFilteredData}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
    },
    modalContent: {
        height: '30%',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButtonIcon: {
        height: 20,
        width: 20,
    },
    closeButton: {
        position: 'absolute',
        right: 20
    },
    filterHeader: {
        backgroundColor: '#4C6078',
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    filterHeading: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins',
        alignSelf: 'center'
    },
    filterTextButtons1: {
        borderWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10
    },
    filterTextButtons2: {
        alignSelf: 'center',
        backgroundColor: "#4C6078",
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10
    },
    saveButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#4C6078",
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Poppins_Regular'
    },
    filterProperties: {
        fontFamily: 'Poppins',
        fontSize: 13
    },
    optionButtonText1: {
        fontFamily: 'Poppins_Regular',
        fontSize: 14
    },
    optionButtonText2: {
        fontFamily: 'Poppins_Regular',
        fontSize: 14,
        color: 'white'
    }
});