import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Button } from 'react-native';
import  LoginForm from '../../components/login';

export default function LoginPage({navigation}){
    return(
        <View>
            <LoginForm navigation={navigation}/>
        </View>
    )
}