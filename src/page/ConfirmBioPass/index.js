import React from 'react'
import Confirm from '../../components/confirmBiopass'
import { View } from 'react-native'

export default function ConfirmBioPass({navigation,route}){

    return (
        <View>
            <Confirm navigation={navigation} data={route.params}></Confirm>
        </View>
    );
}
