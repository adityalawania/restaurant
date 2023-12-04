import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
// import { sendEmail } from './send-email';
import { useNavigation } from '@react-navigation/native';
// import Prompt from 'react-native-prompt';

export default function Banquet() 
{
  const navigation=useNavigation();
  const [bname, setBname] = useState('');
  const [num,setNum]=useState('');
  const proRef=useRef();
  const data = [
    {
      name: 'RajMahal',
      img: 'https://media.weddingz.in/images/814499870e5c47cbb919d2a08597bd56/radisson-blu-agra-taj-east-gate-radisson-blu-agra-taj-east-gate-mansion-2.jpg',
      book: 260
    },

    {
      name: 'SheeshMahal',
      img: 'https://www.eventsource.ca/blog/wp-content/uploads/2017/04/NGStudioHeader-1.jpg',
      book: 117
    },

    {
      name: 'TajMahal',
      img: 'https://cache.marriott.com/marriottassets/marriott/BOMXR/bomxr-ballroom-9854-hor-wide.jpg?downsize=1440px:*',
      book: 68
    },
  ]

  const book = (n) => {
    setBname(n);
    proRef.current.display='true'
    

    console.log(proRef.current.display)
    // alert(n);
  }

  const finalsub=()=>{
    sendEmail(
      'adityalawnia899@gmail.com',
      'Banquet Booking',
      `Name: ${bname},
  Number: ${num}`,

      //  { cc: 'adityalawania899@gmail.com; bhumikam61@gmail.com' }
    ).then(() => {
      console.log('Your message was successfully sent!');
    });
  }
  return (
    <View style={styles.main}>
      {/* <Text>Banquet</Text> */}
      <ScrollView>
        {data.map((item, i) => {
          return (
            <View style={styles.card} key={i}>
              <Image style={styles.img} src={item.img}></Image>
              <Text style={styles.head}>{item.name}</Text>
              <Text style={styles.head2}>{item.book} Bookings till now</Text>
              <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Prompt',item.name)}>
                <Text style={styles.btnText}>Book</Text>
              </TouchableOpacity>
            </View>
          )
        })}
        <View style={styles.bottom}></View>
      </ScrollView>
      
     
     
    </View>
  )
}



const styles = StyleSheet.create({
  main: {
    position: 'relative',
    top: 50
  },
  card: {

    backgroundColor: 'rgb(251, 238, 255)',
    // borderWidth: 1,
    elevation:9,

    borderRadius: 17,
    height: 280,

    position: 'relative',
    bottom: 0,
    marginBottom: 20
  },
  img: {
    height: 200,
    width: 370,


  },
  head: {
    color: 'purple',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10
  },
  head2: {
    marginTop: 2,
    marginLeft: 10,
    color: 'grey'
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'purple',
    position: "relative",
    left: 260,
    bottom: 55,
    width: 90,
    height: 43





  },


  btn: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:7,
    paddingHorizontal: 9,
    borderRadius: 4,
    backgroundColor: 'white',
    
    position: "relative",
    
    left: 100,
    top:15,
    width: 90,
    height: 38

  },

  btnText: {
    color: "white",
    fontSize: 16,



  },
  btnText2: {
    color: "black",
    fontSize: 16,



  },
  prompt:{
    backgroundColor:'black',
    borderWidth: 1,
    display:'none',
    position:'absolute',
    left:30,
    height:170,
    top:200,
    width:305,
    padding:10,
    borderRadius:15
    
  },
  phead:{
    fontSize:19,
    color:'white'
  },
  inp: {
    marginTop: 6,
    borderColor: 'white',
    padding: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    width: 280,
    height: 40,
    paddingHorizontal: 20,
    color: 'black',
    backgroundColor:'white',
    padding:3
  },
  bottom: {
    height: 40
  }
})