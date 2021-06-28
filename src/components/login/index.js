
import React,{useState} from 'react'
import { View,TextInput,Text,TouchableOpacity,Image,Button } from 'react-native';
import style from './style'
import Camera from '../camera';


export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cameraActive: false
        }
    }

    render(){
        return (
            <View style={style.container}>
                <Image source={require("../../../assets/zerafila_logo.png")} style={style.logo}/>
                <Button onPress={() => this.props.navigation.navigate('Home')}></Button>
            </View>
            
        )
    }
}

