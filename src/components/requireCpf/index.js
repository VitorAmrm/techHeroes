import React from 'react'
import { View, TouchableOpacity,TextInput,Text } from 'react-native'
import {style} from './style'

export default function RequireCpf({navigation}){
    const [input, setInput] = React.useState('');
    return (
        <View>
            <View style={style.header}>
                <Text style={style.title}>Entrar</Text>
            </View>
            <View style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
            <View>
                <Text style = {{margin: 32}}>Para acessar os serviçoes primeiro informe{'\n'} seu CPF:</Text>
                <TextInput style = {{margin: 32,backgroundColor:'#E3EDF1',color:'#8D9090'}} placeholderTextColor='#8D9090' placeholder='Insira CPF' onChangeText={setInput}></TextInput>
            </View>
            <View>
                <TouchableOpacity style={[style.anexButton,{top:500}]} onPress={() => navigation.navigate('BioPass',{cpf:input}) }>
                <Text style = {style.buttonText}>ENVIAR</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
        
    )
}