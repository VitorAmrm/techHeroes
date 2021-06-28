import {StyleSheet} from 'react-native'
import { environment } from '../../../environment/environment'

export const styles = StyleSheet.create(
    {

        header:{
            backgroundColor: environment.colors.light_btn_raised,
            height: 75,
            paddingStart: 39,
            paddingTop: 36
        },
        dataContainer:{
            marginTop: 32,
            display:'flex',
            alignItems: 'flex-start',
            marginStart: 40
        },
        text4:{
            fontFamily: 'OpenSans',
            fontWeight: '400',
            color: 'black',
            fontSize: 12,
        },
        text7:{
            fontFamily: 'OpenSans',
            fontWeight: '700',
            color: 'black',
            fontSize: 14,
        },
        serviceContainer:{
            marginTop: 32,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            padding: 32
        },
        serviceButtonContainer:{
            marginTop: 16,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal:12,
        },
        serviveButton:{
            backgroundColor: environment.colors.btn_raised,
            marginHorizontal:12,
            borderRadius: 6 ,
            width:140,
            height:140,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            },
            textButton:{
            color: 'white',
            textAlign: 'center',
            paddingVertical: 28,
            paddingHorizontal: 3,
        },disabledTextButton:{
            color: '#8D9090',
            textAlign: 'center',
            paddingVertical: 28,
            paddingHorizontal: 3,
        },
        disabledButton:{
            backgroundColor: '#E3EDF1',
            marginHorizontal:12,
            borderRadius: 6 ,
            width:140,
            height:140,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        loadingContainer:{
            paddingTop:32,
            borderBottomWidth: 1,
            paddingBottom:32,
        },
        textWrap:{
            marginStart: 40
        },
        marginTextWrap:{
            marginTop:32
        },
        linkButton:{
            marginTop:8,
            textDecorationLine: 'underline'
            
        },
        title:{
            fontFamily: 'OpenSans',
            fontWeight: '700',
            color: 'black',
            fontSize: 18,
        }
        })