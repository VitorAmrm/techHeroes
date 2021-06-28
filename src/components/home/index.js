import { data } from 'browserslist'
import React from 'react'
import { TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { styles } from './style'


export default function HomeComponent ({navigation,data}){
    return (
        <ScrollView>
            <View style={styles.header}>
               <Text style={styles.title}>Olá, {data.name}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.title} >Seus Dados:</Text>
                <Text style={styles.text4}>Nome:</Text>
                <Text style={styles.text7}>{data.name}</Text>
                <Text style={styles.text4}>Nascimento:</Text>
                <Text style={styles.text7}>{data.data_nascimento}</Text>
                <Text style={styles.text4}>CPF:</Text>
                <Text style={styles.text7}>{data.cpf}</Text>
            </View>
            <View style={styles.serviceContainer}>
                    <Text  style={styles.title}>Serviços</Text>
                    <View style={styles.serviceButtonContainer}>
                    <TouchableOpacity style={styles.serviveButton} onPress={() => navigation.navigate("DocPush")}> 
                        <Text style={styles.textButton}>Solicitar trocar titularidade{'\n'} de IPTU</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.disabledButton} disabled>
                         <Text style={styles.disabledTextButton}>
                            Em breve mais{'\n'}serviços
                        </Text>
                    </TouchableOpacity>
                    </View>
            </View>
            <View style={styles.loadingContainer}>
                <View style={styles.textWrap} >
                    <Text  style={styles.title} >Aguardando aprovação</Text>
                    {console.log(data.aguardando)}
                    {!data.aguardando ?<Text style={styles.marginTextWrap}>Nenhum documento aguardando{'\n'}aprovação</Text>:<Text style={styles.marginTextWrap}>{data.aguardando}</Text>}
                </View>
            </View>
            <View style={styles.loadingContainer}>
            <View style={styles.textWrap} >
                    <Text  style={styles.title}>Concluídos</Text>
                    <Text style={styles.marginTextWrap}>Nenhum processo concluido</Text>
                </View>
            </View >
            <View style={styles.loadingContainer}>
                <View  style={styles.textWrap}>
                
                    <Text  style={styles.title}>Mais Opções</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('TermoDeUso')}>
                        <Text style={styles.linkButton}>Acessar Termos de Uso e Aviso de Privacidade</Text>
                    </TouchableOpacity>
                    <Text style={styles.linkButton}>Ajuda</Text>
                    <Text style={styles.linkButton}>Sobre</Text>
                </View>
            </View>
        </ScrollView>
    )
}