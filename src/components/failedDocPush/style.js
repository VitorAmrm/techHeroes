import { StyleSheet } from "react-native"
import {environment} from "../../../environment/environment"
export const styles = StyleSheet.create(
    {

        header:{
            backgroundColor: environment.colors.btn_raised,
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
            
        },title:{
            fontFamily: 'OpenSans',
            fontWeight: '700',
            color: 'black',
            fontSize: 18,
        },anexButton:{
            backgroundColor: environment.colors.btn_raised,
            marginHorizontal:32,
            marginVertical:12,
            borderRadius: 6 ,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },centralizedData:{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText:{
            marginVertical:14,
            marginHorizontal:32,
            color: 'white'
        }
    })