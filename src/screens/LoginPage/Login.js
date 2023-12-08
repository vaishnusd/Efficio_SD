import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';

export default Login = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                Poppins: require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
                Poppins_Regular: require('../../../assets/fonts/Poppins/Poppins-Regular.ttf')
            });
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/loginBackground.jpg')} style={styles.backgroundImage}>
                <View style={styles.loginBackContent}>
                    <Text style={styles.companyName}>EFFICIO</Text>
                    <Image source={require('../../../assets/icons/company_logo_login.png')} style={styles.logo} />
                </View>
                <LoginForm />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    logo: {
        width: 239,
        height: 262,
    },
    companyName: {
        fontSize: 30,
        fontFamily: 'Poppins',
        padding: 0,
        borderRadius: 10,
        paddingHorizontal: 40,
        height: 45,
        backgroundColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)',
        alignSelf: 'center'
    },
    loginBackContent: {
        top: '10%',
        gap: 30
    }
});