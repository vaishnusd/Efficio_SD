import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import BottomNavigator from "../../navigation/BottomNavigator";
import { useState } from "react";

export default EachReportMoreInfoPage = ({ route }) => {
    console.log("Route - ", route)
    const dataGot = route.params.dataToSend;
    const [showTimingsDurations, setShowTimingsDurations] = useState(false);
    const [showPeoples, setShowPeoples] = useState(false);
    const [showOtherDetails, setShowOtherDetails] = useState(false);
    const dividorColor = "#103659";

    function openCollapse(option) {
        if (option === 1) {
            setShowOtherDetails(false);
            setShowPeoples(false);
            setShowTimingsDurations(showTimingsDurations ? false : true);
        } else if (option === 2) {
            setShowOtherDetails(false);
            setShowPeoples(showPeoples ? false : true);
            setShowTimingsDurations(false);
        } else {
            setShowOtherDetails(showOtherDetails ? false : true);
            setShowPeoples(false);
            setShowTimingsDurations(false);
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={{ backgroundColor: '#DADDE2', padding: 20, paddingBottom: -40, borderColor: dividorColor, borderBottomWidth: 4 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flex: 4, gap: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Image source={require('../../../assets/icons/tracking.png')} style={styles.backImage} />
                            </View>
                            <View style={{ gap: -2 }}>
                                <Text style={[styles.dataProperty, { color: 'black' }]}>Issue No.</Text>
                                <Text style={[styles.dataValue, { color: 'black' }]}>{dataGot.issueNo}</Text>
                            </View>
                        </View>
                        <View style={styles.firstHeadSecCol}>
                            <View style={styles.plantTag}>
                                <Text style={[styles.dataValue, { color: 'white' }]}>{dataGot.status}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.dataProperty, { color: 'black' }]}>Issue:</Text>
                        <Text style={[styles.dataValue, { color: 'black', fontSize: 16 }]}>{dataGot.issueDetails}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: dividorColor, alignItems: 'center', marginTop: 20, padding: 10, marginHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ flex: 1, borderRightWidth: 0.2, alignItems: 'center', borderColor: 'white' }}>
                            <Text style={[styles.dataProperty, { color: 'white' }]}>Line</Text>
                            <Text style={[styles.dataValue, { color: 'white' }]}>{dataGot.line}</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10, alignItems: 'center' }}>
                            <Text style={[styles.dataProperty, { color: 'white' }]}>Station</Text>
                            <Text style={[styles.dataValue, { color: 'white' }]}>{dataGot.station}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', padding: 10, borderRadius: 10, bottom: -20, borderWidth: 3, marginTop: -20, borderColor: dividorColor, zIndex: 2 }}>
                        <View style={{ flex: 1, borderRightWidth: 0.2, alignItems: 'center' }}>
                            <Text style={styles.dataProperty}>Type</Text>
                            <Text style={[styles.someFonts]}>{dataGot.type}</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10, alignItems: 'center' }}>
                            <Text style={styles.dataProperty}>Priority</Text>
                            <Text style={[styles.someFonts]}>{dataGot.priority}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ gap: 10, marginTop: 40, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
                        <View>
                            <Text style={styles.dataProperty}>Problem:</Text>
                            <Text style={styles.dataValue}>{dataGot.problemStatement}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Reason:</Text>
                            <Text style={styles.dataValue}>{dataGot.reason}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.expandableField} activeOpacity={0.5} onPress={() => openCollapse(1)}>
                        <Text style={styles.someFonts}>Timings and Durations</Text>
                        <Image source={require('../../../assets/icons/downArrow.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    {showTimingsDurations &&
                        <View style={styles.expandedContent}>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Started At:</Text>
                                <Text>{dataGot.started}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Ackowledged At:</Text>
                                <Text>{dataGot.ackowledged}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Ended At:</Text>
                                <Text>{dataGot.ended}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Downtime Duration:</Text>
                                <Text>{dataGot.downtime}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Acknowledging Duration:</Text>
                                <Text>{dataGot.acknowledgeDuration_Mins}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Resolving Time Duration:</Text>
                                <Text>{dataGot.resolvingDuration_Mins}</Text>
                            </View>
                        </View>
                    }
                    <TouchableOpacity style={styles.expandableField} activeOpacity={0.5} onPress={() => openCollapse(2)}>
                        <Text style={styles.someFonts}>Peoples Involved</Text>
                        <Image source={require('../../../assets/icons/downArrow.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    {showPeoples &&
                        <View style={styles.expandedContent}>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Started By:</Text>
                                <Text>{dataGot.startedBy}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Ackowledged By:</Text>
                                <Text>{dataGot.acknowledgedBy}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Ended By:</Text>
                                <Text>{dataGot.endedBy}</Text>
                            </View>
                        </View>
                    }
                    <TouchableOpacity style={[styles.expandableField, { marginBottom: (showOtherDetails ? 5 : 80) }]} activeOpacity={0.5} onPress={() => openCollapse(3)}>
                        <Text style={styles.someFonts}>Other Details</Text>
                        <Image source={require('../../../assets/icons/downArrow.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    {showOtherDetails &&
                        <View style={{ gap: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 80 }}>
                            <View>
                                <Text style={styles.dataProperty}>Assigned To:</Text>
                                <Text style={styles.dataValue}>{dataGot.assignedTo}</Text>
                            </View>
                            <View>
                                <Text style={styles.dataProperty}>Counter Measure:</Text>
                                <Text style={styles.dataValue}>{dataGot.counterMeasure}</Text>
                            </View>
                            <View>
                                <Text style={styles.dataProperty}>Corrective Action:</Text>
                                <Text style={styles.dataValue}>{dataGot.correctiveAction}</Text>
                            </View>
                            <View>
                                <Text style={styles.dataProperty}>Action Taken:</Text>
                                <Text style={styles.dataValue}>{dataGot.ActionTaken}</Text>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        flex: 1,
        gap: 10,
        backgroundColor: '#CFEBFF'
    },
    dataValue: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins_Regular',
    },
    dataProperty: {
        color: '#2289FF',
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    plantTag: {
        backgroundColor: '#C54545',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    mainInfo: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#2289FF',
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
        color: 'black',
        fontSize: 9,
        fontFamily: 'Poppins',
        textAlign: 'center',
        height: 30
    },
    firstRowValue: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Poppins',
        textAlign: 'center',
        height: 15
    },
    modalBackground: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: '100%',
        flex: 1
    },
    modalContent: {
        width: '100%'
    },
    expandableField: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    expandedRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expandedContent: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 5,
        borderRadius: 10
    },
    expandedContentRowHeader: {
        fontFamily: 'Poppins',
        fontSize: 11
    },
    backImage: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    },
    someFonts: {
        fontFamily: 'Poppins',
        fontSize: 14
    }
});