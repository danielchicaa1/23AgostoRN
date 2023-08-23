import { useState , useEffect } from "react";
import { StyleSheet, Text, View  , TextInput , Button , TouchableOpacity} from "react-native";
import { styles, myimage } from "./mycalc/assets/Styles/styles1";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function App() {
  //States
  const[value1,setValue1]= useState('')
  const[value2,setValue2]= useState('')
  const[result, setResult]=useState('')

  let mymess = "Este es el pie de la GUI";
  let mimage = "cientifica.jpg";
  return (
    <View style={styles.container}>
      <Banner imagename={mimage}/>
      <view style={{ flex:4,backgroundColor:'gray', width:'100%',
                    alignItems:'center', justifyContent:'center'}}/>
        <text>Calculadora</text>
        <text>valor 1</text>
        <TextInput 
          placeholder='Ingrese el valor 1'
          onChangeText={value1 => setValue1(value1)}
          value={value1}
          style={styles.tInputs}/>

        <text>valor 2</text>
        <TextInput 
          placeholder='Ingrese el valor 2'
          onChangeText={value2 => setValue2(value2)}
          value={value2}
          style={styles.tInputs}/>

        <view style={{flexDirection:'row', marginTop:20}}>
            <TouchableOpacity>
              style={{backgroundColor:'green',padding:5 , borderRadius:10}}
              <text style={{fontWeight:'bold'}}>+</text>
            </TouchableOpacity>

            <TouchableOpacity>
              style={{backgroundColor:'gray',padding:5 , borderRadius:10 ,marginLeft:5}}
              <text style={{fontWeight:'bold'}}>-</text>
            </TouchableOpacity>
          </view>

      <view style={{flex:1 , alignItems:'center' , justifyContent:'center'}}>
        <footer message="este es el pie"></footer>
      </view>
    </View>
  );
}