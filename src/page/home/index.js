import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Button } from 'react-native';

export default function HomePage(){
    const navigation = useNavigation();
    return(
        <View>
            <Text>HOME</Text>
            <Button title="to Login" onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}