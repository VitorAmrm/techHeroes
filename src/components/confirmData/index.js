import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import { styles } from './style'


export default function DataFormComponent ({navigation, data}){

    return (
        <View style={styles.container}>
        <View style={styles.capsuleMargin}>
            <Text style={styles.text4}>Estes são seus dados cadastrados em</Text>
            <Text style={styles.text7}>Prefeitura de João Pessoa - PB</Text>
        </View>
        <View style={styles.capsuleMargin}>
            <Text style={styles.text4}>Nome:</Text>
            <Text style={styles.text7}>
                {data.name}
            </Text>
        </View>
        <View style={styles.capsuleMargin}>
            <Text style={styles.text4}>Data de Nascimento:</Text>
            <Text style={styles.text7}>
                {data.data_nascimento}
            </Text>
        </View>
        <View style={styles.capsuleMargin}>
            <Text style={styles.text4}>CPF:</Text>
            <Text style={styles.text7}>
                {data.cpf}
            </Text>
        </View >
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.danger} onPress={() => {navigation.navigate('BioPass')}}>
                <Text style={styles.textDanger}>Não sou eu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.success} onPress={() => {navigation.navigate('Home',data)}}>
                <Text style={styles.textSuccess}>Confirmar dados</Text>
            </TouchableOpacity>
        </View>
            
        </View>

    )
}

