import React from 'react'
import {View} from 'react-native'
import styles from '../failedDocPush/style'

export default function FailedDoc(){

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Falha no envio</Text>
            </View>
            <View>
            <Text style={{color: '#039384',fontSize: 18, fontFamily: 'OpenSans', marginTop: 16,marginBottom: 32}}>Trocar titularidade de IPTU</Text>
                <View style={styles.centralizedData}>
                    <Text>Alguns documnetos estão com {'\n'}problemas de serem enviados</Text>
                    <Tex>Status: Necessario reenviar documentos</Tex>
                </View>
                <View style={styles.centralizedData}>
                        <TouchableOpacity style={styles.anexButton}>
                            <Text style={styles.buttonText}>RETORNAR</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}