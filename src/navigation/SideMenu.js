import { StyleSheet } from "react-native";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import BottomNavigator from "./BottomNavigator";

export default SideMenu = ({ isVisible }) => {
    console.log("Triggered Menu", isVisible);

    const selectedButtonStyle = {
        backgroundColor: '#489CFF',
        padding: 10
    }

    const unselectedButtonStyle = {
        backgroundColor: '#8DC2FF',
        padding: 10
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