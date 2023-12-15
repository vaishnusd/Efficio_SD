import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Entypo, } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

export default ProductionStatus = (dataToSend) => {
    const data = dataToSend.dataToSend;
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <View>
                <View style={styles.productionStatusHeader}>
                    <Text style={{ color: '#fff' }}>{data.lineName}</Text>
                    {/* {console.log('Hi',typeof (dataToSend))} */}
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="bug" size={24} color="white" />
                        <Text style={{ color: '#fff' }}>Issue:0</Text>
                    </View>

                </View>
                <LinearGradient colors={['rgba(85, 144, 215, 1)','rgba(0, 33, 73, 1)']} style={styles.productionLineStatus}>
                    <View>
                        <Image source={{
                            uri:'https://androidapi220211216164156.azurewebsites.net/api/Approval/DownloadFile?filename=' + data
                        }} style={styles.signatureImage} />
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                            <Text>Name Plate Printing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                            <Text>Stage 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'} >
                            <Text>Stage 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                            <Text>Stage 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                            <Text>Testing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                            <Text>Packing</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerProduction}>
                        <TouchableOpacity
                            style={styles.IssueButton}
                            onPress={() => {
                                navigation.navigate('RaiseIssue');
                            }}
                        >
                            <Image source={require('../../../assets/images/WebsiteBug.png')} style={{
                                width: 25,
                                height: 25,
                            }} />
                            <Text style={{ color: '#fff' }}>Raise Issue</Text>
                        </TouchableOpacity>

                        

                    </View>
                    {/* <FontAwesome5 names="hand-paper" size={24} color="white" />
					<Text style={styles.companyName}>ACK Issue</Text>
					<Text style={styles.numberOf}>0</Text> */}
                </LinearGradient>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {

    },
    productionStatus: {
        top: 20,
        marginHorizontal: 10,



    },
    productionStatusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,


        backgroundColor: 'rgba(0, 70, 150, 1)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    productionLineStatus: {
        width: Dimensions.get('window'),
        height: 400,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight:500,

        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10


    },
    signatureImage: {
        width: 108,
        height: 189,
    },
    options: {
        alignItems: 'center',
        top: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: Dimensions.get('window'),

        gap: 5,
    },
    optionsButton: {

        height: 24,
        padding: 3,
        borderRadius: 8,
        backgroundColor: 'rgba(24, 192, 193, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    IssueButton: {
        flexDirection: 'row',
        top: 25,
        width: 132,
        height: 35,
        borderRadius: 8,
        backgroundColor: 'rgba(84, 106, 131, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerProduction: {
        gap: 10
    }
})