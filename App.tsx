import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

let tempo = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
const [numero, setNumero] = useState(0);
const [botao, setBotao] = useState('Iniciar');
const [ultimo, setUltimo] = useState(null);

function iniciar(){
  if(tempo !== null){
    clearInterval(tempo);
    timer= null;
    setBotao('Iniciar')
  }else{
    tempo = setInterval(()=>{
      ss++;

      if(ss == 60){
        ss = 0;
        mm++;
      }

      if(mm == 60){
        mm = 0;
        hh++;
      }

      let format =
      (hh < 10 ? '0' + hh:hh) +':'
      + (mm < 10 ? '0' + mm : mm) + ':'
      + (ss <10 ? '0'+ ss : ss)

      setNumero(format);

    }, 1000)

    setBotao('Pausar')
  }
}

function reset(){
  if(tempo !==null){
    
    clearInterval(tempo);
    tempo = null;
  }

  setUltimo(numero);
  setNumero(0);
  ss = 0;
  mm = 0;
  hh = 0;
  setBotao('Iniciar');
}

  return(
    <View style={styles.container}>
      
      <Image
      source={require('./src/crono.png')}
      />

      <Text style={styles.text}>{numero}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.botao}onPress={iniciar}>
          <Text style={styles.btntext}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}onPress={reset}>
          <Text style={styles.btntext}>Reset</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaultima}>
        <Text style={styles.textoultimo}>

          {ultimo ? 'Ultimo Tempo: ' + ultimo : ''}

        </Text>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor:'#00aeef',
 },
 text:{
  color:"#fff",
  marginTop:-160,
  fontSize:45,
  fontWeight:'bold'
 },
 btnArea:{
  flexDirection:'row',
  marginTop: 130,
  height:40,
 },
 botao:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
  height:40,
  margin:17,
  borderRadius:15,

 },
 btntext:{
  fontSize:20,
  fontWeight:'bold',
  color:'#00aeef'
 },
 areaultima:{
  marginTop:40,


 },
textoultimo:{
  fontSize:25,
  color:"#fff",
  fontStyle:'italic',
},

})