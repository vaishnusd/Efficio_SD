import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EachReportMoreInfo from "./EachReportMoreInfo";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default EachReport = ({ dataToSend }) => {
    const [infoModalView, setInfoModalView] = useState(false);
    const navigation = useNavigation();
    const [loaded] = useFonts({
        'Poppins-Regular': require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    function toggleInfoModal() {
        setInfoModalView(infoModalView ? false : true);
    }

    function goToPage() {
        navigation.navigate("EachReportMoreInfo", { dataToSend });
    }

    return (
        <View>
            <TouchableOpacity style={styles.reportTableHeader} activeOpacity={0.6} onPress={goToPage}>
                <View style={{ flex: 2, paddingHorizontal: 2 }}>
                    <Text style={[styles.columnHeading, { flex: 1 }]}>{dataToSend.issueNo}</Text>
                </View>
                <View style={{ flex: 5, borderLeftWidth: 0.2, borderColor: 'black', paddingHorizontal: 10 }}>
                    <Text style={[styles.columnHeading, { flex: 3 }]}>{dataToSend.issueDetails}</Text>
                </View>
                <View style={{ flex: 2, borderLeftWidth: 0.2, borderColor: 'black', paddingHorizontal: 10 }}>
                    <Text style={[styles.columnHeading, { fontSize: 9 }]}>{dataToSend.line} </Text>
                    <Text style={[styles.columnHeading, { fontSize: 9 }]}>...</Text>
                    <Text style={[styles.columnHeading, { fontSize: 9 }]}>{dataToSend.station} </Text>
                </View>
                <View style={{ flex: 3, borderLeftWidth: 0.2, borderColor: 'black', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
                    {dataToSend.status !== 'Closed' &&
                        <Text style={styles.columnHeading}>{dataToSend.priority}</Text>
                    }
                    <TouchableOpacity style={[styles.seeMoreButton, { backgroundColor: (dataToSend.status === 'Closed') ? 'green' : 'yellow' }]}>
                        <Text style={[styles.columnHeading, { fontSize: 11, color: (dataToSend.status === 'Closed') ? 'white' : 'black' }]}>{dataToSend.status==='Acknowledged'?'Acknowle...' : dataToSend.status}</Text>
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
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 10,
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#CFEBFF',
        marginTop: 2,
        // borderRadius: 10,
        minHeight: 80
    },
    columnHeading: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black',
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