import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import APICall from "../../utils/APICall";
import EachReport from "./EachReport";
import { LinearGradient } from "expo-linear-gradient";
import IssueReportFilter from "./IssueReportFilter";

export default IssueReport = () => {
    const [issueReportData, setIssueReportData] = useState();
    const [filteredData, setFilteredData] = useState();
    const [loader, setLoader] = useState(true);
    const [filterView, setFilterView] = useState(false);

    const toDate = new Date();
    const fromDate = new Date(toDate.getTime() - 7 * 24 * 60 * 60 * 1000);

    function filterFunction(filtered) {
        setFilteredData(filtered);
    }

    const [loaded] = useFonts({
        'Poppins': require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    const apiGot = "https://androidapi220230605081325.azurewebsites.net/api/approval/GetIssueList";
    const jsonDataToPassInApi = {
        "FromDate": fromDate,
        "ToDate": toDate,
        "PlantName": "Grundfos",
        "OffsetRecords": "0",
        "NextRecords": "10"
    }

    function resultReport(dataGot, action) {
        console.log("Hello Data: ", dataGot, action);
        setIssueReportData(dataGot);
        setLoader(false);
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
                <Text style={[styles.columnHeading, { flex: 3 }]}>Status</Text>
            </LinearGradient>
            {loader ?
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size={"large"} />
                </View> :
                <FlatList
                    data={filteredData}
                    renderItem={({ item }) =>
                        <EachReport dataToSend={item} />
                    }
                    contentContainerStyle={styles.allData}
                />
            }
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
        paddingBottom: 62
    },
    reportTableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#002D62'
    },
    columnHeading: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },

});
