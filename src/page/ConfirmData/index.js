import React from 'react'

import { View } from 'react-native'
import DataFormComponent from '../../components/confirmData'

export default function ConfirmData({navigation,route}){
    return (
        <View>
            <DataFormComponent navigation={navigation} data={route.params}></DataFormComponent>
        </View>
    )
}