import React from 'react'
import { ScrollView, View } from 'react-native'
import Docform from '../../components/docform'

export default function Docpush({navigation,route}){
    return (
        <View>
            <Docform navigation={navigation}/>
        </View>
    )
}