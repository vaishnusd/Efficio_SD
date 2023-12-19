import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const userInfo = useSelector((state) => state.user.userProfile);
  const [logoutConfirmationMessage, setLogoutConformationMessage] = useState(false);
  const navigation = useNavigation();

  function toggleLogoutConfirmation() {
    setLogoutConformationMessage(logoutConfirmationMessage ? false : true);
  }

  function goToLoginPage() {
    navigation.navigate('Login');
  }


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'rgba(207, 235, 255, 1)', flex: 1 }}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15, paddingVertical: 10 }}>
              <Avatar.Image
                source={require('../../assets/icons/userProfileIcon.png')
                }
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>{userInfo.fullName}</Title>
                <Caption style={styles.caption}>{userInfo.email}</Caption>
              </View>
            </View>
          </View>
          <DrawerItemList {...props} />
          <View style={{ alignItems: 'center', marginTop: '100%', marginBottom: 50 }}>
            <TouchableOpacity style={styles.mainButtons} onPress={toggleLogoutConfirmation}>
              <Text style={styles.mainButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          {userInfo.plantName.includes('Grundfos') &&
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={{ uri: 'https://coltarapumpsandseals.com.au/wp-content/uploads/2017/12/grundfos-logo.png' }} style={{ height: 50, width: 200 }} />
            </View>
          }
        </View>
        <Modal visible={logoutConfirmationMessage} transparent>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)', alignItems: 'center'}} activeOpacity={1} onPress={toggleLogoutConfirmation}>
            <TouchableOpacity style={{top: '40%', backgroundColor: 'white', padding: 20, gap: 20, borderRadius:10 }} activeOpacity={1}>
              <Text style={{ fontSize: 14, fontFamily:'Poppins_Regular' }}>Are you sure want to logout?</Text>
              <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', alignSelf: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'rgba(85, 144, 215, 1)', paddingVertical: 5, paddingHorizontal: 10 }} onPress={goToLoginPage}>
                  <Text style={{ color: 'white', fontFamily:'Poppins_Regular' }}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'rgba(85, 144, 215, 1)', paddingVertical: 5, paddingHorizontal: 10 }} onPress={toggleLogoutConfirmation}>
                  <Text style={{ color: 'white', fontFamily:'Poppins_Regular' }}>No</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </DrawerContentScrollView>


    </View>



  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,

  },
  title: {
    fontSize: 16,
    marginTop: 1,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
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
  }
})