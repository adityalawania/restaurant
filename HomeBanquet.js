import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
// import Profile from "./profile";
import { useNavigation } from "@react-navigation/native";

export default function HomeBanquet() {
  const navigation=useNavigation();
    const func=(name)=>{
        console.log(name)
        console.log("hello")
        alert(name)
      }
  return (
 
        <View style={styles.container}> 
     
        <Image style={styles.img1} source={require("./assets/banquet.jpg")} onPress={()=>alert("tappped")}/>
        <Image style={styles.img2} source={require("./assets/banquet2.jpg")} />
        <Text style={styles.head}>Book Your Personalized Banquet</Text>
        <Text style={styles.head2}>Small, Medium and Large Sized beautiful Banquets for all types of Events ans Gathering </Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('support')}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
 
    container:{
      color:"green",
      backgroundColor:"rgb(251, 238, 255)",
     

      height:900,
    
      padding:6,
    

      width:360,
  
      paddingBottom:45,
      

    },
  
    mytext:{
      fontSize:20,
      marginTop:1000,
      color:"green"
    },
  
    img1:{
        position:"relative",
        top:90,
       
        width:340,
        height:210,
        borderRadius:13,
        transform:[

          {rotateZ: '10deg'}
        ],
        
    },  


    img2:{
        position:"relative",
        bottom:20,
        left:80,
        width:340,
        height:200,
        borderRadius:13,
        transform:[
          {rotateZ: '-10deg'}
        ],
    },

    head:{
        fontSize:43,
        fontWeight:"700",
        position:"relative",
        top:52,
        color:'rgb(77, 9, 77)'

       
      
    },

    head2:{
        marginLeft:2,
        color:"rgb(77, 77, 77)",
        position:"relative",
        top:52,
        lineHeight:18
    },

    
    button:{
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 11,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        position:"relative",
        top:47,
        
      
    },

    btnText:{
        color:"white",
        fontSize:23,
        
        
    },

    prof:{
       backgroundColor:"red"
    }
  });