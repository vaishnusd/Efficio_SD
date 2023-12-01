import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default ProductionStatus = () => {


    return (
        <View>

            <View style={styles.productionStatusHeader}>
                <Text style={{ color: '#fff' }}>CR</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name="bug" size={24} color="white" />
                    <Text style={{ color: '#fff' }}>Issue:0</Text>
                </View>

            </View>
            <LinearGradient
                colors={['rgba(85, 144, 215, 1)',
                    'rgba(0, 33, 73, 1)']}
                style={styles.productionLineStatus}


            >
                <View>
                    <Image source={require('../../../assets/images/HomeMachine.png')} style={{
                        width: 108,
                        height: 189,
                    }} />


                </View>
                <View style={styles.options}>
                    <Pressable style={styles.optionsButton} onPress={'handlePress'}>
                        <Text>Name Plate Printing</Text>
                    </Pressable>
                    <Pressable style={styles.optionsButton} onPress={'handlePress'}>
                        <Text>Stage 1</Text>
                    </Pressable>
                    <Pressable style={styles.optionsButton} onPress={'handlePress'} >
                        <Text>Stage 2</Text>
                    </Pressable>
                    <Pressable style={styles.optionsButton} onPress={'handlePress'}>
                        <Text>Stage 3</Text>
                    </Pressable>
                    <Pressable style={styles.optionsButton} onPress={'handlePress'}>
                        <Text>Testing</Text>
                    </Pressable>
                    <Pressable style={styles.optionsButton} onPress={'handlePress'}>
                        <Text>Packing</Text>
                    </Pressable>
                </View>
                <View style={styles.footerProduction}>




                    <Pressable style={styles.IssueButton} onPress={'handlePress'}>
                        <Image source={require('../../../assets/images/WebsiteBug.png')} style={{
                            width: 25,
                            height: 25,
                        }} />
                        <Text style={{ color: '#fff' }}>Raise Issue</Text>
                    </Pressable>
                </View>
                {/* <FontAwesome5 names="hand-paper" size={24} color="white" />
					<Text style={styles.companyName}>ACK Issue</Text>
					<Text style={styles.numberOf}>0</Text> */}
            </LinearGradient>
        </View>
    )
}



const styles = StyleSheet.create({})