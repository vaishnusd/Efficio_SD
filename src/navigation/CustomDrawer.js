import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
   <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'rgba(207, 235, 255, 1)'}}>
        
          <DrawerItemList {...props}/>
          </DrawerContentScrollView>

          <View>
            <Text>Hi</Text>
          </View>
          </View>
 
  ) 
}

export default CustomDrawer

const styles = StyleSheet.create({})