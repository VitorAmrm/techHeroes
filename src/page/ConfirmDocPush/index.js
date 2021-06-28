import React from 'react'
import ConfirmDoc from '../../components/confirmDocPush'
import { View } from 'react-native'
export default function ConfirmDocPush({navigation,route}){
    return (
        <View>
            <ConfirmDoc navigation={navigation} data={route.params} />
        </View>
    )
}