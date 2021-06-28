import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Button } from 'react-native';
import { firebaseAuth } from '../../../environment/firebase/config';
import HomeComponent from '../../components/home'

export default function HomePage({navigation,route}){
    return(
        <View>
            <HomeComponent navigation={navigation} data={route.params}></HomeComponent>
        </View>
    )
}