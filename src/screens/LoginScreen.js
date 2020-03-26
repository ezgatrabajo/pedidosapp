import React, { Component } from 'react';
import {  View ,TextInput,  Text , Button } from 'react-native';

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
    var url = 'http://67.205.157.216/v1/api-token-auth/';
    var json_data = {username:this.state.username, password:this.state.password};

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
      <View>
     
        <Text>Login Usuario</Text>
        
        
        <Text>Usuario:</Text>
        
        <TextInput
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
        />

        <Text>Contraseña:</Text>
        <TextInput
            password={true}
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
        />
        
        <Button
          title="Iniciar Sesion1"
          onPress={this.postLogin}
        />
          <Text>{this.state.messageLabel}</Text>
        
       
      </View>
    );
  }
  
}
