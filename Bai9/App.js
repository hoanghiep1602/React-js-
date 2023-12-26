import React from 'react';
import Loginform from './components/Loginform'
import SignUpfrom from './components/SignUpform'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductForm from './components/Produceform'
import OderformForm from './components/Orderform'
import EventForm from './components/EventForm'


const Stack = createStackNavigator();
function MyStack ()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Loginform} />
      <Stack.Screen name="Signup" component={SignUpfrom} />
    </Stack.Navigator>
  )
}
export default function App() {
   <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  return (
  

   
   //<Loginform></Loginform>
    //<SignUpfrom></SignUpfrom>
    //<ProductForm></ProductForm>
     <ProductForm></ProductForm>
    //<OderformForm></OderformForm>
    //<EventForm></EventForm>

   

  )
}