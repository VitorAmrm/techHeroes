import { StyleSheet } from "react-native";
import { environment } from "../../../environment/environment";

export const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWimage:{
        color: '#039384',
        marginTop: 32
    },
    containerTextBot:{
        color: 'black'
    },
    title:{
        fontFamily: 'OpenSans',
        fontWeight: '700',
        color: '#434D4C',
        fontSize: 18,
    },
    header:{
        backgroundColor: environment.colors.light_btn_raised,
        height: 75,
        paddingStart: 39,
        paddingTop: 36
    }
})