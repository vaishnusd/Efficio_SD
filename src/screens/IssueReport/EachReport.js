import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EachReportMoreInfo from "./EachReportMoreInfo";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

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
        <Animatable.View animation={'bounceInLeft'}>
            <TouchableOpacity style={styles.reportTableHeader} activeOpacity={0.6} onPress={goToPage}>
                <View style={{ flex: 2, paddingHorizontal: 2 }}>
                    <Text style={[styles.columnHeading, { flex: 1 }]}>{dataToSend.issueNo}</Text>
                </View>
                <View style={{ flex: 6, borderLeftWidth: 0.2, borderColor: 'black', paddingHorizontal: 10 }}>
                    <Text style={[styles.columnHeading, { flex: 3 }]}>{dataToSend.issueDetails}</Text>
                </View>
                <View style={{ flex: 2, borderLeftWidth: 0.2, borderColor: 'black', paddingHorizontal: 10 }}>
                    <Text style={[styles.columnHeading, { fontSize: 9 }]}>{dataToSend.line} </Text>
                    <Text style={[styles.columnHeading, { fontSize: 9 }]}>...</Text>
                    <Text style={[styles.columnHeading, { fontSize: 9 }]}>{dataToSend.station} </Text>
                </View>
                <View style={{ flex: 3, borderLeftWidth: 0.2, borderColor: 'black', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
                    <View style={[styles.seeMoreButton, { backgroundColor: (dataToSend.status === 'Closed') ? 'green' : (dataToSend.status === 'Open' ? '#FF6969' : '#FFF78A'), borderWidth: (dataToSend.status === 'Acknowledged') ? 1 : 0 }]}>
                        <Text style={[styles.columnHeading, { fontSize: 11, color: (dataToSend.status === 'Acknowledged') ? 'black' : 'white' }]}>{dataToSend.status === 'Acknowledged' ? 'Acknowle...' : dataToSend.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <EachReportMoreInfo isVisible={infoModalView} onClose={toggleInfoModal} dataToSend={dataToSend} />
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    reportTableHeader: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 0,
        paddingVertical: 10,
        marginTop: 2,
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