import {StyleSheet} from 'react-native'
import {environment} from '../../../environment/environment'

export const style = StyleSheet.create(
    {
        title:{
           fontFamily: 'OpenSans',
           fontWeight: '700',
           fontSize: 12,
           fontWeight: 'bold',
           margin:10 
        },
        text:{
            fontFamily: 'OpenSans',
           fontWeight: '700',
           fontSize: 12,
           fontWeight: 'bold',
           margin:10
        },success:{
            backgroundColor: environment.colors.btn_raised,
            paddingHorizontal: 40,
            paddingVertical: 20,
            marginHorizontal: 15,
            borderRadius: 6,
            opacity: .1
        },
        danger:{
            backgroundColor: 'transparent',
            paddingHorizontal: 40,
            paddingVertical: 20,
            marginHorizontal: 15,
            borderRadius: 6,
            opacity: .9
    
        },
        buttonContainer:{
            display:'flex',
            flexDirection: 'row',
            marginHorizontal: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
        },
        textDanger:{
            fontFamily: 'OpenSans',
            fontWeight: '700',
            color: environment.colors.danger,
            fontSize: 14,
            textDecorationLine:'underline'
        },
        textSuccess:{
            fontFamily: 'OpenSans',
            fontWeight: '700',
            color: 'white',
            fontSize: 14,
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
        container:{
            alignItems: 'flex-start'
        },
        capsuleMargin:{
            marginHorizontal:15,
            marginVertical: 30
        },header:{
            backgroundColor: environment.colors.btn_raised,
            height: 75,
            paddingStart: 39,
            paddingTop: 36
        }
    }
)