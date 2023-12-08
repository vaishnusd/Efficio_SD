import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import SideMenu from "./SideMenu";
import { useNavigation } from '@react-navigation/native';

export default BottomNavigator = () => {
    const navigation = useNavigation();
    const [menuView, setMenuView] = useState(false);

    function toggleMenuView() {
        setMenuView(menuView ? false : true);
    }

    function goTOIssueReport() {
        navigation.navigate('IssueReport');
    }

    function goToHome(){
        navigation.navigate('Home');
    }

    function goToProfile(){
        navigation.navigate('ProfileSection')
    }

    return (
        <View>
            {menuView &&
                <SideMenu isVisible={menuView} />
            }
            <LinearGradient colors={['#4C6078', '#001935']} style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer} onPress={goToHome}>
                    <Image source={require('../../assets/icons/Home.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={goTOIssueReport}>
                    <Image source={require('../../assets/icons/notificationIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={goToProfile} >
                    <Image source={require('../../assets/icons/userIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={toggleMenuView}>
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
        padding: 8,
    
     
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    }
});