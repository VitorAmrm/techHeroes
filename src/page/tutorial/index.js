import React from 'react'
import { View } from 'react-native'
import ButtonNavigation from '../../components/tutorial'


export default function Tutorial({navigation}) {
    return (
        <View>
            <ButtonNavigation navigation={navigation}/>
        </View>
    )
}