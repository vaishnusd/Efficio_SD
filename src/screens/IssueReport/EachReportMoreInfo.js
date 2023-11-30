import { LinearGradient } from "expo-linear-gradient";
import * as Font from 'expo-font';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

export default EachReportMoreInfo = ({ isVisible, onClose, dataToSend }) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                Poppins_bold: require('../../../assets/fonts/Poppins/Poppins-Bold.ttf')
            });
            setFontLoaded(true);
        }
        loadFonts();
    }, []);


    return (
        <Modal visible={isVisible} transparent>
            <TouchableOpacity activeOpacity={1} style={styles.modalBackground} onPress={onClose}>
                <LinearGradient colors={['#489CFF', '#002D62']} style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                        <View style={{ flex: 4, gap: 10 }}>
                            <View>
                                <Text style={styles.dataProperty}>Issue No.</Text>
                                <Text style={[styles.dataValue, { fontSize: 24 }]}>{dataToSend.Issue_No}</Text>
                            </View>
                            <View>
                                <Text style={styles.dataProperty}>Issue:</Text>
                                <Text style={styles.dataValue}>{dataToSend.Issue}</Text>
                            </View>
                            <View>
                                <Text style={styles.dataProperty}>Problem:</Text>
                                <Text style={styles.dataValue}>{dataToSend.ProblemStatement}</Text>
                            </View>
                        </View>
                        <View style={styles.firstHeadSecCol}>
                            <View style={styles.plantTag}>
                                <Text style={styles.dataValue}>{dataToSend.PlantName}</Text>
                            </View>
                            <LinearGradient colors={['rgba(214, 214, 214, 0.27)', 'rgba(255, 255, 255, 0.26)']} style={styles.mainInfo}>
                                <Text style={styles.dataProperty}>Line:</Text>
                                <Text style={styles.dataValue}>{dataToSend.Line}</Text>
                                <Text style={styles.dataProperty}>Station:</Text>
                                <Text style={styles.dataValue}>{dataToSend.Station}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Started At:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.StartedDate}</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.StartedTime}</Text>
                        </View>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Acknowledged At:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.AckDate}</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.AckTime}</Text>
                        </View>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Ended At:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.EndedDate === "" ? dataToSend.StartedDate : dataToSend.EndedDate}</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.EndedTime}</Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow, { marginTop: -10 }]}>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Downtime:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.Downtime_min} mins</Text>
                        </View>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Resolving Duration:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.ResolvingDuration_Mins !== "" ? dataToSend.ResolvingDuration_Mins : "0"} mins </Text>
                        </View>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Acknowledge Duration:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.AcknowledgeDuration_Mins} mins</Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow, { marginTop: -10 }]}>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Started By:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.StartedBy}</Text>
                        </View>
                        <View style={styles.rowData}>
                            <Text style={styles.rowHeads}>Resolved By:</Text>
                            <Text style={styles.firstRowValue}>{dataToSend.ResolvedBy ? dataToSend.ResolvedBy : "Hello"}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.dataProperty}>Assigned To:</Text>
                        <Text style={styles.dataValue}>{dataToSend.AssignedTo}</Text>
                    </View>
                    <View>
                        <Text style={styles.dataProperty}>Counter Measure:</Text>
                        <Text style={styles.dataValue}>{dataToSend.CounterMeasure}</Text>
                    </View>
                    <View>
                        <Text style={styles.dataProperty}>Corrective Action:</Text>
                        <Text style={styles.dataValue}>{dataToSend.CorrectiveAction}</Text>
                    </View>
                    <View>
                        <Text style={styles.dataProperty}>Action Taken:</Text>
                        <Text style={styles.dataValue}>{dataToSend.ActionTaken}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    dataValue: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    card: {
        padding: 20,
        paddingVertical: 15,
        gap: 10,
        width: '90%'
    },
    dataProperty: {
        color: '#E5FF7C',
        fontSize: 9,
        fontFamily: 'Poppins_bold',
    },
    plantTag: {
        backgroundColor: '#FF7C7C',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    mainInfo: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    firstHeadSecCol: {
        flex: 3,
        justifyContent: 'flex-end',
        gap: 10,
        justifyContent: 'flex-start'
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.2,
        borderStyle: 'dashed',
        borderColor: 'white'
    },
    rowData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderLeftWidth: 0.2,
        borderStyle: 'dashed',
        borderColor: 'white'
    },
    rowHeads: {
        color: '#E5FF7C',
        fontSize: 9,
        fontFamily: 'Poppins_bold',
        textAlign: 'center',
        height: 30
    },
    firstRowValue: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Poppins',
        textAlign: 'center',
        height: 15
    },
    modalBackground: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});