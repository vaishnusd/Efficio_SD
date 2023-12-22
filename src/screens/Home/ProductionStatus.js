import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Entypo, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default ProductionStatus = (dataToSend) => {
    const data = dataToSend.dataToSend;
    // const navigation = useNavigation();
    const imageName = data.imagePath.split("/").find((eachName) => (eachName.includes(".")));
    const imgURL = 'https://androidapi220211216164156.azurewebsites.net/api/Approval/DownloadFile?filename=' + imageName;
    console.log(imgURL);

    return (
        <Animatable.View style={styles.mainContainer} animation={'slideInDown'}>
            <View style={styles.productionStatusHeader}>
                <Text style={{ color: '#fff', fontFamily: 'Poppins_Regular' }}>{data.lineName}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="bug" size={24} color="white" />
                    <Text style={{ color: '#fff', fontFamily: 'Poppins_Regular', top: 1 }}> Issue : {data.issueNo}</Text>
                </View>
            </View>
            <LinearGradient colors={['rgba(85, 144, 215, 1)', 'rgba(0, 33, 73, 1)']} style={styles.productionLineStatus}>
                <View style={{flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Image source={{
                        uri: imgURL
                    }} style={styles.signatureImage} />
                </View>
                {/* <View style={styles.options}>
                    <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                        <Text style={styles.optionButtonText}>Name Plate Printing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                        <Text style={styles.optionButtonText}>Stage 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'} >
                        <Text style={styles.optionButtonText}>Stage 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                        <Text style={styles.optionButtonText}>Stage 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                        <Text style={styles.optionButtonText}>Testing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsButton} onPress={'handlePress'}>
                        <Text style={styles.optionButtonText}>Packing</Text>
                    </TouchableOpacity>
                </View> */}

                {/* <View style={styles.footerProduction}>
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
                        <Text style={{ color: '#fff', fontFamily: 'Poppins_Regular' }}>  Raise Issue</Text>
                    </TouchableOpacity>
                </View> */}
            </LinearGradient>
        </Animatable.View>
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
        gap: 5,
        padding: 10
    },
    signatureImage: {
        width: '100%',
        height: "100%",
        objectFit: 'contain',
        borderRadius: 20
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
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 8,
        backgroundColor: 'rgba(24, 192, 193, 1)'
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
    },
    optionButtonText: {
        color: 'white',
        fontFamily: 'Poppins_Regular',
        fontSize: 12,
    }
})