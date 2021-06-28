import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../page/login'
import Tutorial from '../page/tutorial'
import BioPass from '../page/BioPass'
import ConfirmBioPass from '../page/ConfirmBioPass'
import ConfirmData from '../page/ConfirmData'
import HomePage from '../page/home'
import Docpush from '../page/Docpush'
import ConfirmDocPush from '../page/ConfirmDocPush'
import InputCpf from '../page/inputCpf'
import TermoDeUso from '../components/termoDeuso'

const AppStack = createStackNavigator();

export default function SignInStack(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Tutorial" component={Tutorial}/>
                <AppStack.Screen name="InputCpf" component={InputCpf}/>
                <AppStack.Screen name="BioPass" component={BioPass}/>
                <AppStack.Screen name="confirmData" component={ConfirmData}/>
                <AppStack.Screen name="Home" component={HomePage}/>
                <AppStack.Screen name="ConfirmBioPass" component={ConfirmBioPass}/>
                <AppStack.Screen name="DocPush" component={Docpush}/>
                <AppStack.Screen name="Login" component={LoginPage}/>
                <AppStack.Screen name="ConfirmDocPush" component={ConfirmDocPush}/>
                <AppStack.Screen name='TermoDeUso' component={TermoDeUso}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
//