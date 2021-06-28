import React from 'react'
import { styles } from '../confirmBiopass/style';
import { View, Text ,Image} from 'react-native'
import {retrieveData} from '../../service/dbService'
import Toast from "react-native-tiny-toast";
import axios from 'axios';
import { environment } from '../../../environment/environment'


export default class Confirm extends React.Component{
    
    constructor(props){
        super(props);
         
    }
    state = {
        user : ''
    }
    setUser = (user) => {
            this.setState({user: user})
    }
    
     data  = this.props.data.data

    async componentDidMount() {
        let person = {CPF:this.data.cpf, Face: this.data.biopass.base64}
        let api = axios.create();
        let headers = {'Ocp-Apim-Subscription-Key':'b4556c5aa7d6485983253e31ef182e39'}
        api.post(`${environment.baseurl}/check-gov-br/facecheck`,{'FaceCheck': person},{headers})
            .then(response => {
                 let similarity = response.data.Result['Similarity ']
                if(similarity > 0.9){
                    console.log('aqui')
                    retrieveData(this.data.cpf).on('child_added', (snapshot)=> {this.setUser(snapshot.val())})
                    this.props.navigation.navigate('confirmData',this.state.user)
                }else{
                    this.props.navigation.navigate('InputCpf')
                    Toast.show('Sua biometria ficou com um baixo nivel de similaridade, tente novamente')
                }
                })
            .catch(error => Toast.show('Algo deu errado, não foi possivel validar sua biometria'))
    
            }
    
    

    render (){
        return (
        <View >
            <View style={styles.header}>
                <Text  style={styles.title}>Confirmação</Text>
            </View>
            <View style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Image style={{marginTop:71}}  width={300} height={300} source={require('../../../assets/confirmation.png')}/>
                <View>
                    <Text style={{marginTop:32, color:'#039384',fontFamily:"OpenSans", fontSize:18}} >Imagem em Análise!</Text>
                </View>
                <View >
                    <Text style={{marginTop:64,fontFamily:"OpenSans", fontSize:12}}>Aguardando o carregamento dos seus dados...</Text>
                </View>
            </View>
        </View>
        )
    };
}