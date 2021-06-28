import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { style } from './style'

export default function ConfirmDoc({navigation}){

    return (
        <View>
            <View style={style.header}>
                <Text style={style.title} >Confirmação</Text>
            </View>
            <View>
            <View style={style.centralizedData}>
                <Text style={{color: '#039384',fontSize: 18, fontFamily: 'OpenSans', marginTop: 16,marginBottom: 196}}>Trocar titularidade de IPTU</Text>
                
                    <Text style={style.title}>Documentos enviados com sucesso!</Text>
                    <Text style={[{marginTop:32},style.text]}>Status: Aguardando aprovação</Text>
                </View>
                <View style={[style.centralizedData,{marginTop:198}]}>
                        <TouchableOpacity style={style.anexButton} onPress={() => {navigation.navigate('Home',{aguardando: 'Solicitação Nº 324567757657 - Troca de titularidade IPTU'})}}>
                            <Text style={style.buttonText}>OK</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}