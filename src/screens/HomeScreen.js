import React from 'react';
import {   Text, View } from 'react-native';
import MenuImage from '../components/MenuImage/MenuImage';
//import { Header } from 'react-native-elements';


export default class HomeScreen extends React.Component {
  

  constructor(props) {
    super(props);
  }

  
  

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Text>Bienvenido!</Text>
      </View>
    );
  }
}
