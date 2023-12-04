import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Support() {
  const navigation=useNavigation();
  return (
    <View style={styles.main}>
      <Image source={require('./assets/cc1.jpg')} style={[styles.img,styles.img1]}></Image>
      <Image source={require('./assets/cc3.jpg')} style={[styles.img,styles.img2]}></Image>
      <Text style={styles.head}>24/7 Customer Support</Text>
        <Text style={styles.head2}>Customer satisfaction is priority all the way...!</Text>
        <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('home')}>
          <Text style={styles.btnText}>Start Booking</Text>
        </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
  main:{
    backgroundColor:'rgb(212, 251, 233)',
    height:800
  },
  img1:{
    position:"relative",
    top:120,
    right:30,
  width:340,
    height:210,
    borderRadius:13,
    transform:[

      {rotateZ: '10deg'}
    ],
    // zIndex:3
  }
  ,
  img2:{
    position:"relative",
        top:27,
        left:80,
        width:340,
        height:200,
        borderRadius:13,
        transform:[
          {rotateZ: '-14deg'}
        ],
  },
  head:{
    fontSize:42,
    fontWeight:"700",
    position:"relative",
    left:8,
    top:88,
    color:'black',
  
  

   
  
},

head2:{
    marginLeft:8,
    color:"grey",
    position:"relative",
    top:89
},

button:{
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 32,
    borderRadius: 4,
   backgroundColor: 'black',
    position:"relative",
    top:131,
    width:347,
    left:7
  
    
   

},

btn:{
    backgroundColor:'black',
    
},

btnText:{
    color:"white",
    fontSize:23,
                                                                                   

                                                                                        

    
}

})