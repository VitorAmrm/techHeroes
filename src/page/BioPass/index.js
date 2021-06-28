import React from 'react'
import Camera from '../../components/camera'
import { View } from 'react-native'

export default function BioPass({navigation,route}){

    return (
        <View>
            <Camera navigation={navigation} data={route.params}></Camera>
        </View>
    );
}