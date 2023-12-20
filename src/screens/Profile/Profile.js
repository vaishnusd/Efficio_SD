import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, TouchableOpacity, StyleSheet, Image, Text, View, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';

export default Profile = () => {
    const userInfo = useSelector((state) => state.user.userProfile);

    console.log("THis data from Profile Section: ", userInfo);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontFamily: 'Poppins' }}>Profile</Text>
            <TouchableOpacity  >
                <Image source={require('../../../assets/icons/userProfileIcon.png')} style={styles.profileIcon} />
                {/* <View style={{ padding: 5, backgroundColor: 'white', borderRadius: 30, position: 'absolute', top: 0, right: 0 }} >
                    <Image source={require('../../../assets/icons/photoPenIcon.png')} style={styles.photoPenIcon} />
                </View> */}
            </TouchableOpacity>
            <View style={styles.detailContainer}>
                <View style={styles.eachField}>
                    <Text style={styles.profiledataheaders}>Name</Text>
                    <TextInput style={styles.inputField} value={userInfo.fullName} />
                </View>
                <View style={styles.eachField}>
                    <Text style={styles.profiledataheaders}>Phone</Text>
                    <TextInput style={styles.inputField} value={userInfo.phone}/>
                </View>
                <View style={styles.eachField}>
                    <Text style={styles.profiledataheaders}>Email</Text>
                    <TextInput style={styles.inputField} value={userInfo.email}/>
                </View>
                <View style={styles.eachField}>
                    <Text style={styles.profiledataheaders}>Username</Text>
                    <TextInput style={styles.inputField} value={userInfo.empId}/>
                </View>
                <View style={styles.eachField}>
                    <Text style={styles.profiledataheaders}>Department</Text>
                    <TextInput style={styles.inputField} value={userInfo.dept}/>
                </View>
                {/* <TouchableOpacity underlayColor={'#FFF78A'} activeOpacity={1} onPress={() => alert('Pressed!')}>
                    <Text style={{ fontFamily: 'Poppins', textDecorationLine: 'underline', textAlign: 'right', color: 'white' }}>Change Password</Text>
                </TouchableOpacity> */}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#CFEBFF',
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        gap: 20
    },
    profileIcon: {
        width: 100,
        height: 100
    },
    detailContainer: {
        width: '90%',
        gap: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    eachField: {
        borderBottomWidth: 0.2,
        borderColor: 'white'
    },
    saveButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profiledataheaders: {
        fontSize: 11,
        fontFamily: 'Poppins_Regular',
        color: 'cyan'
    },
    buttonIcons: {
        height: 30,
        width: 30,
        marginHorizontal: 5
    },
    photoPenIcon: {
        width: 20,
        height: 20
    },
    inputField: {
        color: 'white',
        fontFamily: 'Poppins_Regular'
    }
});