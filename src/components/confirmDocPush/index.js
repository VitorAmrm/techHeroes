import React from 'react'
import {View} from 'react-native'
import styles from './style'

export default function ConfirmDoc(){

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Confirmação</Text>
            </View>
            <View>
            <Text style={{color: '#039384',fontSize: 18, fontFamily: 'OpenSans', marginTop: 16,marginBottom: 32}}>Trocar titularidade de IPTU</Text>
                <View style={styles.centralizedData}>
                    <Text>Documentos enviados com sucesso!</Text>
                    <Tex>Status: Aguardando aprovação</Tex>
                </View>
                <View style={styles.centralizedData}>
                        <TouchableOpacity style={styles.anexButton}>
                            <Text style={styles.buttonText}>Anexar</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}