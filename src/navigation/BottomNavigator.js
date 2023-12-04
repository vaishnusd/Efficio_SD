import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import SideMenu from "./SideMenu";
import { useNavigation } from '@react-navigation/native';

export default BottomNavigator = ({ toggleMenu }) => {
    const navigation = useNavigation();
    return (
        <View>
            <LinearGradient colors={['#4C6078', '#001935']} style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={require('../../assets/icons/Home.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={navigation.navigate('IssueReport')}>
                    <Image source={require('../../assets/icons/notificationIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Image source={require('../../assets/icons/userIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={toggleMenu}>
                    <Image source={require('../../assets/icons/menuIcon.png')} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    }
});