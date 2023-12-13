import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
const dividorColor = "#103659";

export default EachReportMoreInfoPage = ({ route }) => {
    // console.log("Route - ", route);
    const dataGot = route.params.dataToSend;
    const [showTimingsDurations, setShowTimingsDurations] = useState(false);
    const [showOtherDetails, setShowOtherDetails] = useState(false);
    const mainFontColor = 'black';
    let statusColor = 'green';
    let backColor = 'green';

    function checkStatusColor() {
        if (dataGot.ended) {
            statusColor = 'green';
        } else {
            if (dataGot.acknowledged) {
                statusColor = 'yellow';
            } else {
                statusColor = 'red';
            }
        }
        return statusColor;
    }

    function checkBackColor() {
        if (dataGot.ended) {
            backColor = '#88AB8E';
        } else {
            if (dataGot.acknowledged) {
                backColor = '#F4F27E';
            } else {
                backColor = '#F78CA2';
            }
        }
        return backColor;
    }

    function dateFormatter(date) {
        const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = Number(date.slice(3, 5));
        const month = allMonths[Number(date.slice(0, 2)) - 1];
        const year = Number(date.slice(6, 10));
        return (day + " " + month + " " + year);
    }

    function deliverMessage(toSend) {
        let message;
        if (toSend) {
            message = toSend;
        } else if (statusColor === 'yellow') {
            message = "Issue is not ended yet!"
        } else {
            message = "Issue is not acknowledged yet!"
        }
        return <Text style={{ color: 'red', fontFamily: 'Poppins_LightItalic', fontSize: 11 }}>{message}</Text>
    }

    function openCollapse(option) {
        if (option === 1) {
            setShowOtherDetails(false);
            setShowTimingsDurations(showTimingsDurations ? false : true);
        } else if (option === 2) {
            setShowOtherDetails(showOtherDetails ? false : true);
            setShowTimingsDurations(false);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <LinearGradient colors={[checkBackColor(), 'white']} start={{ x: 0.2, y: 0.5 }} end={{ x: 1, y: 0 }} style={[styles.firstRowStyling, { backgroundColor: checkBackColor() }]}>
                    <View style={styles.firstColumnStyling}>
                        <View style={styles.issueHeader}>
                            <View>
                                <Image source={require('../../../assets/icons/tracking.png')} style={styles.backImage} />
                            </View>
                            <View style={{ gap: -2 }}>
                                <Text style={[styles.dataProperty,{color: mainFontColor}]}>Issue No.</Text>
                                <Text style={[styles.dataValue, {color:mainFontColor}]}>{dataGot.issueNo}</Text>
                            </View>
                        </View>
                        <View style={styles.firstHeadSecCol}>
                            <View style={[styles.plantTag, { backgroundColor: (checkStatusColor()) }]}>
                                <Text style={[styles.dataValue, { color: (statusColor === 'yellow') ? 'black' : 'white' }]}>{dataGot.status}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.dataProperty,{color: mainFontColor}]}>Issue:</Text>
                        <Text style={[styles.dataValue, { fontSize: 16, color: mainFontColor }]}>{dataGot.issueDetails}</Text>
                    </View>
                    <View style={styles.firstRowTable}>
                        <View style={[styles.eachTableSection, { borderColor: 'white', borderRightWidth: 0.2 }]}>
                            <Text style={[styles.dataProperty, { color: 'white' }]}>Line</Text>
                            <Text style={[styles.dataValue, { color: 'white' }]}>{dataGot.line}</Text>
                        </View>
                        <View style={styles.eachTableSection}>
                            <Text style={[styles.dataProperty, { color: 'white' }]}>Station</Text>
                            <Text style={[styles.dataValue, { color: 'white' }]}>{dataGot.station}</Text>
                        </View>
                    </View>
                    <View style={styles.secondRowTable}>
                        <View style={[styles.eachTableSection, { borderRightWidth: 0.2 }]}>
                            <Text style={styles.dataProperty}>Type</Text>
                            <Text style={[styles.someFonts]}>{dataGot.type}</Text>
                        </View>
                        <View style={styles.eachTableSection}>
                            <Text style={styles.dataProperty}>Priority</Text>
                            <Text style={[styles.someFonts]}>{dataGot.priority}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ gap: 10, marginTop: 40, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
                        <View>
                            <Text style={styles.dataProperty}>Problem:</Text>
                            <Text style={styles.dataValueNormal}>{dataGot.problemStatement}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Action Taken:</Text>
                            <Text style={styles.dataValueNormal}>{dataGot.reason ? dataGot.reason : deliverMessage()}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Corrective Action:</Text>
                            <Text style={styles.dataValueNormal}>{dataGot.correctiveAction ? dataGot.correctiveAction : deliverMessage("Not Available")}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.expandableField} activeOpacity={0.5} onPress={() => openCollapse(1)}>
                        <Text style={styles.someFonts}>Track Status</Text>
                        <Image source={require('../../../assets/icons/downArrow.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    {showTimingsDurations &&
                        <View style={styles.expandedContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderBottomWidth: 0.5, borderStyle: 'dashed', paddingVertical: 10, marginBottom: 10 }}>
                                <View style={styles.timingContainer}>
                                    <Image source={require('../../../assets/icons/start-button.png')} style={styles.allTimeIcon} />
                                    <Text style={styles.expandedContentRowHeader}>Started:</Text>
                                    <Text style={[styles.timingValues, { fontFamily: 'Poppins_MediumItalic' }]}>{dateFormatter(dataGot.started.slice(0, 10))}</Text>
                                    <Text style={styles.timingValues}>  {dataGot.started.slice(11, 16)}</Text>
                                    <Text style={[styles.timingValues, { fontFamily: 'Poppins_SemiBoldItalic' }]}>  ({dataGot.startedBy})</Text>
                                </View>
                                <Image source={require('../../../assets/icons/path.png')} style={styles.allTimeIcon} />
                                <View style={styles.timingContainer}>
                                    <Image source={require('../../../assets/icons/acknowledgement.png')} style={styles.allTimeIcon} />
                                    <Text style={styles.expandedContentRowHeader}>Ackowledged:</Text>
                                    {dataGot.acknowledged ?
                                        <View style={styles.timingContainer}>
                                            <Text style={[styles.timingValues, { fontFamily: 'Poppins_MediumItalic' }]}>{dateFormatter(dataGot.acknowledged.slice(0, 10))}</Text>
                                            <Text style={styles.timingValues}>{dataGot.acknowledged.slice(11, 16)}</Text>
                                            <Text style={[styles.timingValues, { fontFamily: 'Poppins_SemiBoldItalic' }]}>  ({dataGot.acknowledgedBy})</Text>
                                        </View> :
                                        deliverMessage("Not Acknowledged Yet!")
                                    }
                                </View>
                                <Image source={require('../../../assets/icons/path.png')} style={styles.allTimeIcon} />
                                <View style={styles.timingContainer}>
                                    <Image source={require('../../../assets/icons/end.png')} style={styles.allTimeIcon} />
                                    <Text style={styles.expandedContentRowHeader}>Ended:</Text>
                                    {dataGot.ended ?
                                        <View style={styles.timingContainer}>
                                            <Text style={[styles.timingValues, { fontFamily: 'Poppins_MediumItalic' }]}>{dateFormatter(dataGot.ended.slice(0, 10))}</Text>
                                            <Text style={styles.timingValues}>{dataGot.ended.slice(11, 16)}</Text>
                                            <Text style={[styles.timingValues, { fontFamily: 'Poppins_SemiBoldItalic' }]}> ({dataGot.endedBy})</Text>
                                        </View> :
                                        deliverMessage("Not Ended Yet!")
                                    }
                                </View>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Acknowledging Duration:</Text>
                                <Text>{dataGot.acknowledgeDuration_Mins}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Resolving Time Duration:</Text>
                                <Text>{dataGot.resolvingDuration_Mins}</Text>
                            </View>
                            <View style={styles.expandedRow}>
                                <Text style={styles.expandedContentRowHeader}>Downtime Duration:</Text>
                                <Text>{dataGot.downtime ? dataGot.downtime + " mins" : deliverMessage()}</Text>
                            </View>
                        </View>
                    }
                    <TouchableOpacity style={[styles.expandableField, { marginBottom: (showOtherDetails ? 5 : 80) }]} activeOpacity={0.5} onPress={() => openCollapse(2)}>
                        <Text style={styles.someFonts}>Other Details</Text>
                        <Image source={require('../../../assets/icons/downArrow.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    {showOtherDetails &&
                        <View style={{ gap: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 80 }}>
                            <View>
                                <Text style={styles.dataProperty}>Assigned To:</Text>
                                <Text style={styles.dataValueNormal}>{dataGot.assignedTo}</Text>
                            </View>
                            <View>
                                <Text style={styles.dataProperty}>Counter Measure:</Text>
                                <Text style={styles.dataValueNormal}>{dataGot.counterMeasure}</Text>
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
    firstRowStyling: {
        backgroundColor: '#DADDE2',
        padding: 20,
        paddingBottom: -40,
        borderColor: dividorColor,
        borderBottomWidth: 4
    },
    firstColumnStyling: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    issueHeader: {
        flex: 4,
        gap: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstRowTable: {
        flexDirection: 'row',
        backgroundColor: dividorColor,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        marginHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    eachTableSection: {
        flex: 1,
        alignItems: 'center'
    },
    secondRowTable: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        bottom: -20,
        borderWidth: 3,
        marginTop: -20,
        borderColor: dividorColor,
        zIndex: 2
    },
    dataValue: {
        fontSize: 14,
        fontFamily: 'Poppins',
    },
    dataValueNormal: {
        fontSize: 14,
        fontFamily: 'Poppins_Regular',
    },
    dataProperty: {
        // color: '#2289FF',
        color: 'black',
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    plantTag: {
        padding: 5,
        borderRadius: 10,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
    allTimeIcon: {
        height: 30,
        width: 30,
        marginBottom: 10
    },
    timingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    timingValues: {
        fontFamily: 'Poppins_LightItalic',
        fontSize: 11
    }
});