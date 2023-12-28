import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import SelectDropDownPage from '../../components/SelectDropDownPage';
import dataAcknowledgeIssue from '../../../assets/json/AcknowledgeIssue.json';
import DatePickerComponent from '../../components/DatePickerComponent';
import TimePicker from '../../components/TimePicker';

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
    const [selectedIssueNum,setSelectedIssueNum]=useState('')
    const [selectedIssue,setSelectedIssue] =useState(false)

    const [station, setStation] = useState(''); // State to hold the selected value

    // Function to update state when value changes
    const handleValueChange = (newValue) => {
        setStation(newValue);

    };
     // Function to update state when value changes
     const handleValueChangeProd = (newValue) => {
        setLine(newValue);

    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            CounterMeasure: '',
            DueDateOnly: '',
            DueTime: '',
            IssueNo: selectedIssueNum,

        },
    });

    //Submit Form Result Function
    function resultFormSubmission(message) {
        if (message === 'Success') {
            setDataInsertMessageDisplay(true);
            setSuccessDataInsert(true);
            console.log('Final Success');
        } else {
            setDataInsertMessageDisplay(true);
            setSuccessDataInsert(false);
            console.log('Final Failure');
        }
    }

    function toggleDataInsertMessage() {
        setDataInsertMessageDisplay(false);
        navigation.navigate('Main');
    }

    function whileClosingTheModal() {
        reset();
    }

    const onSubmit = async (data) => {
        console.log('Data Coming', data);

        let DueDate =
            data.DueDateOnly +
            ' ' +
            data.DueTime.slice(0, -2) +
            data.DueTime.slice(-2).toUpperCase();


        const apiGot =
            'https://androidapi220230605081325.azurewebsites.net/api/approval/AckIssue';



        delete data.startingDate;
        delete data.startingTime;


        data.DatetimeOfWork = DatetimeOfWork;
        data.ExpectedCompletionDate = ExpectedCompletionDate;

        console.log(DatetimeOfWork, ExpectedCompletionDate);
        // console.log('Hello');

        console.log('Data Formed', data);
        APICall(apiGot, data, resultFormSubmission, 'sendData');
        // resetHookFunc();
    };

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

    function selectedIssueNo(params) {
        console.log('Hi Params heelo :',params)
        setSelectedIssueNum(params.issueNo)
        setSelectedIssue(true)
    }

    useEffect(() => {
        APICall(issueAPI, jsonDataToPassInIssueAPI, issueAPIResult, 'getReport');
    }, [station]);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainContainer}>
            <Text style={{ fontSize: 20, fontFamily: 'Poppins', alignSelf: 'center', fontWeight: 900, top: 5 }}>Acknowledge Issue</Text>

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

                <LinearGradient colors={['#002149', '#5590D7']} start={{ x: 0.03, y: 0.5 }}
                    end={{ x: 0.92, y: 0.5 }} style={styles.issueListHeader}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFF', left: 13 }}>
                        Select an issue :
                    </Text>
                </LinearGradient>
                <View style={{
                    paddingHorizontal:5
                }} >
                    {console.log('Anna', issuesData)}
                    {issuesData.map((issue, index) => (
                        <TouchableOpacity  onPress={() => selectedIssueNo(issue)} style={{
                            backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 2, height: 45, justifyContent: 'center', marginVertical: 5,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 1,
                            shadowRadius: 100,
                            elevation:5,
                        } 
                        }>
                            <View key={index} style={styles.issueItem}>
                                <Text style={styles.issueTitle}>{issue.issueNo}</Text>
                                <Text style={styles.issueDescription}>{issue.issueDetails}</Text>
                              

                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </LinearGradient >


            {selectedIssue && (
                <View>
            <LinearGradient colors={['rgba(0, 133, 255, 0.50)', 'rgba(93, 158, 218, 0.50)']} style={styles.issuesContainer}>

                <LinearGradient colors={['#002149', '#5590D7']} start={{ x: 0.03, y: 0.5 }}
                    end={{ x: 0.92, y: 0.5 }} style={styles.issueListHeader}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFF', left: 13 }}>
                        Counter Measure
                    </Text>
                </LinearGradient>
                <View style={{ padding: 10 }} >


                    <Controller
                        control={control}
                        name='CounterMeasure'
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextInput
                                style={{
                                    fontFamily: 'OpenSans',
                                    textAlignVertical: 'top',
                                    backgroundColor: '#fff',
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
                        )}
                    />
                </View>
                  </LinearGradient >

            <LinearGradient colors={['rgba(0, 133, 255, 0.50)', 'rgba(93, 158, 218, 0.50)']} style={styles.issuesContainer}>

                <LinearGradient colors={['#002149', '#5590D7']} start={{ x: 0.03, y: 0.5 }}
                    end={{ x: 0.92, y: 0.5 }} style={styles.issueListHeader}>
                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFF', left: 13 }}>
                        Due Date
                    </Text>
                </LinearGradient>
                <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-around" }} >

                    <Controller
                        control={control}
                        name='startingDate'
                        rules={{ required: 'Enter starting date !' }}
                        render={({ field: { onChange, value } }) => (

                            <DatePickerComponent initialDate={fromDate} changeValue={onChange} />
                        )}
                    />


                    <Controller
                        control={control}
                        name='startingDate'
                        rules={{ required: 'Enter starting date !' }}
                        render={({ field: { onChange, value } }) => (
                            <TimePicker changeValue={onChange} />
                        )}
                    />

                </View>
            </LinearGradient>



            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={onSubmit}>
                <LinearGradient colors={['#489CFF', '#002D62']} style={styles.AcknowledgeButton}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Acknowledge Issue</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            )} 


        </View >
        </ScrollView>
    );
};
export default AcknowledgeIssue;

const styles = StyleSheet.create({
    scrollViewContent:{
        flex: 1,
        backgroundColor: 'rgba(207, 235, 255, 1)',
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
        alignItems:'center',
        gap:20
    },
    issueTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.8,
        paddingRight:10
    },
    issueDescription: {
        fontSize: 16,
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
