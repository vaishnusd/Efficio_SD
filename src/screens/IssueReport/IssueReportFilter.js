import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePickerComponent from "../../components/DatePickerComponent";
import { useEffect, useState } from "react";

export default IssueReportFilter = ({ isVisible, onClose, filterFunction }) => {
    const [filteredData, setFilteredData] = useState();
    const [toDate, setToDate] = useState(new Date());
    const [fromDate, setFromDate] = useState(new Date(toDate.getTime() - 7 * 24 * 60 * 60 * 1000));
    const [openStatus, setOpenStatus] = useState(false);
    const [acknowledgeStatus, setAcknowledgeStatus] = useState(false);
    const [closedStatus, setClosedStatus] = useState(false);
    const [propValue, setPropValue] = useState(0);
    const [key, setKey] = useState(0);
    const [originalData, setOriginalData] = useState();

    const apiGot = "https://androidapi220230605081325.azurewebsites.net/api/approval/GetIssueList";
    const jsonDataToPassInApi = {
        "FromDate": fromDate,
        "ToDate": toDate,
        "PlantName": "Grundfos",
        "OffsetRecords": "0",
        "NextRecords": "10"
    }

    function getAllTheData(dataGot) {
        setFilteredData(dataGot);
        setOriginalData(dataGot);
    }

    function savingFilteredData() {
        if ((openStatus || acknowledgeStatus || closedStatus) === false) {
            filterFunction(originalData);
        } else {
            filterFunction(filteredData);
        }
        onClose();
    }

    function updateFromDate(dateCame) {
        setFromDate(dateCame);
        setOpenStatus(false);
        setAcknowledgeStatus(false);
        setClosedStatus(false);
    }

    function updateToDate(dateCame) {
        setToDate(dateCame);
        setOpenStatus(false);
        setAcknowledgeStatus(false);
        setClosedStatus(false);
    }

    function setStatus(option) {
        let newData;
        if (option === 1) {
            setOpenStatus(openStatus ? false : true);
            setAcknowledgeStatus(false);
            setClosedStatus(false);
            newData = originalData.filter((eachData) => (eachData.status === "Open"));
        } else if (option === 2) {
            setAcknowledgeStatus(acknowledgeStatus ? false : true);
            setOpenStatus(false);
            setClosedStatus(false);
            newData = originalData.filter((eachData) => (eachData.status === "Acknowledged"));
        } else {
            setClosedStatus(closedStatus ? false : true);
            setOpenStatus(false);
            setAcknowledgeStatus(false);
            newData = originalData.filter((eachData) => (eachData.status === "Closed"));
        }
        setFilteredData(newData);
    }

    function resetFunction() {
        let currentDate = new Date();
        setToDate(new Date());
        setFromDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
        setPropValue(propValue + 1);
        setKey(prevKey => prevKey + 1);
        setOpenStatus(false);
        setAcknowledgeStatus(false);
        setClosedStatus(false);
    }

    useEffect(() => {
        APICall(apiGot, jsonDataToPassInApi, getAllTheData, 'getReport');
    }, [fromDate, toDate]);

    return (
        <Modal visible={isVisible} animationType="slide" transparent>
            <View style={styles.modalBackground}>
                <ScrollView contentContainerStyle={styles.modalContent}>
                    <View style={styles.filterHeader}>
                        <Text style={styles.filterHeading}>Filter</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Image source={require('../../../assets/icons/close-white.png')} style={styles.closeButtonIcon} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, padding: 20, gap: 5 }}>
                                <Text style={styles.filterProperties}>From Date: </Text>
                                <DatePickerComponent key={key} prop={propValue} initialDate={fromDate} updateFunction={updateFromDate} />
                            </View>
                            <View style={{ flex: 1, padding: 20, gap: 5 }}>
                                <Text style={styles.filterProperties}>To Date: </Text>
                                <DatePickerComponent key={key} prop={propValue} initialDate={toDate} updateFunction={updateToDate} />
                            </View>
                        </View>
                        <View style={{ padding: 20, gap: 10 }}>
                            <Text style={styles.filterProperties}>Status:</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 15 }}>
                                <TouchableOpacity style={openStatus ? styles.filterTextButtons2 : styles.filterTextButtons1} onPress={() => setStatus(1)}>
                                    <Text style={openStatus ? styles.optionButtonText2 : styles.optionButtonText1}>Open</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={acknowledgeStatus ? styles.filterTextButtons2 : styles.filterTextButtons1} onPress={() => setStatus(2)}>
                                    <Text style={acknowledgeStatus ? styles.optionButtonText2 : styles.optionButtonText1}>Acknowledged</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={closedStatus ? styles.filterTextButtons2 : styles.filterTextButtons1} onPress={() => setStatus(3)}>
                                    <Text style={closedStatus ? styles.optionButtonText2 : styles.optionButtonText1}>Closed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10, flexDirection: 'row', gap: 20 }}>
                        <TouchableOpacity style={styles.saveButton} onPress={resetFunction}>
                            <Text style={styles.buttonText}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={savingFilteredData}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
    },
    modalContent: {
        height: '45%',
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