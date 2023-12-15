import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { Image, Text, View } from "react-native"

export default Profile = () => {
    return (
       
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins' }}>Profile</Text>
                <TouchableOpacity  >
                    <Image source={require('../../../assets/icons/userProfileIcon.png')} style={styles.profileIcon} />
                    <View style={{ padding: 5, backgroundColor: 'white', borderRadius: 30, position: 'absolute', top: 0, right: 0 }} >
                        <Image source={require('../../../assets/icons/photoPenIcon.png')} style={styles.photoPenIcon} />
                    </View>
                </TouchableOpacity>
                <LinearGradient colors={['#489CFF', '#002D62']} style={styles.detailContainer}>
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
                </LinearGradient>
                <TouchableOpacity style={{ width: '100%', marginTop: -10 }}>
                    <LinearGradient colors={['#489CFF', '#002D62']} style={styles.saveButton}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/icons/lockIcon.png')} style={styles.buttonIcons} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Change Password</Text>
                        </View>
                        <Image source={require('../../../assets/icons/changePassIcon.png')} style={styles.buttonIcons} />
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '90%', marginBottom: 40 }}>
                    <LinearGradient colors={['#717171', '#2F2F2F']} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 20, padding: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
                        <Image source={require('../../../assets/icons/logoutIcon.png')} style={styles.buttonIcons} />
                    </LinearGradient>
                </TouchableOpacity>
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
        borderRadius: 15
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
        fontFamily: 'Poppins',
        color: 'white'
    },
    buttonIcons: {
        height: 30,
        width: 30, 
        marginHorizontal: 5
    },
    photoPenIcon: {
        width: 20,
        height: 20
    }
});