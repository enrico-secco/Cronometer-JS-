import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, _View } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao:'VAI',
      ultimo: null
    }
    //Variável do timer relógio
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      //parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao:'VAI'})
    }else{
      //começa a girar o time
      this.timer = setInterval(() => {
        this.setState(
          {numero: this.state.numero + 0.1}
          )}, 100); //chama de 0.1 em 0.1 segundos (setInterval usa em Ms pro isso 100)

      this.setState({botao: 'PARAR'});
    }

      
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }



  render(){
  return (
    <View style={styles.container}>

      <Image
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />

    <Text style={styles.timer}> 
    {this.state.numero.toFixed(1)} 
    </Text>

      
      <View style={styles.btnArea}>

        <TouchableOpacity 
        style = {styles.btn} 
         onPress={this.vai}>
          <Text style = {styles.btnTexto}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style = {styles.btn} 
        onPress={this.limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}> 
          {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''} 
        </Text> 
      </View>
      
    </View>
  );
}
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

export default App;
