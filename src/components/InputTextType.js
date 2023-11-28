import { StyleSheet, TextInput } from "react-native";

export default InputTextType = ({inputName, changeValue, value}) => {
    return (
        <TextInput
            style={styles.inputField}
            placeholder={inputName}
            onChangeText={changeValue}
            value={value}
            secureTextEntry={inputName === "Password"}
        />
    );
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        fontSize: 20
    },
});