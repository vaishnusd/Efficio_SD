import { LinearGradient } from "expo-linear-gradient";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default EachReportMoreInfo = ({ isVisible, onClose, dataToSend }) => {
    return (
        <Modal visible={isVisible} transparent>
            <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
                <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                    <LinearGradient colors={['#489CFF', '#002D62']} style={styles.card}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                            <View style={{ flex: 4, gap: 10 }}>
                                <View>
                                    <Text style={styles.dataProperty}>Issue No.</Text>
                                    <Text style={[styles.dataValue]}>{dataToSend.issueNo}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dataProperty}>Issue:</Text>
                                    <Text style={[styles.dataValue, { fontSize: 15 }]}>{dataToSend.issueDetails}</Text>
                                </View>
                            </View>
                            <View style={styles.firstHeadSecCol}>
                                <View style={styles.plantTag}>
                                    <Text style={styles.dataValue}>{dataToSend.plantName}</Text>
                                </View>
                                <LinearGradient colors={['rgba(214, 214, 214, 0.27)', 'rgba(255, 255, 255, 0.26)']} style={styles.mainInfo}>
                                    <Text style={[styles.dataProperty, { alignSelf: 'center' }]}>Line:</Text>
                                    <Text style={[styles.dataValue, { alignSelf: 'center' }]}>{dataToSend.line}</Text>
                                    <Text style={[styles.dataProperty, { alignSelf: 'center' }]}>Station:</Text>
                                    <Text style={[styles.dataValue, { alignSelf: 'center' }]}>{dataToSend.station}</Text>
                                </LinearGradient>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Problem:</Text>
                            <Text style={styles.dataValue}>{dataToSend.problemStatement}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.rowData}>
                                <Text style={styles.rowHeads}>Started At:</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.started?.slice(0, 10)}</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.started?.slice(11,)}</Text>
                            </View>
                            <View style={styles.rowData}>
                                <Text style={styles.rowHeads}>Acknowledged At:</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.acknowledged?.slice(0, 10)}</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.ackowledged?.slice(11,)}</Text>
                            </View>
                            <View style={styles.rowData}>
                                <Text style={styles.rowHeads}>Ended At:</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.ended?.slice(0, 10)}</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.ended?.slice(11,)}</Text>
                            </View>
                        </View>
                        <View style={[styles.tableRow, { marginTop: -10 }]}>
                            <View style={styles.rowData}>
                                <Text style={styles.rowHeads}>Downtime:</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.downtime} mins</Text>
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
                                <Text style={styles.firstRowValue}>{dataToSend.startedBy}</Text>
                            </View>
                            <View style={styles.rowData}>
                                <Text style={styles.rowHeads}>Resolved By:</Text>
                                <Text style={styles.firstRowValue}>{dataToSend.ResolvedBy ? dataToSend.ResolvedBy : "Hello"}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Assigned To:</Text>
                            <Text style={styles.dataValue}>{dataToSend.assignedTo}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Counter Measure:</Text>
                            <Text style={styles.dataValue}>{dataToSend.counterMeasure}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Corrective Action:</Text>
                            <Text style={styles.dataValue}>{dataToSend.correctiveAction}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataProperty}>Action Taken:</Text>
                            <Text style={styles.dataValue}>{dataToSend.ActionTaken}</Text>
                        </View>

                    </LinearGradient>
                </TouchableOpacity>
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
        position: 'absolute',
        padding: 20,
        paddingVertical: 15,
        gap: 10,
        width: '90%',
        alignSelf: 'center',
        top: 50
    },
    dataProperty: {
        color: '#E5FF7C',
        fontSize: 9,
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
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
        width: '100%',
        flex: 1
    },
    modalContent: {
        width: '100%'
    }
});