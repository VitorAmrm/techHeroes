import {StyleSheet} from 'react-native'
import { environment } from '../../../environment/environment'
import { Dimensions } from 'react-native'


export const styles = StyleSheet.create(
    {

        header:{
            backgroundColor: environment.colors.light_btn_raised,
            height: 75,
            paddingStart: 39,
            paddingTop: 36
        },
        firstdataContainer:{
            paddingTop: 32,
            display:'flex',
            alignItems: 'flex-start',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            
        },
        restdataContainer:{
            paddingTop: 32,
            display:'flex',
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            
        },
        borderConteiner:{
            marginStart: 10,
            
        },
        anexButton:{
            backgroundColor: environment.colors.btn_raised,
            marginHorizontal:32,
            marginVertical:12,
            borderRadius: 6 ,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        centralizedData:{
            width: Dimensions.get('screen').width,
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        numberText:{
            marginTop:16,
            marginStart: 16,
            marginBottom: 16
        },principalText:{
            marginBottom:8,
            color: '#434D4C',
            fontWeight:'bold',
            fontFamily: 'OpenSans',
            fontSize:12
        },buttonText:{
            marginVertical:14,
            marginHorizontal:32,
            color: 'white'
        },
        success:{
            backgroundColor: environment.colors.success,
            marginHorizontal:32,
            marginVertical:12,
            borderRadius: 6 ,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: .5
        },
        danger:{
            marginHorizontal:32,
            marginVertical:12,
            borderRadius: 6 ,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
    
        },containerDisplay:{
            padding: 32,
            display: 'flex',
            flexDirection: 'row'
        },
        textDanger:{
            marginVertical:14,
            marginHorizontal:32,
            color: environment.colors.danger,
        },
        textSucess:{
            marginVertical:14,
            marginHorizontal:32,
            color: '#039384'
        },
        title:{
            fontFamily: 'OpenSans',
            fontWeight: '700',
            color: 'black',
            fontSize: 18,
        }
    })