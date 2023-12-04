import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Menu(){
  return (
    <View style={styles.main}>
      {/* <Text style={styles.menuHead}>Menu</Text> */}
    
      {/* <Image style={styles.menu} src='https://b.zmtcdn.com/data/menus/303/19945303/63060981a905de6533f89907bd0351a3.jpg'></Image> */}
      <Image style={styles.menu} src='https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X/restaurant%2F671742%2Fmenu%2Fmenu01599046106194.jpg'></Image>

    </View>
  )
}


const styles = StyleSheet.create({
  main:{
    backgroundColor:'black',
    height:1000
  },
  menuHead:{
    fontSize:30,
    position:'relative',
    top:40
  },

  menu:{
    height:570,
    width:390,
    position:'relative',
    top:100,
    // left:20
  }
})