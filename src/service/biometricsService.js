import { axios } from 'axios';
import { environment } from '../../environment/environment';



    export function registrationBiometricsData(){
        return axios.post(`${environment.baseurl}/multibiometrics/enroll`)
    }
    export function verificationBiometricsData(data){
         
    }

