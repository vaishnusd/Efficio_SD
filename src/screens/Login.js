import { Image, StyleSheet, View } from 'react-native'

export default Login = () =>{
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/loginBackground.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});