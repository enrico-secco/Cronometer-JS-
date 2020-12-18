import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, _View } from 'react-native';

export default function Cronometro(){
  const [numero, setNumero] = useState(0)
  const [botao, setBotao] = useState("START")
  const [ultimo, setUltimo] = useState(null)
  // Variável do timer relógio
  const[timer, setTimer] = useState(null)

  function vai(){
    
    if(timer !== null){
      //parar o timer
      clearInterval(timer);
      setTimer(null)
      setBotao("START")
    }else{
      //começa a girar o time
      setTimer(setInterval( () => 
        setNumero( numero => numero + 0.1), 100))
        //chama de 0.1 em 0.1 segundos (setInterval usa em Ms pro isso 100)
        
      setBotao("STOP")
    }   
  }

  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      setTimer(null)
    }

    setUltimo(numero);
    setNumero(0)
    setBotao("START")
  }


  return(
    <View style={styles.container}>

    <Image
    source={require('./src/cronometro.png')}
    style={styles.cronometro}
    />

  <Text style={styles.timer}> 
  {numero.toFixed(1)} 
  </Text>

    
    <View style={styles.btnArea}>

      <TouchableOpacity 
      style = {styles.btn} 
       onPress={vai}>
        <Text style = {styles.btnTexto}>{botao}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn} 
      onPress={limpar}>
        <Text style={styles.btnTexto}>CLEAR</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.areaUltima}>
      <Text style={styles.textoCorrida}> 
        {ultimo > 0 ? 'Time: ' + ultimo.toFixed(2) + 's' : ''} 
      </Text> 
    </View>
    
  </View>
  )
 }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#9370db'
  },
  timer:{
    marginTop: -160, //negativo pra ele subir
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:70,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40, 
    margin: 17,
    borderRadius: 10
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#9370db'
  },
  areaUltima:{
    marginTop:40
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color:'#fff'
  }

});

