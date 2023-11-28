import { StyleSheet, TextInput } from "react-native";

export default InputField = (inputName, changeValue, errors) => {
    return (
        <TextInput
            style={[styles.inputField, { borderColor: errors ? "red" : "black" }]}
            placeholder={inputName}
            onChangeText={changeValue}
            value={value}
        />
    );
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        borderRadius: 10
    },
});