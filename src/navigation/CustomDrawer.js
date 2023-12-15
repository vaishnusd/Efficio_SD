import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { ScrollView } from 'react-native-gesture-handler'

const CustomDrawer = (props) => {
  return (
 

   <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'rgba(207, 235, 255, 1)',flex:1}}>
        
        
          <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../../assets/icons/userProfileIcon.png')
                                }
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Akhand_OP</Title>
                                <Caption style={styles.caption}>@akhand_op</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Grundfos</Paragraph>
                             
                            </View>
                       
                        </View>
                    </View>
                    </View>
                    <DrawerItemList {...props}/>
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
    marginBottom:20
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
})