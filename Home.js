import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import {React ,useEffect,useState}from 'react'
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation=useNavigation();

   const openGps = (lat, lng) => {
        // var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        // var url = scheme + `${lat},${lng}`;
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=RaddisonBlueKaushambiDelhi');
      }

    const checkTime=()=>{
        let d = new Date(); // for now
let h=d.getHours(); // => 9

// d.getMinutes(); // =>  30
// d.getSeconds(); // => 51
        if(h>=21 && h<24){
            alert('Will Close Soon')
        }
        else if(h>8 && h<24){
            alert('Currently Open')
        }
        else if(h>=7){
            alert('Will be open soon')
        }
        else {
            alert('Closed')
        }
        
    }

    const phoneNumber= 8218191109;

    const para=`Welcome to our restaurant booking app, In this amazing app we makes planning your perfect outing or celebration and many more events. This app lets you discover fantastic restaurants and explore their vibes from the comfort of your phone. Not only that, but you can also reserve a table with the seating arrangement of your choice whether you prefer a cozy corner or a spot by the window.

    This cool app lets you check out three amazing restaurants — Raj Mahal, Sheesh Mahal and Taj Mahal. You can explore the unique vibes of each spot, helping you choose the perfect sitting for your meal or event.
    
    Raj Mahal:
    Raj Mahal is a charming restaurant known for its authentic Indian cooking and royal experience. Located in the heart of the city, it captures the essence of royal dining with its rich decor. The menu at Raj Mahal gives a variety of flavored dishes, from classic curries to delightful tandoori specialties. The restaurant's area is nestled in a bustling neighborhood, making it a convenient and delightful choice for those who seeking a taste of India's royal experience.
    
    Taj Mahal:
    Taj Mahal stands as an iconic restaurant, offering a fusion of Indian and international flavors. Situated in an upscale area, this dining gem gives a blend of traditional and modern architecture, creating a beautiful atmosphere with excessive greenery. The delicious menu at Taj Mahal features wonderful dishes prepared with premium ingredients, ensuring a dining experience that's both luxurious and memorable. Whether you are a fan of traditional Indian fare, Taj Mahal promises a premium journey from the start to the end.

    Sheesh Mahal:
    Step into the attractive world of Sheesh Mahal, a restaurant known for its complicate decor and delecious North Indian food with lots of mirrors and warm lights. This restaurant serves really tasty North Indian food, especially delicious kebabs and grilled dishes. It's not a huge place, but it's cozy and perfect for a nice dinner with friends or family. So, if you're in the mood for some yummy Indian food in a pretty setting, Sheesh Mahal is the place to be!
    
    In simple terms, our app is your solution for a fantastic dining and celebration experience! Whether you're exploring the vibes of restaurants like Raj Mahal, Taj Mahal, and Sheesh Mahal or booking a table with custom seating, our app has got you all covered. It makes discovering great places and planning personalized events`

    const[detail,setDetail] = useState(para.substring(0,230));
  

    const[count,setCount]=useState(0); 
    const[ref,setRef]=useState(null);

    const Images=[
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345379828.jpg?k=dad42522d0246b1bfaeb7e026897fcc7712f2c900664ac90f79a4bdfb9a91b34&o=&hp=1',

        'https://www.kayak.co.in/rimg/himg/7a/70/62/ice-114048-72183831_3XL-105259.jpg?width=1366&height=768&crop=true',

        'https://cdn0.weddingwire.in/vendor/6217/3_2/1280/jpg/resorts-destination-weddings-radisson-blu-hotel-spa-nashik-accommodation-5_15_396217-164206714830009.jpeg',

        'https://www.kayak.co.in/rimg/himg/0c/d3/4d/ice-116437-72663126_3XL-726788.jpg?width=1366&height=768&crop=true',

        'https://b.zmtcdn.com/data/pictures/3/19945303/41034c305133176d499ae109cf818b8e.jpg?fit=around|960:500&crop=960:500;*,*',

        'https://media.weddingz.in/images/814499870e5c47cbb919d2a08597bd56/radisson-blu-agra-taj-east-gate-radisson-blu-agra-taj-east-gate-mansion-2.jpg'
    ] 

    

    useEffect(() => { 
  
        //Implementing the setInterval method 
        const interval = setInterval(() => { 
           
            try{
                ref.scrollTo({
                    x:count,
                    y:0,
                    animated:true
                }) 
            }
            catch(e){
                setCount(0)
            }
                  
 
            if(count>=((Images.length-1)*340))
            setCount(0);

            else 
            setCount(count+360);

        }, 1800); 
  
        //Clearing the interval 
        return () => clearInterval(interval); 
    }, [count]); 
    return (
        <View style={styles.main}>
      <ScrollView horizontal={true} pagingEnabled ref={(ref) => {
          setRef(ref);
        }} >
        {Images.map((link,i)=>{
            return(
                <Image style={styles.img} src={link} key={i}></Image>
                )
            })}  
     
      </ScrollView>

      <View style={styles.content}> 

      <View style={styles.name}>
      <Text style={styles.head}>Raddison Blu</Text>
      <Image style={styles.localImg} source={require('./assets/location.png')}></Image>
      <Text style={styles.local} onPress={()=>openGps('28.7041° N','77.1025° E')}>Kaushambhi, Delhi</Text>
      <Image style={styles.timeImg} source={require('./assets/clock.png')}></Image>

      <Text style={styles.time} onPress={()=>checkTime()}>09:00 am to 11:59 pm</Text>
        
      <View style={styles.maps} onTouchStart={()=>Linking.openURL('https://www.google.com/maps/search/?api=1&query=RaddisonBlueKaushambiDelhi')} >
      <Image style={styles.send }  source={(require('./assets/send.png'))}></Image>
      </View>
      </View>

     
        <Text style={styles.desc}>{detail}
        <TouchableOpacity onPress={()=>navigation.navigate('Desc',para)}>
        <Text style={{color:'purple'}} >.............See more</Text>
        </TouchableOpacity>
        </Text>

        <View style={styles.optCont}>
            <TouchableOpacity style={styles.opt} onPress={()=>navigation.navigate('Tf')}>
                <Image style={[styles.optImg,styles.optImg1]} source={require('./assets/chair.png')}></Image>
                <Text style={[styles.optText,styles.optText1]}>Book a Table</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opt} onPress={()=>navigation.navigate('Banquet')}>
                <Image style={styles.optImg} source={require('./assets/theater.png')}></Image>
                <Text style={styles.optText}>Book a Banquet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.opt,styles.otp3]} onPress={()=>navigation.navigate('Menu')}>
                <Image style={styles.optImg} source={require('./assets/menu.png')}></Image>
                <Text style={styles.optText}>Explore Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.opt,styles.otp4]} onPress={()=>Linking.openURL(`tel:${phoneNumber}`)}>
                <Image style={styles.optImg} source={require('./assets/telephone.png')}></Image>
                <Text style={styles.optText}>Contact Us</Text>
            </TouchableOpacity>

         </View>

     </View>  
    </View>
  )
}



