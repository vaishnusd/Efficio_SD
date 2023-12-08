import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import SelectDropDownPage from '../../components/SelectDropDownPage';
import dataAcknowledgeIssue from '../../../assets/json/AcknowledgeIssue.json'

const AcknowledgeIssue = () => {
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
                <Text style={styles.mainHeaderText}>Close Issue</Text>
            </View>
            <View style={styles.mainComponent}>
                <View>
                <Controller
						control={control}
						name='selectProductionLine'
						rules={{ required: 'Please select your department !' }}
						render={({ field: { onChange, value } }) => (
							<SelectDropDownPage
								data={dataAcknowledgeIssue.selectProductionLine}
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
								data={dataAcknowledgeIssue.selectStation}
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

          
                <View>
                <TouchableOpacity
                    style={styles.IssueButton}
                // onPress={() => {
                // 	navigation.navigate('RaiseIssue');
                // }}
                >

                    <Text style={{ color: 'rgba(255, 255, 255, 1)',textAlign:'center',justifyContent:'center',alignItems:'center' }}>Close Issue</Text>
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
        backgroundColor:'rgba(195, 73, 65, 1)',
        borderRadius:5,
        justifyContent:'center',
        // alignItems:'center'
    }

})