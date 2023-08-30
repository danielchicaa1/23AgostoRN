import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles, myimage } from "./assets/Styles/styles1";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function App() {
  //States
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  let mymess = "Este es el pie de la GUI";
  let mimage = "cientifica.jpg";

  let calculate = (operator)=>{
    let mresult = 0
    let mvalue1 = parseFloat(value1)
    let mvalue2 = parseFloat(value2)
    switch(operator){
      case "+":
        mresult=mvalue1+mvalue2;
        break;
      case "-":
        mresult=mvalue1-mvalue2;
      case "*":
        mresult=mvalue1*mvalue2;
        break;
      case "/":
        mresult=mvalue1/mvalue2;
        break;
      }
      setResult(mresult); //Actualizando la variable de estado
  }
  return (
    <View style={styles.container}>
      <Banner imagename={mimage} />
      <view
        style={{
          flex: 4,
          backgroundColor: "gray",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Text>Calculadora</Text>

      <TextInput
        label="Ingrese el valor 1"
        onChangeText={(value1) => setValue1(value1)}
        value={value1}
        style={{
          backgroundColor: "powderblue",
          fontWeight: "bold",
          color: "black",
        }}
        left={<TextInput.Icon icon="numeric" />}
      />

      <TextInput
        label="Ingrese el valor 2"
        onChangeText={(value2) => setValue2(value2)}
        value={value2}
        style={{
          backgroundColor: "powderblue",
          fontWeight: "bold",
          color: "black",
        }}
        left={<TextInput.Icon icon="calculator" />}
      />

      <Text>Resultado</Text>
      <Text>{parseFloat(result).toFixed(1)}</Text>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          icon="plus"
          mode="contained"
          onPress={()=>calculate("+")}
        >
          Sumar
        </Button>

        <Button
          icon="minus-box"
          mode="contained"
          onPress={()=>calculate("-")}
        >
          Restar
        </Button>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          icon="multiplication"
          mode="contained"
          onPress={()=>calculate("*")}
        >
          Multiplicar
        </Button>

        <Button
          icon="division-box"
          mode="contained"
          onPress={()=>calculate("/")}
        >
          Dividir
        </Button>
      </View>
      {/* <TouchableOpacity>
              style={{backgroundColor:'green',padding:5 , borderRadius:10}}
              <text style={{fontWeight:'bold'}}>+</text>
            </TouchableOpacity>

            <TouchableOpacity>
              style={{backgroundColor:'gray',padding:5 , borderRadius:10 ,marginLeft:5}}
              <text style={{fontWeight:'bold'}}>-</text>
            </TouchableOpacity> */}

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Footer message="este es el pie"></Footer>
      </View>
    </View>
  );
}
