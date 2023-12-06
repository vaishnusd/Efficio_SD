import { StyleSheet } from "react-native";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import BottomNavigator from "./BottomNavigator";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default SideMenu = ({ isVisible }) => {
    const navigation = useNavigation();
    const [logoutConfirmationMessage, setLogoutConformationMessage] = useState(false);

    console.log("Triggered Menu", isVisible);

    const selectedButtonStyle = {
        backgroundColor: '#489CFF',
        padding: 10
    }

    const unselectedButtonStyle = {
        backgroundColor: '#8DC2FF',
        padding: 10
    }

    function toggleLogoutConfirmation(){
        setLogoutConformationMessage(logoutConfirmationMessage?false:true);
    }

    function goToLoginPage() {
        navigation.navigate('Login');
    }

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.mainButtons}>
                    <Text style={styles.mainButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButtons}>
                    <Text style={styles.mainButtonText}>Andon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButtons}>
                    <Text style={styles.mainButtonText}>Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButtons} onPress={toggleLogoutConfirmation}>
                    <Text style={styles.mainButtonText}>Logout</Text>
                </TouchableOpacity>
                <Modal visible={logoutConfirmationMessage} transparent>
                    <View style={{width: 250, height: 100, top: 200, backgroundColor: 'white', padding: 20, gap: 20, alignSelf: 'center'}}>
                        <Text>Are you sure want to logout?</Text>
                        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: 'rgba(85, 144, 215, 1)', padding: 5 }} onPress={goToLoginPage}>
                                <Text style={{color: 'white'}}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'rgba(85, 144, 215, 1)', padding: 5 }} onPress={toggleLogoutConfirmation}>
                                <Text style={{color: 'white'}}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#CFEBFF',
    },
    mainButtons: {
        padding: 10,
        heigth: 60,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    mainButtonText: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 20
    }
});