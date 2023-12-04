import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Desc = () => {
    const para=
`Welcome to our restaurant booking app, In this amazing app we makes planning your perfect outing or celebration and many more events. This app lets you discover fantastic restaurants and explore their vibes from the comfort of your phone. Not only that, but you can also reserve a table with the seating arrangement of your choice whether you prefer a cozy corner or a spot by the window.

This cool app lets you check out three amazing restaurants — Raj Mahal, Sheesh Mahal and Taj Mahal. You can explore the unique vibes of each spot, helping you choose the perfect sitting for your meal or event.
    

Raj Mahal:

Raj Mahal is a charming restaurant known for its authentic Indian cooking and royal experience. Located in the heart of the city, it captures the essence of royal dining with its rich decor. The menu at Raj Mahal gives a variety of flavored dishes, from classic curries to delightful tandoori specialties. The restaurant's area is nestled in a bustling neighborhood, making it a convenient and delightful choice for those who seeking a taste of India's royal experience.


    
Taj Mahal:

Taj Mahal stands as an iconic restaurant, offering a fusion of Indian and international flavors. Situated in an upscale area, this dining gem gives a blend of traditional and modern architecture, creating a beautiful atmosphere with excessive greenery. The delicious menu at Taj Mahal features wonderful dishes prepared with premium ingredients, ensuring a dining experience that's both luxurious and memorable. Whether you are a fan of traditional Indian fare, Taj Mahal promises a premium journey from the start to the end.



Sheesh Mahal:

Step into the attractive world of Sheesh Mahal, a restaurant known for its complicate decor and delecious North Indian food with lots of mirrors and warm lights. This restaurant serves really tasty North Indian food, especially delicious kebabs and grilled dishes. It's not a huge place, but it's cozy and perfect for a nice dinner with friends or family. So, if you're in the mood for some yummy Indian food in a pretty setting, Sheesh Mahal is the place to be!
    
In simple terms, our app is your solution for a fantastic dining and celebration experience! `
  return (
    <View style={{flex:1}}>
      <Text style={styles.head}>Intro</Text>
      <ScrollView style={styles.cont}>
      <Text style={{textAlign:'justify'}}>{para}</Text>
      
      </ScrollView>
      <Text style={{position:'relative',marginTop:100}}></Text>
    </View>
  )
}

export default Desc

const styles = StyleSheet.create({
    main:{
      height:3000
    },
    head:{
      position:'relative',
      top:40,
      fontSize:24,
      marginLeft:15,
      fontWeight:'500'
    },
    cont:{
      position:'relative',
       top:80,
       width:320,
       marginLeft:10,
      height:3000

    }
})