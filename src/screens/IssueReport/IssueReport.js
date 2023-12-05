import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import APICall from "../../utils/APICall";
import EachReport from "./EachReport";
import BottomNavigator from "../../navigation/BottomNavigator";
import { LinearGradient } from "expo-linear-gradient";
// const issueReportData = require('../../../assets/json/IssueReports.json');

export default IssueReport = () => {
    const [issueReportData, setIssueReportData] = useState();
    const [loaded] = useFonts({
        'Poppins': require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });
    const apiGot = "https://androidapi220230605081325.azurewebsites.net/api/approval/GetIssueList";
    const jsonDataToPassInApi = {
        "FromDate": "2022-08-08",
        "ToDate": "2023-12-12",
        "PlantName": "Grundfos",
        "OffsetRecords": "0",
        "NextRecords": "10"
    }

    function resultReport(dataGot, action) {
        console.log("Hello Data: ", dataGot, action);
        setIssueReportData(dataGot);
    }

    useEffect(() => {
        console.log(apiGot, jsonDataToPassInApi, resultReport, 'getReport');
        APICall(apiGot, jsonDataToPassInApi, resultReport, 'getReport');
    }, []);

    return (
        <SafeAreaView style={styles.container} >
                <LinearGradient colors={['#4C6078', '#001935']} style={styles.reportTableHeader}>
                    <Text style={[styles.columnHeading, { flex: 2 }]}>Issue No.</Text>
                    <Text style={[styles.columnHeading, { flex: 5 }]}>Issue</Text>
                    <Text style={[styles.columnHeading, { flex: 3 }]}>Line & Station</Text>
                    <Text style={[styles.columnHeading, { flex: 3 }]}>Plant</Text>
                </LinearGradient>
                <FlatList
                    data={issueReportData}
                    renderItem={({ item }) =>
                        <EachReport dataToSend={item} />
                    }
                    contentContainerStyle={styles.allData}
                />
                <BottomNavigator />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CFEBFF',
        flex: 1
    },
    allData: {
        paddingHorizontal: 2,
    },
    reportTableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#002D62',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    columnHeading: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },

});