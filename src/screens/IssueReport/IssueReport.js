import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import EachReport from "./EachReport";
import EachReportMoreInfo from "./EachReportMoreInfo";
const IssueReportData = require('../../../assets/json/IssueReports.json');

export default IssueReport = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.reportTableHeader}>
                <Text style={[styles.columnHeading,{flex: 1}]}>Issue No.</Text>
                <Text style={[styles.columnHeading,{flex: 3}]}>Issue</Text>
                <Text style={[styles.columnHeading,{flex: 1}]}>Station</Text>
                <Text style={[styles.columnHeading,{flex: 2}]}>Plant</Text>
            </View>
            <FlatList
                data={IssueReportData}
                renderItem={({item}) =>
                    <EachReport dataToSend={item} />
                }
                contentContainerStyle = {styles.allData}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        backgroundColor: '#CFEBFF',
        flex: 1
    },
    allData : {
        paddingHorizontal: 2,
        gap: 4
    },
    reportTableHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#002D62',
        paddingHorizontal: 5,
        paddingVertical: 5,
        gap: 10
    },
    columnHeading: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    
});