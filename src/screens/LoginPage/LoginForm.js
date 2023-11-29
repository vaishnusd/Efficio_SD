import { Image, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import InputTextType from "../../components/InputTextType";

export default LoginForm = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            userName: "",
            password: ""
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
        
        reset();
    }

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                Poppins: require('../../../assets/fonts/Poppins/Poppins-Bold.ttf')
            });
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
        <Modal animationType="slide" transparent >
            <LinearGradient colors={['#004A8E', '#4E729A']} style={styles.formView} >
                <Text style={styles.formHeading}>Sign in</Text>
                <Text style={styles.formDesc}><Text>Welcome ! </Text>Please login to continue</Text>
                <Controller
                    control={control}
                    name="userName"
                    rules={{
                        required: "Please enter your username !",
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View>
                            <View style={[styles.inputFieldContainer, { borderColor: errors.userName ? 'red' : '#004A8E' }]}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../../../assets/icons/userNameIcon.png')} style={{ width: 25, height: 25 }} />
                                </View>
                                <View style={{ flex: 11 }}>
                                    <InputTextType inputName={"Email Address"} changeValue={onChange} value={value} type={"email"} />
                                </View>
                            </View>
                            {
                                errors.userName &&
                                <Text style={{ color: 'red', fontSize: 10 }}>{errors.userName.message}</Text>
                            }
                        </View>
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: "Please enter your password !",
                    }}
                    render={({ field: { onChange, value } }) => (
                        <KeyboardAvoidingView>
                            <View style={[styles.inputFieldContainer, { borderColor: errors.password ? 'red' : '#004A8E' }]}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../../../assets/icons/passwordIcon.png')} style={{ width: 25, height: 25 }} />
                                </View>
                                <View style={{ flex: 11 }}>
                                    <InputTextType inputName={"Password"} changeValue={onChange} value={value} />
                                </View>
                            </View>
                            {
                                errors.password &&
                                <Text style={{ color: 'red', fontSize: 10 }}>{errors.password.message}</Text>
                            }
                        </KeyboardAvoidingView>
                    )}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </LinearGradient>
        </Modal>
    );
}

const styles = StyleSheet.create({
    formView: {
        height: "51%",
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        gap: 18
    },
    formHeading: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins'
    },
    formDesc: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins'
    },
    loginButton: {
        backgroundColor: '#18C0C1',
        borderRadius: 10,
        padding: 5
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    },
    inputFieldContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1.5
    }
});