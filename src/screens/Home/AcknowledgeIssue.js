import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import SelectDropDownPage from '../../components/SelectDropDownPage';
import dataAcknowledgeIssue from '../../../assets/json/AcknowledgeIssue.json';
import DatePickerComponent from '../../components/DatePickerComponent';

const AcknowledgeIssue = () => {
    const [fromDate, setFromDate] = useState(new Date());
    console.log(fromDate);
    const [issuesData, setIssuesData] = useState([]);

    const [selectProductionLineOptions, setSelectProductionLineOptions] =
        useState('');
    console.log(selectProductionLineOptions);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [prodLineAPIError, setProdLineAPIError] = useState(false);
    const [stationDataOptions, setStationDataOptions] = useState('');
    const [stationApiError, setStationAPIError] = useState(false);

    const [issueDataApiError, setIssueDataAPIError] = useState(false);

    const [refreshing, setRefreshing] = useState(false);

    const [line, setLine] = useState(''); // State to hold the selected value

    // Function to update state when value changes
    const handleValueChangeProd = (newValue) => {
        setLine(newValue);

    };


    const [station, setStation] = useState(''); // State to hold the selected value

    // Function to update state when value changes
    const handleValueChange = (newValue) => {
        setStation(newValue);

    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            ProductionLine: '',
            Station: '',
            Category: '',
            Issue: '',
            Priority: '',
            Description: '',
            RaisedBy: '',
            AssignedTo: '',
        },
    });

    const prodLineAPI =
        'https://androidapi220230605081325.azurewebsites.net/api/approval/OpenIssueLines';
    const jsonDataToPassInprodLineAPI = {
        PlantName: 'Soft Designers1',
        LineName: '',
        StnName: '',
        StatusRequired: 'Open',
    };

    function prodResult(dataGot, apiError) {
        if (apiError) {
            setIsLoading(false);
            setProdLineAPIError(true);
            // setFirstDropdownOptions('')
        } else {
            if (dataGot) {
                console.log('Hello', dataGot);
                setSelectProductionLineOptions(dataGot);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        APICall(prodLineAPI, jsonDataToPassInprodLineAPI, prodResult, 'getReport');
    }, []);

    const stationAPI =
        'https://androidapi220230605081325.azurewebsites.net/api/approval/OpenIssueStn';
    const jsonDataToPassInStationAPI = {
        PlantName: 'Soft Designers1',
        LineName: line,
        StnName: '',
        StatusRequired: 'Open',
    };

    function stationAPIResult(dataGot, apiError) {
        if (apiError) {
            setIsLoading(false);
            setStationAPIError(true);
            // setFirstDropdownOptions('')
        } else {
            if (dataGot) {
                console.log('Hello', dataGot);
                setStationDataOptions(dataGot);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        APICall(
            stationAPI,
            jsonDataToPassInStationAPI,
            stationAPIResult,
            'getReport'
        );
    }, [line]);

    const issueAPI =
        'https://androidapi220230605081325.azurewebsites.net/api/approval/OpenIssueNo';
    const jsonDataToPassInIssueAPI = {
        PlantName: 'Soft Designers1',
        LineName: line,
        StnName: station,
        StatusRequired: 'Open',
    };

    function issueAPIResult(dataGot, apiError) {
        if (apiError) {
            setIsLoading(false);
            setIssueDataAPIError(true);
            // setFirstDropdownOptions('')
        } else {
            if (dataGot) {
                console.log('Hello', dataGot);
                setIssuesData(dataGot);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        APICall(issueAPI, jsonDataToPassInIssueAPI, issueAPIResult, 'getReport');
    }, [station]);

    return (
        <View style={styles.mainContainer}>
            <Text style={{ fontSize: 20, fontFamily: 'Poppins', alignSelf: 'center',fontWeight:900,top:5 }}>Acknowledge Issue</Text>

            <LinearGradient colors={['rgba(0, 133, 255, 0.50)', 'rgba(93, 158, 218, 0.50)']} style={styles.dropDownComponent}>


                <SelectDropDownPage
                    data={selectProductionLineOptions}
                    name={'Select Production Line'}
                    changeValue={(newValue) => {
                        // This updates the form control's value
                        handleValueChangeProd(newValue); // This updates your state
                    }} />

                <SelectDropDownPage
                    data={stationDataOptions}
                    name={'Select Station'}
                    changeValue={(newValue) => {
                        handleValueChange(newValue);
                    }}
                />
            </LinearGradient>

            <LinearGradient colors={['rgba(0, 133, 255, 0.50)', 'rgba(93, 158, 218, 0.50)']} style={styles.issuesContainer}>

                <LinearGradient colors={['#004799', '#419AFF']} style={styles.issueListHeader}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFF', left: 13 }}>
                        Issues List
                    </Text>
                </LinearGradient>
                <View style={{ padding: 10, flexDirection: "coloumn", justifyContent: "space-around" }} >
                    {console.log('Anna', issuesData)}
                    {issuesData.map((issue, index) => (
                        <TouchableOpacity style={{ backgroundColor: 'rgba(255, 254, 254, 0.70)', paddingHorizontal: 15, borderRadius: 5, height: 30, justifyContent: 'center', marginVertical: 5 }}>
                            <View key={index} style={styles.issueItem}>
                                <Text style={styles.issueTitle}>{issue.issueNo}</Text>
                                <Text style={styles.issueDescription}>{issue.issueDetails}</Text>
                                {/* Add more information from the issue object as needed */}

                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </LinearGradient>



            <View style={styles.issuesContainer}>
                <LinearGradient colors={['#004799', '#419AFF']} style={styles.issueListHeader}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFF', left: 13 }}>
                        Counter Measure
                    </Text>
                </LinearGradient>
                <View style={{ padding: 10 }} >
                    <TextInput
                        style={{
                            // color: 'white',s
                            fontFamily: 'OpenSans',
                            textAlignVertical: 'top',
                            // marginVertical: 10,

                            backgroundColor: '#fff',

                            // borderRadius: 5,
                            padding: 10,
                            borderRadius: 5,
                        }}
                        placeholder='Please describe it in brief...'
                        multiline
                        placeholderTextColor={'grey'}
                        numberOfLines={5}
                    // onChangeText={(text, index) => {
                    // 	let newComment = (comment[index] = text);
                    // 	setComment(newComment);
                    // }}
                    />
                </View>




            </View>




            <LinearGradient colors={['rgba(0, 133, 255, 0.50)', 'rgba(93, 158, 218, 0.50)']} style={styles.issuesContainer}>

                <LinearGradient colors={['#004799', '#419AFF']} style={styles.issueListHeader}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFF', left: 13 }}>
                        Due Date
                    </Text>
                </LinearGradient>
                <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-around" }} >
                    <DatePickerComponent initialDate={fromDate} />
                    <DatePickerComponent initialDate={fromDate} />
                </View>
            </LinearGradient>



            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                <LinearGradient colors={['#489CFF', '#002D62']} style={styles.AcknowledgeButton}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Acknowledge Issue</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>


        </View>
    );
};
export default AcknowledgeIssue;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(207, 235, 255, 1)',
    },
    mainComponent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        margin: 15,
        padding: 15,
        gap: 20,
        flex: 1,
        borderRadius: 5,
    },
    dropDownComponent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        margin: 15,
        padding: 15,
        borderRadius: 5,
        gap: 9,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.70)',
    },
    IssueButton: {
        height: 40,
        width: 180,
        top: 20,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 70, 150, 1)',
        borderRadius: 5,
        alignSelf: 'center'
    },
    issuesContainer: {

        margin: 15,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 5,
    },
    issueListHeader: {
        flexDirection: 'row',
        height: 41,
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
    },
    issueItem: {
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    issueTitle: {

        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
    issueDescription: {
        fontSize: 14,

    },
    AcknowledgeButton: {
        top: 20,
        padding: 10,
        borderRadius: 10,
        width: 180,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
