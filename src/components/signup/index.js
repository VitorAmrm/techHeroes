
import React from 'react'
import { View,TextInput,Text,TouchableOpacity } from 'react-native';
import style from './style'
import { Formik } from 'formik'

export default class SignupForm extends React.Component{
    render(){
        return (
            <View style={style.container}>
                <Text style={style.logo}>Comprova</Text>
                <Formik
                    initialValues={{login:'',password:''}}
                    onSubmit = {values => {}} 
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <>
                        <View style={style.inputView} >
                            <TextInput
                            name='login'
                            style={style.inputText}
                            placeholder="Login"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({login:text})}>
                            </TextInput>
                        </View>
                        <View style={style.inputView} >
                            <TextInput
                                name='password' 
                                style={style.inputText}
                                secureTextEntry
                                placeholder="Digite a Senha" 
                                placeholderTextColor="#003f5c"
                                onChangeText={text => this.setState({password:text})}/>
                        </View>
                        <View style={style.inputView} >
                            <TextInput
                                name='password2' 
                                style={style.inputText}
                                secureTextEntry
                                placeholder="Digite a Senha novamente" 
                                placeholderTextColor="#003f5c"
                                onChangeText={text => this.setState({password:text})}/>
                        </View>
                        <TouchableOpacity>
                            <Text style={style.forgot}>Já tenho Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.loginBtn}>
                            <Text style={style.loginText}>Cadastrar</Text>
                        </TouchableOpacity>
                </>
                )}
                </Formik>
            </View>
            
        )
    }
}

