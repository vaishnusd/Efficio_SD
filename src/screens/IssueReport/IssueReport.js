import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useCallback, useEffect, useRef, useState } from "react";
import APICall from "../../utils/APICall";
import EachReport from "./EachReport";
import { LinearGradient } from "expo-linear-gradient";
import IssueReportFilter from "./IssueReportFilter";
import * as Animatable from 'react-native-animatable';

export default IssueReport = () => {
    //All Data States
    const [issueReportData, setIssueReportData] = useState();
    const [filteredData, setFilteredData] = useState();
    const [status, setStatus] = useState("None");

    //Report Essentials
    const [refreshing, setRefreshing] = useState(false);
    const [firstData, setFirstData] = useState(0);
    const [nextRecords, setNextRecords] = useState(10);
    const [totalRecords, setTotalRecords] = useState();
    const [loader, setLoader] = useState(true);
    const [errorGot, setErrorGot] = useState(false);
    const [noData, setNoData] = useState(false);
    const flatListRef = useRef(null);

    //Filter Related
    const [filterView, setFilterView] = useState(false);
    const [toDate, setToDate] = useState(new Date());
    const [fromDate, setFromDate] = useState(new Date(toDate.getTime() - 7 * 24 * 60 * 60 * 1000));
    const [filtertoDate, setFilterToDate] = useState(new Date());
    const [filterfromDate, setFilterFromDate] = useState(new Date(toDate.getTime() - 7 * 24 * 60 * 60 * 1000));

    // Issue Categories
    const [openStatus, setOpenStatus] = useState(false);
    const [acknowledgeStatus, setAcknowledgeStatus] = useState(false);
    const [closedStatus, setClosedStatus] = useState(false);

    //API Details
    const apiGot = "https://androidapi220230605081325.azurewebsites.net/api/approval/GetIssueList";
    let jsonDataToPassInApi = {
        "FromDate": fromDate,
        "ToDate": toDate,
        "PlantName": "Grundfos",
        "OffsetRecords": '0',
        "NextRecords": "10000"
    }

    //Runs the API Everytime fromDate or toDate or first Data details changes
    useEffect(() => {
        console.log("API Runs...", "From API Dates", fromDate, toDate);
        APICall(apiGot, jsonDataToPassInApi, resultReport, 'getReport');
    }, [fromDate, toDate, status]);


    // Refresh and Runs the API
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    //Get the details from API Call
    function resultReport(dataGot, anyError) {
        if (anyError) {
            setErrorGot(true);
            setLoader(false);
            setNoData(false);
        } else {
            if (dataGot.length) {
                if (status !== "None") {
                    dataGot = dataGot.filter((eachData) => (eachData.status === status));
                }
                setIssueReportData(dataGot);
                setFilteredData(dataGot.slice(firstData, nextRecords));
                setTotalRecords(dataGot.length);
                setLoader(false);
                setErrorGot(false);
                setNoData(dataGot.length ? false : true);
            } else {
                setLoader(false);
                setNoData(true);
                setErrorGot(false);
            }
        }
    }

    //Scroll to Top
    const scrollToTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    };

    // Checking Categories of Issues
    function setStatusFunction(option) {
        if (option === 1) {
            console.log("Option 1 selected inside Filter");
            setOpenStatus(openStatus ? false : true);
            setAcknowledgeStatus(false);
            setClosedStatus(false);
            setStatus(!openStatus ? 'Open' : 'None');
        } else if (option === 2) {
            console.log("Option 2 selected inside Filter");
            setAcknowledgeStatus(acknowledgeStatus ? false : true);
            setOpenStatus(false);
            setClosedStatus(false);
            setStatus(!acknowledgeStatus ? 'Acknowledged' : 'None');
        } else {
            console.log("Option 3 selected inside Filter");
            setClosedStatus(closedStatus ? false : true);
            setOpenStatus(false);
            setAcknowledgeStatus(false);
            setStatus(!closedStatus ? 'Closed' : 'None');
        }
        setFirstData(0);
        setNextRecords(10);
        setLoader(true);
    }

    //Searching Functionality
    function searchFilter(value) {
        if (value === "") {
            setFilteredData(issueReportData.slice(firstData, nextRecords));
        } else {
            let newData = issueReportData.filter((eachData) => (eachData.issueDetails.includes(value) || eachData.issueNo.includes(value)));
            setFilteredData(newData);
        }
    }

    //Open or Close Date Filter
    function toggleFilterModal() {
        setFilterView(filterView ? false : true);
    }

    //Get the Filtered Data
    // function filterFunction(filtered) {
    //     setTempData(filtered);
    // }

    //Updating the Filter From Date
    function updateFromDate(dateCame) {
        setFilterFromDate(dateCame);
    }

    //Updating the Filter To Date
    function updateToDate(dateCame) {
        setFilterToDate(dateCame);
    }

    //Move to Different Pages
    function goToPage(option) {
        let newfirstData, newNextRecords;
        if (option === "Next") {
            newfirstData = firstData + 10;
            newNextRecords = nextRecords + 10;
        } else if (option === "Prev") {
            newfirstData = firstData - 10;
            newNextRecords = nextRecords - 10;
        } else {
            newfirstData = 0;
            newNextRecords = 10;
        }
        setFirstData(newfirstData);
        setNextRecords(newNextRecords);
        setFilteredData(issueReportData.slice(newfirstData, newNextRecords));
        scrollToTop();
    }

    //Saving the Filtered Data coming from Date Filter
    function savingFilteredData(value) {
        setFromDate(filterfromDate);
        setToDate(filtertoDate);
        setFirstData(0);
        setNextRecords(10);
        setFilterView(false);
        setLoader(true);
    }

    //Reset for Filter
    function resetFunction() {
        console.log("Reset Button Triggered Inside Report", fromDate, toDate);
        let currentDate = new Date();
        setFilterToDate(new Date());
        setFilterFromDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
        setToDate(new Date());
        setFromDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
    }

    return (
        <SafeAreaView style={styles.container} >
            <Animatable.View style={styles.categoryContainer} animation={'slideInUp'}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 15, backgroundColor: '#001935', width: 300, paddingVertical: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <TouchableOpacity style={openStatus ? styles.filterTextButtons2 : styles.filterTextButtons1} onPress={() => setStatusFunction(1)}>
                        <Text style={openStatus ? styles.optionButtonText2 : styles.optionButtonText1}>Open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={acknowledgeStatus ? styles.filterTextButtons2 : styles.filterTextButtons1} onPress={() => setStatusFunction(2)}>
                        <Text style={acknowledgeStatus ? styles.optionButtonText2 : styles.optionButtonText1}>Acknowledged</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={closedStatus ? styles.filterTextButtons2 : styles.filterTextButtons1} onPress={() => setStatusFunction(3)}>
                        <Text style={closedStatus ? styles.optionButtonText2 : styles.optionButtonText1}>Closed</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <Animatable.View animation={'slideInDown'}>
                <LinearGradient colors={['#001935','#4C6078']} >
                    <View style={styles.filterHeader}>
                        <View style={styles.textInputStyle}>
                            <View style={{ flex: 1, padding: 7, justifyContent: 'center' }}>
                                <Image source={require('../../../assets/icons/searchIcon.png')} style={{ width: 20, height: 20 }} />
                            </View>
                            <TextInput
                                placeholder="Search..."
                                style={{ flex: 10, padding: 5 }}
                                onChangeText={(value) => searchFilter(value)}
                            />
                        </View>
                        <TouchableOpacity style={{ flex: 2, borderRadius: 10 }} onPress={toggleFilterModal}>
                            <Image source={require('../../../assets/icons/calendar-white.png')} style={styles.filterIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.reportTableHeader}>
                        <Text style={[styles.columnHeading, { flex: 2 }]}>Issue No.</Text>
                        <Text style={[styles.columnHeading, { flex: 5 }]}>Issue</Text>
                        <Text style={[styles.columnHeading, { flex: 3 }]}>Line & Station</Text>
                        <Text style={[styles.columnHeading, { flex: 3 }]}>Status</Text>
                    </View>
                </LinearGradient>
            </Animatable.View>
            {loader ?
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size={"large"} color={"#4C6078"} />
                </View> :
                errorGot ?
                    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', gap: 10 }}>
                        <Image source={require('../../../assets/icons/internalServer.png')} style={styles.messageIcon} />
                        <Text style={styles.messageTextGiven}> Internal Server Error!! </Text>
                    </View> :
                    noData ?
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', gap: 10 }}>
                            <Image source={require('../../../assets/icons/noData.png')} style={styles.messageIcon} />
                            <Text style={styles.messageTextGiven}> No Data Available!! </Text>
                        </View> :
                        <FlatList
                            data={filteredData}
                            ref={flatListRef}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    colors={['red', 'blue', 'green']}
                                    style={{ backgroundColor: 'transparent', shadowOpacity: 0, shadowOffset: { height: 0 }, elevation: 0 }}
                                    progressViewOffset={0}
                                    progressBackgroundColor={'transparent'}
                                    size={'large'} />
                            }
                            renderItem={({ item }) =>
                                <EachReport dataToSend={item} />
                            }
                            contentContainerStyle={styles.allData}
                            ListFooterComponent={
                                <View>
                                    {(nextRecords >= totalRecords) &&
                                        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 10}}>
                                            <Text style={{fontFamily: 'Poppins_Regular', fontSize: 12, color: 'gray'}}>- - -    No more data to show    - - -</Text>
                                        </View>
                                    }
                                    <View style={styles.pageButtonContainer}>
                                        {firstData ?
                                            <TouchableOpacity style={styles.nextPrevButton} onPress={() => goToPage("Prev")}>
                                                <Image source={require('../../../assets/icons/left-arrow.png')} style={styles.nextPrevbuttonIcons} />
                                                <Text style={styles.nextPrevButtonText}>Previous</Text>
                                            </TouchableOpacity> :
                                            <View>
                                            </View>
                                        }
                                        {firstData ?
                                            <TouchableOpacity style={styles.nextPrevButton} onPress={() => goToPage("First")}>
                                                <Text style={styles.nextPrevButtonText}>First Page</Text>
                                            </TouchableOpacity> :
                                            <View>
                                            </View>
                                        }
                                        {console.log(nextRecords, totalRecords)}
                                        {nextRecords < totalRecords ?
                                            <TouchableOpacity style={styles.nextPrevButton} onPress={() => goToPage("Next")}>
                                                <Text style={styles.nextPrevButtonText}>Next</Text>
                                                <Image source={require('../../../assets/icons/right-arrow.png')} style={styles.nextPrevbuttonIcons} />
                                            </TouchableOpacity> :
                                            <View>
                                            </View>
                                        }
                                    </View>
                                </View>
                            }
                        />
            }
            <IssueReportFilter
                isVisible={filterView}
                onClose={toggleFilterModal}
                dateDetails={
                    {
                        fromDate: fromDate,
                        toDate: toDate,
                        updateFromDate: updateFromDate,
                        updateToDate: updateToDate
                    }
                }
                functionsPassed={
                    {
                        savingFilteredData: savingFilteredData,
                        resetFunction: resetFunction,
                    }
                }
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CFEBFF',
        flex: 1
    },
    categoryContainer: {
        paddingHorizontal: 20,
        paddingBottom: 7,
        gap: 10,
        position: 'absolute',
        alignSelf: 'center',
        bottom: -10,
        zIndex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    allData: {
        paddingHorizontal: 2,
        paddingBottom: 62
    },
    reportTableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    },
    columnHeading: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    filterIcon: {
        width: 25,
        height: 25
    },
    filterHeader: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 0,
        borderColor: 'white',
        backgroundColor: '#001935'
    },
    textInputStyle: {
        borderWidth: 0.5,
        borderRadius: 5,
        flex: 22,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 5
    },
    optionButtonText1: {
        fontFamily: 'Poppins_Regular',
        fontSize: 14,
        color: '#4C6078'
    },
    optionButtonText2: {
        fontFamily: 'Poppins_Regular',
        fontSize: 14,
        color: 'white'
    },
    filterTextButtons1: {
        borderWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10,
        borderColor: '#4C6078',
        backgroundColor: 'white'
    },
    filterTextButtons2: {
        alignSelf: 'center',
        backgroundColor: "#4C6078",
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10
    },
    messageIcon: {
        width: 100,
        height: 100
    },
    messageTextGiven: {
        fontSize: 25,
        fontFamily: 'Poppins_Regular'
    },
    nextPrevButton: {
        backgroundColor: 'white',
        borderColor: '#4C6078',
        padding: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        left: -1
    },
    nextPrevButtonText: {
        fontSize: 12,
        color: '#4C6078',
        fontFamily: 'Poppins_Regular',
        top: 1,
    },
    nextPrevbuttonIcons: {
        width: 10,
        height: 10
    },
    pageButtonContainer: {
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // gap: 20,
        // backgroundColor: 'yellow'
    }
});