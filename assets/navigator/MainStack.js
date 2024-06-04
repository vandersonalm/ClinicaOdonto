import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'
import ForgotScreen from '../pages/ForgotPassword'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Clínica Odontológica',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000099',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold'
        }
      }}/>
      <MainStack.Screen name='About' component={AboutScreen} option={
        ({route})=>({
          title: route.params.name
        })
      }/>

      <MainStack.Screen name='Forgot' component={ForgotScreen} option={
        ({route})=>({
          title: route.params.name
        })
      }/>
    </MainStack.Navigator>
  )
}