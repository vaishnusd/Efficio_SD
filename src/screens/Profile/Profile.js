import { LinearGradient } from "expo-linear-gradient"
import { TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { Image, Text, View } from "react-native"
import BottomNavigator from "../../navigation/BottomNavigator"

export default Profile = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins' }}>Profile</Text>
                <Image source={require('../../../assets/icons/userProfileIcon.png')} style={styles.profileIcon} />
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: -10 }}>Change profile photo</Text>
                <LinearGradient colors={['#7CC0FF', '#FFF6C9']} style={styles.detailContainer}>
                    <View style={styles.eachField}>
                        <Text style={styles.profiledataheaders}>Name</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.eachField}>
                        <Text style={styles.profiledataheaders}>Phone</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.eachField}>
                        <Text style={styles.profiledataheaders}>Email</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.eachField}>
                        <Text style={styles.profiledataheaders}>Username</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.eachField}>
                        <Text style={styles.profiledataheaders}>Department</Text>
                        <Text></Text>
                    </View>
                    <View>
                        <Text style={[styles.profiledataheaders, { textDecorationLine: 'underline' }]}>Change Password</Text>
                    </View>
                </LinearGradient>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Save</Text>
                </TouchableOpacity>
            </View>
            <BottomNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    profileIcon: {
        width: 100,
        height: 100
    },
    container: {
        backgroundColor: '#CFEBFF',
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        gap: 20
    },
    detailContainer: {
        width: '90%',
        gap: 20,
        padding: 20,
        borderRadius: 15
    },
    eachField: {
        borderBottomWidth: 0.2
    },
    saveButton: {
        backgroundColor: '#0060B9',
        padding: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },
    profiledataheaders: {
        fontSize: 11,
        fontFamily: 'Poppins'
    }
});