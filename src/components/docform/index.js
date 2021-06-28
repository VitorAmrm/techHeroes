import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export default function Docform({navigation}){

    return(
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Enviar documentos</Text>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#039384',fontSize: 18, fontFamily: 'OpenSans', marginTop: 16,marginBottom: 32}}>Trocar titularidade de IPTU</Text>
            
            <View style={{ display:'flex',alignItems: 'flex-start'}}>
                    <Text >Documentos necessários:</Text>
            </View>
            </View>
                    
            
            <View style={styles.firstdataContainer}>
                <View style={styles.borderConteiner}>
                    <Text style={styles.numberText}>1.</Text>
                    <View style={styles.centralizedData}>
                        <Text style={styles.principalText}>DOCUMENTO DE IDENTIFICAÇÃO COM FOTO</Text>
                        <View style={styles.centralizedData}>
                        <TouchableOpacity style={styles.anexButton}>
                            <Text style={styles.buttonText}>Anexar</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                </View>
            </View>
            <View style={styles.restdataContainer}>
                <View style={styles.borderConteiner}>
                    <Text style={styles.numberText}>2.</Text>
                    <View style={styles.centralizedData}>
                        <Text style={styles.principalText}>COMPROVANTE DE PAGAMENTO DO IPTU{"\N"} ATUALIZADO</Text>
                        <View style={styles.centralizedData}>
                        <TouchableOpacity style={styles.anexButton}>
                            <Text style={styles.buttonText}>Anexar</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                </View>
            </View>
            <View style={styles.restdataContainer}>
                <View style={styles.borderConteiner}>
                    <Text style={styles.numberText}>3.</Text>
                    <View style={styles.centralizedData}>
                        <Text style={styles.principalText}>COMPROVANTE DE PAGAMENTO DO ITBI OU{"\N"} ITCMD</Text>
                        <View style={styles.centralizedData}>
                        <TouchableOpacity style={styles.anexButton}>
                            <Text style={styles.buttonText}>Anexar</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                </View>
            </View>
            <View style={styles.restdataContainer}>
                <View style={styles.borderConteiner}>
                    <Text style={styles.numberText}>4.</Text>
                    <View style={styles.centralizedData}>
                        <Text style={styles.principalText}>DOCUMENTOS DE POSSE (ESCRITURA DO{"\n"} IMÓVEL OU CERTIDÃO DE REGISTRO DO{"\n"} IMÓVEL, EMITIDAS EM ATÉ 90 DIAS)</Text>
                        <View style={styles.centralizedData}>
                        <TouchableOpacity style={styles.anexButton}>
                            <Text style={styles.buttonText}>Anexar</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                </View>
            </View>
            <View>
                <View style={styles.containerDisplay}>
                <TouchableOpacity style={styles.danger}>
                            <Text style={styles.textDanger}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.success}>
                            <Text style={styles.buttonText}>Enviar tudo</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}