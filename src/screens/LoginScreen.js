import React, { Component } from 'react';
import {  StyleSheet, View ,TextInput,  Text , Button } from 'react-native';

export default class LoginScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'aqswdefr',
      icon: 'eye-off',
      messageLabel: '',
      clientToken: '',
    };
  }


  postLogin= async() =>{
    
    console.log("entro a login");
    //var url = 'http://67.205.157.216/v1/api-token-auth/';
    //var url = 'http://testing.elementary.com/v1/api-token-auth/';
    var url = 'http://192.168.0.8:8000/v1/api-token-auth/';
    var json_data = {username:this.state.username, password:this.state.password};

    fetch(url, {
      method: 'POST',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/json',
        //Origin:'Access-Control-Allow-Origin'
      },
      body: JSON.stringify(json_data),
    })
   .then(response => response.json())
   .then((responseJson) => {
        alert("hola" + responseJson);
        console.log(2,responseJson);
        global.usertoken = responseJson.token;
        this.props.navigation.navigate('Home');
        this.setState({messageLabel:responseJson.token});
    }).catch(error => console.error('Error: ' + error))
  }// Fin post productos
    
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Text>Login Usuario</Text>
        
        
        
        <Text>Nombre de Usuario:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:10 }}
          //placeholder='Nombre de Usuario'
          //leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text>Contraseña:</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:10 }}
        //placeholder='Contraseña'
        //leftIcon={{ type: 'font-awesome', name: 'unlock' }}
        password={true}
        secureTextEntry={true}
        onChangeText={text => this.setState({ password: text })}
        value={this.state.password}
        />

        <Button
          title="Iniciar Sesion 2"
          onPress={this.postLogin}
        />
          <Text>{this.state.messageLabel}</Text>
        
       
      </View>
    );
  }
  
}



const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea"
  }
});