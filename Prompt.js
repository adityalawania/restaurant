import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sendEmail } from './send-email';

const Prompt = ({route}) => {
  let bname=route.params;
  const [num, setNum] = useState('');
 

  const finalsub = () => {
    if(num.length<10){

      alert('Invalid Number')
      return
    }
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
    <View style={styles.prompt} >
      <Text style={styles.phead}>Enter your Phone Number</Text>
      <TextInput
        style={styles.inp}
        keyboardType='numeric'
        onChangeText={text => text.length <= 10 ? setNum(text) : alert("Phone Number cannot exceed length of 10")}
        value={num}
      />
      <Text style={{ color: 'white', marginLeft: 3 }}>Our team will contact you soon...!</Text>
      <TouchableOpacity style={styles.btn} onPress={() => finalsub()}>
        <Text style={styles.btnText2}>Submit</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.ty}>Thanks For Connecting With Us !</Text>
    <Text style={styles.ty2}>We hope that you will like our service</Text>
    </View>
  )
}

export default Prompt

const styles = StyleSheet.create({
main:{
  backgroundColor:'black',
  height:1000
},
  btn: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 4,
    backgroundColor: 'white',

    position: "relative",

    left: 100,
    top: 15,
    width: 90,
    height: 38

  },

  btnText2: {
    color: "black",
    fontSize: 16,



  },
  prompt: {
    backgroundColor: 'black',
    borderWidth: 1,
    // display: 'none',
    position: 'absolute',
    left: 30,
    height: 170,
    top: 200,
    width: 305,
    padding: 10,
    borderRadius: 15

  },
  phead: {
    fontSize: 19,
    color: 'white'
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
    backgroundColor: 'white',
    padding: 3
  },

  ty:{
    color:'white',
    position:'absolute',
    top:500,
    fontWeight:'bold',
    fontSize:33,
    marginLeft:9
  },
  ty2:{
    color:'white',
    position:'absolute',
    top:610,
    // fontWeight:'bold',
    fontSize:16,
    marginLeft:14
  }
})