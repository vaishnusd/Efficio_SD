import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default BottomNavigator = () => {
    return (
        <LinearGradient colors={['#4C6078', '#001935']} style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Image source={require('../../assets/icons/Home.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} >
                <Image source={require('../../assets/icons/notificationIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} >
                <Image source={require('../../assets/icons/userIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} >
                <Image source={require('../../assets/icons/menuIcon.png')} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonContainer: {
        flex: 1, 
        alignItems: 'center'
    }
});