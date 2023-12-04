import React, { useEffect ,useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image, Pressable } from 'react-native';
// import Profile from "./profile";
import { LinkingContext, NavigationAction, NavigationRouteContext, useNavigation } from "@react-navigation/native";
import { Link } from '@react-navigation/native';
// import  Oswald_200ExtraLight from "@expo-google-fonts/oswald";
// import { DeliusUnicase_400Regular } from "@expo-google-fonts/delius-unicase";

export default function HomeTable() {
    const navigation=useNavigation();
    const mainref=useRef();
  
  return (
    
        <View style={styles.container} ref={mainref}> 
     
        <Image style={styles.img1} source={require("./assets/jason-leung-poI7DelFiVA-unsplash.jpg")} onPress={()=>alert("tappped")}/>
        <Image style={styles.img2} source={require("./assets/k8-sWEpcc0Rm0U-unsplash.jpg")} />
        <Text style={styles.head}>Book Your Personalized Table</Text>
        <Text style={styles.head2}>Custom sitting capacity with Addons ...!</Text>
        <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('hb')}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
     
        </View>
  )
}

const styles = StyleSheet.create({
 
    container:{
      color:"green",
      backgroundColor:"rgb(220, 254, 255)",
     

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
        right:10,
      width:340,
        height:210,
        borderRadius:13,
        transform:[

          {rotateZ: '10deg'}
        ],
        
    },  


    img2:{
        position:"relative",
        bottom:10,
        left:80,
        width:340,
        height:200,
        borderRadius:13,
        transform:[
          {rotateZ: '-14deg'}
        ],
    },

    head:{
        fontSize:43,
        fontWeight:"700",
        position:"relative",
        top:52,
        color:'black',
      
      

       
      
    },

    head2:{
        marginLeft:8,
        color:"grey",
        position:"relative",
        top:50
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
        top:73,
      
        
       

    },

    btn:{
        backgroundColor:'black',
        
    },

    btnText:{
        color:"white",
        fontSize:23,
                                                                                       

                                                                                            

        
    }

  });