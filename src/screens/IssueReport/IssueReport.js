import { FlatList, SafeAreaView, Text, View } from "react-native"
import EachReport from "./EachReport";
const IssueReportData = require('../../../assets/json/IssueReports.json');

export default IssueReport = () => {
    return (
        <SafeAreaView>
            <Text>Issue Report</Text>
            <FlatList
                data={IssueReportData}
                renderItem={({item}) =>
                    <EachReport dataToSend={item} />
                }
            />
        </SafeAreaView>
    )
}