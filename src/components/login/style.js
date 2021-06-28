import { StyleSheet } from "react-native";
import { environment } from "../../../environment/environment";

export default style = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: environment.colors.splash_background,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    justifyContent:"center",
    height:50,
    marginBottom:20,
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
})