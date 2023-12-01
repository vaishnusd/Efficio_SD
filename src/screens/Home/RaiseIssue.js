import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';

const RaiseIssue = () => {
    console.log('RaiseIssue');
 


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

    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainHeaderText}>Raise Andon Issue</Text>
            </View>
            <View style={styles.mainComponent}>

                <View>
                    <Controller
                        control={control}
                        name='Select Production Line'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Select Production Line<Text style={{ color: 'red' }}>*</Text>
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
                        name='Select Station'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Select Station<Text style={{ color: 'red' }}>*</Text>
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
                        name='Select Category'
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

                <View>
                    <Controller
                        control={control}
                        name='Select Issue'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Select Issue<Text style={{ color: 'red' }}>*</Text>
                                </Text>
                                <CustomInput
                                    name='Select Issue'
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
                        name='Issue Priority'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Issue Priority <Text style={{ color: 'red' }}>*</Text>
                                </Text>
                                <CustomInput
                                    name='Issue Priority'
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
                        name='Description'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Description <Text style={{ color: 'red' }}>*</Text>
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
                        name='Raised By'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Raised By <Text style={{ color: 'red' }}>*</Text>
                                </Text>
                                <CustomInput
                                    name='Raised By'
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
                        name='Assigned To'
                        rules={{ required: 'Please enter the Job Description !' }}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.InputHeader}>
                                    Assigned To<Text style={{ color: 'red' }}>*</Text>
                                </Text>
                                <CustomInput
                                    name='Assigned To'
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
                <TouchableOpacity
                    style={styles.IssueButton}
                // onPress={() => {
                // 	navigation.navigate('RaiseIssue');
                // }}
                >

                    <Text style={{ color: 'rgba(255, 255, 255, 1)',textAlign:'center',justifyContent:'center',alignItems:'center' }}>Raise Issue</Text>
                </TouchableOpacity>
            </View>


            </View>
           
        </View>
    )
}
export default RaiseIssue


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
        backgroundColor:'rgba(195, 73, 65, 1)',
        borderRadius:5,
        justifyContent:'center',
        // alignItems:'center'
    }

})