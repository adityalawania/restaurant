import { React, useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native'
// import dateTimePickerModal from "react-native-modal-datetime-picker";
import SelectDropdown from 'react-native-select-dropdown'
import { sendEmail } from './send-email';
import DropDownPicker from 'react-native-dropdown-picker';

const TableForm = () => {

  const mainRef = useRef();
  let d=new Date;
  let h=d.getHours();
  let m=d.getMinutes();

  

  // let min=d.getMinutes();
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [cap, setCap] = useState('');
  const [desc, setDesc] = useState('');
 

  const [date, setdate] = useState('Select date');
  const [hrs, setHrs] = useState();
  const [mins, setMins] = useState();




  const [isdatePickerVisible, setdatePickerVisibility] = useState(false);

  const hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const minute = [];
  for (let i = 1; i <= 59; i++) {
    if (i >= 1 && i <= 9) {
      minute.push('0' + i);
    }
    else
      minute.push(i.toString());
  }

  const showdatePicker = () => {
    // setdatePickerVisibility(true);
  };

  const hidedatePicker = () => {
    // setdatePickerVisibility(false);
  };

  const handleConfirm = (date) => {

    // console.warn("A date has been picked: ", date);
    // // console.log(date.date)
    // setdate(date);
    // hidedatePicker();
  };

  const bookTab = () => {
    if(hrs<h){
      alert('Enter Hour > Current Hour')
      return;
    }

    if(hrs==h && mins<m+5){
      alert('Too Short Time Coverage')
      return;

    }

    if(hrs>23)
    {
      alert('Please Choose hour < 24')
      return
    }

    if(mins>59)
    {
      alert('Invalid Minute Choosed')
      return;
    }

    if(name=='')
    {
      alert('Please fill name')
      return;
    }

    if(name.length<4)
    {
      alert('Too short name!')
      return
    }

    if(num=='')
    {
      alert('Please fill number')
      return;


    }

    if(num.length<10)
    {
      alert("Phone Number length should not be less than 10")
      return;
    }

    if(cap=='')
    {
      alert("Please Fill Number of Guests")
      return;

    }
    let otp = Math.round(Math.random() * 100000)
    sendEmail(
      'dhruvvarshney24112002@gmail.com',
      `OTP:   ${otp}`,
      `Name:   ${name},
Number:   ${num},
Time:   ${hrs}:${mins},
Guest:   ${cap},
Description:   ${desc}`,
      //  { cc: 'adityalawania899@gmail.com; bhumikam61@gmail.com' }
    ).then(() => {
      console.log('Your message was successfully sent!');
    });
  }

  return (

    <View style={styles.main} ref={mainRef}>
      <Image style={styles.cover} source={require('./assets/couple.jpg')} />
      <Text style={styles.head}>Make a reservation</Text>
      {/* <View style={styles.head2Cont}> */}
      <Text style={styles.head2}>Save your time and make a reservation here! And be sure about your event</Text>
      {/* </View> */}
      <View style={styles.form}>

        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => setName(text)}
          value={name}
          style={styles.inp}
          placeholder='Enter Your Name'
        />

        <TextInput
          editable
          multiline
          numberOfLines={4}
          keyboardType='numeric'
          maxLength={40}
          onChangeText={text => text.length <= 10 ? setNum(text) : alert("Phone Number cannot exceed length of 10")}
          value={num}
          style={styles.inpNum}
          placeholder='Enter Your Contact Number'
        />

        <TextInput
          editable
          multiline
          numberOfLines={4}
          keyboardType='numeric'
          maxLength={40}
          onChangeText={text => text <= 30 ? setCap(text) : alert('Sitting Capacity cannot exceed 30')}
          value={cap}
          style={styles.inpNum}
          placeholder='Number of Guests ( less than 31 )'
        />

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

        
    
          
            

          <TouchableOpacity onPress={showdatePicker} style={styles.date} >
            <TextInput style={styles.dateText}
              value={hrs}
              placeholder='Select Hours'
             keyboardType='numeric'
            onChangeText={text =>  setHrs(text)}
              
            />
         
          </TouchableOpacity>

          <TouchableOpacity onPress={showdatePicker} style={styles.date} >
            <TextInput style={styles.dateText}
              value={mins}
              placeholder='Select Mins'
             keyboardType='numeric'
            onChangeText={text =>  setMins(text) }
              
            />
         
          </TouchableOpacity>
          

          <TextInput
            editable
            multiline
            onChangeText={text => text.length < 400 ? setDesc(text) : alert(`Too long Description, Can't add more`)}
            value={desc}
            id='desc'

            style={styles.desc}
            placeholder='Add some details about your table'
          />

          <Text style={styles.descLen}>{400 - desc.length} Character Left</Text>


          <TouchableOpacity style={styles.submit} onPress={() => bookTab()} >
            <Text style={{ color: 'white' }} >Submit</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  cover: {
    width: "100%",
    height: 240,
    aspectRatio: 1,
    backgroundColor: 'transparent',
    marginTop: 40
  },
  head: {
    color: "purple",
    fontWeight: "700",
    fontSize: 22,
    margin: 'auto',
    marginTop: 18
  },
  head2: {
    width: 290,
    marginLeft: 20,
    marginTop: 3,
    color: 'grey'

  },
  form: {
    marginTop: 30,
    height: 400
  },
  inp: {
    // backgroundColor:'red',
    borderColor: 'grey',
    padding: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    width: 280,
    height: 40,
    paddingHorizontal: 20,
    color: 'grey'
  },
  inpNum: {
    marginTop: 6,
    borderColor: 'grey',
    padding: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    width: 280,
    height: 40,
    paddingHorizontal: 20,
    color: 'grey'
  },
  desc: {
    position: 'absolute',
    top: 40,
    marginTop: 12,
    borderColor: 'grey',
    padding: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    width: 280,
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 27,
    color: 'grey'
  },
  descLen: {
    position: 'absolute',
    top: 150,
    right: 10,
    color: 'purple'
  },
  date: {
    marginTop: 6,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 4,
    width: 137,
    height: 40,
    paddingHorizontal: 20,


  },
  dateText: {
    position: 'relative',
    top: 4,
    left: 2,
    color: 'grey'
  },
  time: {

  },

  hour:{
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    width: 800
  },
  submit: {
    position: 'absolute',
    top: 175,
    // marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'purple',
    width: 280


  }

})
export default TableForm
