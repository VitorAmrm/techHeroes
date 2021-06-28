import {View, Text,Modal,TextInput, TouchableOpacity, StyleSheet,Button, Dimensions} from 'react-native'
import React from 'react'
import { RNCamera } from 'react-native-camera';
import { environment } from '../../../environment/environment'; 
import Toast from 'react-native-tiny-toast';
 
  export default class Camera extends React.Component {
    state = {
      modalVisible: false,
      input:'',
      biopass: ''
    };
    constructor(props){
      super(props)
    }

    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
    setInput = (text) => {
      this.setState({input: text})
    }
    setBiopass = (biopass) =>{
      this.setState({biopass: biopass})
      this.retrieve()
    }
    
    retrieve(){
      const data = {biopass: this.state.biopass, cpf: this.props.data.cpf}
      this.props.navigation.navigate('ConfirmBioPass',{data: data})
    }

    render() {

      return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ENQUADRE SEU ROSTO DENTRO DO RETANGULO:</Text>
        </View>
        <View> 
        <RNCamera
             ref={ref => {
               this.camera = ref;
            }} 
            style = {styles.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: "Permissão para usar a câmera",
              message: "Precisamos da sua permissão para usar a câmera.",
              buttonPositive: "Ok",
              buttonNegative: "Cancelar"
              }}
        />
        </View>
        
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style = {styles.capture} 
                  title='take pic' full info onPress={() => this.takePicture()}>
              <Text style = {{color: 'white'}}>Capturar</Text>
          </TouchableOpacity>
        </View>        
      </View>
      );
    }
  
    takePicture = async () => {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        await this.camera.takePictureAsync(options).then(data => {this.setBiopass(data)}).catch(error => {console.log(error);Toast.show('Algo deu errado')})
        
      }
    };
  }

  
  const styles = StyleSheet.create({
    container: {
      display:'flex',
      height:'100%',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 100
    },
    preview: {
      height:'75%',
      margin:50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    capture: {
      backgroundColor: environment.colors.btn_raised,
      borderRadius: 64,
      padding: 40,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    header:{
      position: 'absolute',
      top:0,
      left: 0,
      width: Dimensions.get('screen').width,
      backgroundColor: '#384241',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:30,
      paddingVertical:23,
      opacity: .5,

    },
    headerText:{
      color: 'white',
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'OpenSans',
      marginHorizontal: 30

    }
  });