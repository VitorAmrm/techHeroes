
import React from 'react'
import { Text, View, Button } from 'react-native';
import RequireCpf from '../../components/requireCpf';

export default function InputCpf({navigation,route}){
    return(
        <View>
            <RequireCpf navigation={navigation} data={route.params}></RequireCpf>
        </View>
    )
}