const styles = StyleSheet.create({
    
    img:{
        height:300,
        width:360,
        marginTop:0,

    

    },
    content:{
        // borderColor:'red',
        // borderWidth:2,
        // borderStyle:'solid',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        position:'relative',
        bottom:25,
        backgroundColor:'white',
        height:500
        
        // overflow:'scroll',
        
    },
    head:{
        color:'purple',
        fontWeight:'700',
        fontSize:27,
        marginLeft:22,
        marginTop:17
        
    },

    localImg:{
        height:14,
        width:14,
        marginTop:3,
        marginLeft:21
    },

    local:{
        position:'relative',
        bottom:17,
        left:31,
        color:'grey',
        marginLeft:9,
        width:120
    },
    time:{
        position:'relative',
        bottom:31,
        left:39,
        color:'grey',
        width:137

        // right:10
    },
    timeImg:{
        height:16,
        width:16,
        // marginTop:3,
        marginLeft:21,

        position:'relative',
        bottom:13,
        marginRight:4
    },
    maps:{
        height:36,
        width:36,
        zIndex:50,
        position:'relative',
        bottom:90,
        left:300,
        borderRadius:25,
        padding:7,
        borderStyle:'solid',
        borderColor:'rgb(131, 131, 131)',
        borderWidth:1
    }, 

    send:{
        height:20,
        width:20, 
        zIndex:50,
        

    },
    name:{
        // borderBottomColor:'grey',
        // borderBottomWidth:1,
        // borderBottomStyle:'solid',
        // borderRadius:8,
        height:130
    },
    desc:{
        marginLeft:15,
        letterSpacing:0.1,
        color:'rgb(107, 107, 107)',
        position:'relative',
        bottom:10
    },
    optCont:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        marginLeft:53,
        marginTop:10
    },
    opt:{
        // borderColor:'pink',
        // borderWidth:1,
        // borderStyle:'solid',
        width:120,
        padding:8,
        paddingVertical:20,
        marginRight:10,
        marginTop:10,
        borderRadius:7,
        height:100,
        backgroundColor:'rgb(251, 238, 255)',
        elevation:3
        
       },
    optImg:{
        height:20,
        width:20,
        alignSelf:'center',
        marginBottom:13
    },
    optImg1:{
        height:35,
        position:'relative',
        bottom:7,
    
    },
    optText:{
        textAlign:'center',
        color:'purple',
     
        
    },
    optText1:{
        position:'relative',
      bottom:14
    },

    otp3:{
        height:95
    },
    
    otp4:{
        height:95
    },
   
    menu:{
        
    }

    
})