import { StyleSheet } from "react-native";
import { Text, View, Modal, TouchableOpacity } from "react-native";

export default SideMenu = (isVisible) => {
    console.log("Triggered Menu", isVisible);
    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.container}>
                <Text>Hellcdnksnvjfkdvbjfkdvjkfndvjn</Text>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Andon</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Reports</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});