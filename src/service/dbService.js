import { firebaseAuth, firebaseDB } from "../../environment/firebase/config";
import Toast from "react-native-tiny-toast";




    export function logIn(values){
        firebaseAuth.signInWithEmailAndPassword(values.login,values.password).catch(error => Toast.show('Senha ou login incorreto, tente novamente') )
    }
    
    export function logOut(){
        firebaseAuth.signOut()
    }

    export function retrieveData(cpf){
        const data = {}
        console.log('ref');
        return firebaseDB.ref('users').orderByChild('cpf').equalTo(cpf)
    }
