import {StyleSheet} from 'react-native'
import {environment} from '../../../environment/environment'

export const styles = StyleSheet.create({

    success:{
        backgroundColor: environment.colors.success,
        paddingHorizontal: 40,
        paddingVertical: 20,
        
        marginHorizontal: 15,
        borderRadius: 6
    },
    danger:{
        backgroundColor: environment.colors.danger,
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
        top: 400


    },
    textDanger:{
        fontFamily: 'OpenSans',
        fontWeight: '700',
        color: 'white',
        fontSize: 14,
    },
    textSuccess:{
        fontFamily: 'OpenSans',
        fontWeight: '700',
        color: 'black',
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

})