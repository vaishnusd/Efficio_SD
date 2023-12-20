import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import BottomNavigator from "./BottomNavigator";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Paragraph, Title } from "react-native-paper";
import * as Animatable from 'react-native-animatable';

export default SideMenu = () => {
    const navigation = useNavigation();
    const arrRight = require('../../assets/icons/arrow-right.png');
    const arrDown = require('../../assets/icons/arrow-down.png');
    const [logoutConfirmationMessage, setLogoutConformationMessage] = useState(false);
    const [menuItemSideIcon1, setMenuItemSideIcon1] = useState(arrRight);
    const [menuItemSideIcon2, setMenuItemSideIcon2] = useState(arrRight);
    const userInfo = useSelector((state) => state.user.userProfile);
    // const userInfo = {
    //     fullName: 'Chinnaswami Muthuswami Venugopal Iyer',
    //     email: 'sumenmeranaamhaidekhlo_2201sqaudronleader@yahoo.com',
    //     plantName: 'Grundfos'
    // }

    function toggleLogoutConfirmation() {
        setLogoutConformationMessage(logoutConfirmationMessage ? false : true);
    }

    function toggleLogoutConfirmation() {
        setLogoutConformationMessage(logoutConfirmationMessage ? false : true);
    }

    function expandAndon() {
        setMenuItemSideIcon1(menuItemSideIcon1 === arrRight ? arrDown : arrRight);
    }

    function expandReport() {
        setMenuItemSideIcon2(menuItemSideIcon2 === arrRight ? arrDown : arrRight);
    }

    function openAcknowledgeIssueForm() {
        navigation.navigate('AcknowledgeIssue');
        setMenuItemSideIcon2(arrRight);
        setMenuItemSideIcon1(arrRight);
    }

    function openCloseIssueForm() {
        navigation.navigate('CloseIssue');
        setMenuItemSideIcon2(arrRight);
        setMenuItemSideIcon1(arrRight);
    }

    function goToLoginPage() {
        navigation.navigate('Login');
        setMenuItemSideIcon2(arrRight);
        setMenuItemSideIcon1(arrRight);
    }

    function goToIssueReport() {
        navigation.navigate('IssueReport');
        setMenuItemSideIcon2(arrRight);
        setMenuItemSideIcon1(arrRight);
    }

    return (
        <Animatable.View animation={'slideInLeft'}>
            {console.log(menuItemSideIcon1, menuItemSideIcon2)}
            <ScrollView style={styles.container}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, padding: 10 }}>
                            <Avatar.Image
                                source={require('../../assets/icons/userProfileIcon.png')
                                }
                                size={70}
                            />
                        </View>
                        <View style={{ flex: 4, padding: 10 }}>
                            <Text style={styles.title}>{userInfo.fullName}</Text>
                            <Text style={styles.caption}>{userInfo.email}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.menuButtons, { backgroundColor: (menuItemSideIcon1 === arrDown) ? '#489CFF' : 'rgba(141, 194, 255, 0.30)' }]} onPress={expandAndon}>
                    <Text style={[styles.menuButtonText]}>Andon</Text>
                    <Image source={menuItemSideIcon1} style={{ width: 20, height: 20, right: 20 }} />
                </TouchableOpacity>
                {(menuItemSideIcon1 === arrDown) &&
                    <View>
                        <TouchableOpacity style={styles.subMenuButtons} onPress={openAcknowledgeIssueForm}>
                            <Text style={styles.subMenuButtonText}>Acknowledge Issue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuButtons} onPress={openCloseIssueForm}>
                            <Text style={styles.subMenuButtonText}>Close Issue</Text>
                        </TouchableOpacity>
                    </View>
                }
                <TouchableOpacity style={[styles.menuButtons, { backgroundColor: (menuItemSideIcon2 === arrDown) ? '#489CFF' : 'rgba(141, 194, 255, 0.30)' }]} onPress={expandReport}>
                    <Text style={[styles.menuButtonText]}>Reports</Text>
                    <Image source={menuItemSideIcon2} style={{ width: 20, height: 20, right: 20 }} />
                </TouchableOpacity>
                {(menuItemSideIcon2 === arrDown) &&
                    <View>
                        <TouchableOpacity style={styles.subMenuButtons} onPress={goToIssueReport}>
                            <Text style={styles.subMenuButtonText}>Issue Report</Text>
                        </TouchableOpacity>
                    </View>
                }
                <TouchableOpacity style={styles.menuButtons}>
                    <Text style={styles.menuButtonText}>Terms & Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButtons}>
                    <Text style={styles.menuButtonText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButtons}>
                    <Text style={styles.menuButtonText}>Contacts</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: '40%', marginBottom: 100 }}>
                    <View>
                        <TouchableOpacity style={styles.mainButtons} onPress={toggleLogoutConfirmation}>
                            <Text style={styles.mainButtonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    {userInfo.plantName.includes('Grundfos') &&
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://coltarapumpsandseals.com.au/wp-content/uploads/2017/12/grundfos-logo.png' }} style={{ height: 50, width: 200 }} />
                        </View>
                    }
                    {userInfo.plantName.includes('Soft Designers1') &&
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://www.softdesigners.co.in/wp-content/uploads/2022/05/Softdesigners-logo.png' }} style={{ height: 80, width: 240, objectFit: 'contain' }} />
                        </View>
                    }
                </View>
                <Modal visible={logoutConfirmationMessage} transparent>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)', alignItems: 'center' }} activeOpacity={1} onPress={toggleLogoutConfirmation}>
                        <TouchableOpacity style={{ top: '40%', backgroundColor: 'white', padding: 20, gap: 20, borderRadius: 10 }} activeOpacity={1}>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins_Regular' }}>Are you sure want to logout?</Text>
                            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', alignSelf: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: 'rgba(85, 144, 215, 1)', paddingVertical: 5, paddingHorizontal: 10 }} onPress={goToLoginPage}>
                                    <Text style={{ color: 'white', fontFamily: 'Poppins_Regular' }}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'rgba(85, 144, 215, 1)', paddingVertical: 5, paddingHorizontal: 10 }} onPress={toggleLogoutConfirmation}>
                                    <Text style={{ color: 'white', fontFamily: 'Poppins_Regular' }}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </ScrollView>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#CFEBFF',
        paddingBottom: 100
    },
    userInfoSection: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 15,
        margin: 10
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins_SemiBold',
        color: 'white'
    },
    caption: {
        fontSize: 10,
        fontFamily: 'Poppins_Regular',
        color: 'white'
    },
    mainButtons: {
        padding: 5,
        heigth: 60,
        backgroundColor: '#004A8E',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    mainButtonText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 14
    },
    menuButtons: {
        backgroundColor: 'rgba(141, 194, 255, 0.30)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 0.2
    },
    menuButtonText: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins_SemiBold',
        left: 25
    },
    subMenuButtons: {
        justifyContent: 'center',
        height: 40
    },
    subMenuButtonText: {
        fontSize: 14,
        fontFamily: 'Poppins_Regular',
        left: 40
    }
});