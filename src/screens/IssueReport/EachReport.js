import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EachReportMoreInfo from "./EachReportMoreInfo";

export default EachReport = ({ dataToSend }) => {
    const [infoModalView, setInfoModalView] = useState(false);
    function toggleInfoModal() {
        setInfoModalView(infoModalView ? false : true);
    }

    return (
        <View>
            <TouchableOpacity style={styles.reportTableHeader} activeOpacity={0.6} onPress={toggleInfoModal}>
                <View style={{ flex: 2, paddingHorizontal: 2 }}>
                    <Text style={[styles.columnHeading, { flex: 1 }]}>{dataToSend.Issue_No}</Text>
                </View>
                <View style={{ flex: 5, borderLeftWidth: 0.2, borderColor: 'white', paddingHorizontal: 10 }}>
                    <Text style={[styles.columnHeading, { flex: 3 }]}>{dataToSend.Issue}</Text>
                </View>
                <View style={{ flex: 2, borderLeftWidth: 0.2, borderColor: 'white', paddingHorizontal: 10 }}>
                    <Text style={styles.columnHeading}>{dataToSend.Station} </Text>
                </View>
                <View style={{ flex: 3, borderLeftWidth: 0.2, borderColor: 'white', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Text style={styles.columnHeading}>{dataToSend.PlantName}</Text>
                    <TouchableOpacity style={styles.seeMoreButton}>
                        <Text style={styles.columnHeading}>See More</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <EachReportMoreInfo isVisible={infoModalView} onClose={toggleInfoModal} dataToSend={dataToSend} />
        </View>
    )
}

const styles = StyleSheet.create({
    reportTableHeader: {
        flexDirection: 'row',
        backgroundColor: '#489CFF',
        paddingHorizontal: 5,
        paddingVertical: 10,
        gap: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CFEBFF',
        marginTop: 4,
        borderRadius: 10,
        minHeight: 80
    },
    columnHeading: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center'
    },
    seeMoreButton: {
        backgroundColor: '#002D62',
        padding: 3,
        width: 75,
        borderRadius: 6
    }
});