import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTable from './HomeTable';
import HomeBanquet from './HomeBanquet';
import Support from './Support';
import Home from './Home';
import Menu from './Menu';
import Banquet from './Banquet';
import Prompt from './Prompt';
import TableForm from './ChooseTable';
import Desc from './Desc';

export default function App() {
  const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer >
     
      <Stack.Navigator style={styles.main} screenOptions={{headerShown:false}}>

<Stack.Group>
<Stack.Screen name="ht" component={HomeTable}/>
<Stack.Screen name="hb" component={HomeBanquet}/>
<Stack.Screen name="support" component={Support}/> 
<Stack.Screen name="Tf" component={TableForm}/>


  
{/* <Stack.Screen name="Welcome" component={Intro}/> */}

<Stack.Screen name="home" component={Home}/>
<Stack.Screen name="Menu" component={Menu}/>
<Stack.Screen name="Banquet" component={Banquet}/>
<Stack.Screen name="Desc" component={Desc}/>

<Stack.Screen name="Prompt" component={Prompt}/>






</Stack.Group> 

{/* <Stack.Group>
<Stack.Screen name="Table" component={HomeTable}/>
<Stack.Screen name="Banq" component={HomeBanquet} />
<Stack.Screen name="Dinning" component={Dinning}/>
 

</Stack.Group> */}


</Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
