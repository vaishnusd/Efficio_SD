import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import SelectDropDownPage from '../../components/SelectDropDownPage';
import dataAcknowledgeIssue from '../../../assets/json/AcknowledgeIssue.json'
import DatePickerComponent from '../../components/DatePickerComponent';


const AcknowledgeIssue = () => {
    const [fromDate, setFromDate] = useState(new Date());
    console.log(fromDate)

    const [selectProductionLineOptions, setSelectProductionLineOptions] = useState('');
    console.log(selectProductionLineOptions)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [prodLineAPIError, setProdLineAPIError] = useState(false);
    const [stationDataOptions, setStationDataOptions] = useState('')
    const [stationApiError, setStationAPIError] = useState(false);

    const [issueData, setIssueData] = useState(false);
    const [issueDataApiError, setIssueDataAPIError] = useState(false)


    const [refreshing, setRefreshing] = useState(false);

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
            AssignedTo: ''
        }
    })

    const prodLineAPI =
        'https://androidapi220230605081325.azurewebsites.net/api/approval/OpenIssueLines';
    const jsonDataToPassInprodLineAPI = {
        PlantName: "Soft Designers1",
        LineName: "",
        StnName: "",
        StatusRequired: "Open"
    };

    function prodResult(dataGot, apiError) {
        if (apiError) {
            setIsLoading(false);
            setProdLineAPIError(true);
            // setFirstDropdownOptions('')
        } else {
            if (dataGot) {
                console.log('Hello', dataGot)
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
        PlantName: "Soft Designers1",
        LineName: "Line A",
        StnName: "",
        StatusRequired: "Open"
    };

    function stationAPIResult(dataGot, apiError) {
        if (apiError) {
            setIsLoading(false);
            setStationAPIError(true);
            // setFirstDropdownOptions('')
        } else {
            if (dataGot) {
                console.log('Hello', dataGot)
                setStationDataOptions(dataGot);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        APICall(stationAPI, jsonDataToPassInStationAPI, stationAPIResult, 'getReport');
    }, []);

    const issueAPI =
        'https://androidapi220230605081325.azurewebsites.net/api/approval/OpenIssueLines';
    const jsonDataToPassInIssueAPI = {
        PlantName: "Soft Designers1",
        LineName: "",
        StnName: "",
        StatusRequired: "Open"
    };

    function issueAPIResult(dataGot, apiError) {
        if (apiError) {
            setIsLoading(false);
            setIssueDataAPIError(true);
            // setFirstDropdownOptions('')
        } else {
            if (dataGot) {
                console.log('Hello', dataGot)
                setIssueData(dataGot);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        }
    }


    useEffect(() => {
        APICall(issueAPI, jsonDataToPassInIssueAPI, issueAPIResult, 'getReport');
    }, []);



    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainHeaderText}>Acknowledge Issue</Text>
            </View>
            <View style={styles.mainComponent}>
                <View>
                    <Controller
                        control={control}
                        name='selectProductionLine'
                        rules={{ required: 'Please select your production line !' }}
                        render={({ field: { onChange, value } }) => (
                            <SelectDropDownPage
                                data={selectProductionLineOptions}
                                name={'Select Production Line'}
                                changeValue={onChange}
                            />
                        )}
                    />
                    {errors.Department && (
                        <Text style={{ color: 'red' }}>{errors.Department.message}</Text>
                    )}
                </View>

                <View>
                    <Controller
                        control={control}
                        name='selectStation'
                        rules={{ required: 'Please select Station !' }}
                        render={({ field: { onChange, value } }) => (
                            <SelectDropDownPage
                                data={stationDataOptions}
                                name={'Select Station'}
                                changeValue={onChange}
                            />
                        )}
                    />
                    {errors.Department && (
                        <Text style={{ color: 'red' }}>{errors.Department.message}</Text>
                    )}
                </View>

                <View>
                    <Controller
                        control={control}
                        name='counterMeasure'
                        rules={{ required: 'Please enter the Counter Measure !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Counter Measure<Text style={{ color: 'red' }}>*</Text>
                                </Text>
                                <CustomInput
                                    name='BriefJobDescription'
                                    changeValue={onChange}
                                />
                            </View>


                        )}
                    />

                    {errors.BriefJobDescription && (
                        <Text style={{ color: 'red' }}>
                            {errors.BriefJobDescription.message}
                        </Text>
                    )}
                </View>


                <View>
                    <Controller
                        control={control}
                        name='Counter Measure'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Select Category <Text style={{ color: 'red' }}>*</Text>
                                </Text>
                                <CustomInput
                                    name='Select Category'
                                    changeValue={onChange}
                                />
                            </View>


                        )}
                    />

                    {errors.BriefJobDescription && (
                        <Text style={{ color: 'red' }}>
                            {errors.BriefJobDescription.message}
                        </Text>
                    )}
                </View>

                <View style={{ flexDirection: 'column', marginBottom: 50 }}>
                    <View style={{ flexDirection: 'row' ,backgroundColor:'#19647e',height:35,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    
                        <Text style={{fontSize:15,fontWeight:500,color:'#FFF',}}>DueDate</Text>
                    </View>
                    <View style={{ flexDirection: 'row',gap:20 }}>
                        <Controller
                            control={control}
                            name='startingDate'
                            rules={{ required: 'Enter starting date !' }}
                            render={({ field: { onChange, value } }) => (
                                <DatePickerComponent  initialDate={fromDate} />
                            )}
                        />
{/* 
                        <Controller
                            control={control}
                            name='startingTime'
                            rules={{ required: 'Enter starting time !' }}
                            render={({ field: { onChange, value } }) => (
                                <TimePicker changeValue={onChange} />
                            )}
                        /> */}
                    </View>
                </View>
                {(errors.startingDate || errors.startingTime) && (
                    <Text style={{ color: 'red', marginTop: 50 }}>{'Required'}</Text>
                )}



                <View>
                    <TouchableOpacity
                        style={styles.IssueButton}
                    // onPress={() => {
                    // 	navigation.navigate('RaiseIssue');
                    // }}
                    >

                        <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>Acknowledge Issue</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}
export default AcknowledgeIssue


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(207, 235, 255, 1)',

    },
    mainHeader: {
        top: 5,
        alignSelf: 'center',

    },
    mainHeaderText: {
        fontSize: 25,
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',


    },
    mainComponent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        margin: 15,
        padding: 15,
        gap: 20,
        flex: 1,
        borderRadius: 5

        ,
    },
    IssueButton: {
        width: 107,
        height: 35,
        backgroundColor: 'rgba(195, 73, 65, 1)',
        borderRadius: 5,
        justifyContent: 'center',
        // alignItems:'center'
    }

})