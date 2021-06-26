
import React from 'react'
import { View,TextInput,Text,TouchableOpacity } from 'react-native';
import style from './style'
import { Formik } from 'formik'
import { loginSchema } from '../../utils/validationSchemas';
import { useNavigation } from '@react-navigation/core';


export default class LoginForm extends React.Component{
    render(){
        return (
            <View style={style.container}>
                <Text style={style.logo}>Comprova</Text>
                <Formik
                    validationSchema= {loginSchema}
                    initialValues={{login:'',password:''}}
                    onSubmit = {values => {}} 
                >{({handleChange, handleBlur, handleSubmit, values,errors,isValid}) => (
                    <>
                        <View style={style.inputView} >
                            <TextInput
                            name='login'
                            style={style.inputText}
                            placeholder="Login"
                            placeholderTextColor="#003f5c"
                            onChangeText={handleChange('login')}
                            value={values.login}>
                            </TextInput>
                            {errors.login && <Text style={{ fontSize: 10, color: 'red'}}>{errors.login}</Text> }
                        </View>
                        <View style={style.inputView} >
                            <TextInput
                                name='password' 
                                style={style.inputText}
                                secureTextEntry
                                placeholder="Senha" 
                                placeholderTextColor="#003f5c"
                                onChangeText={handleChange('password')}
                                value={values.password}/>
                                {errors.password && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text> }
                        </View>
                        <TouchableOpacity>
                            <Text style={style.forgot}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.loginBtn} disabled={!isValid} onPress={handleSubmit}>
                            <Text style={style.loginText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Signup')}}>
                            <Text style={style.loginText}>Cadastrar</Text>
                        </TouchableOpacity>
                </>
                )}
                </Formik>
            </View>
            
        )
    }
}

