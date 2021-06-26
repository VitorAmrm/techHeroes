import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../page/login'
import SignupPage from '../page/signup'
import HomePage from '../page/home'

const AppStack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={LoginPage} />
                <AppStack.Screen name="Home" component={HomePage}/>
                <AppStack.Screen name="Signup" component={SignupPage}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}