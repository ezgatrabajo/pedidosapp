import React from 'react';
import {   Text, View } from 'react-native';
import MenuImage from '../components/MenuImage/MenuImage';



export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
  }

  
  

  render() {
    return (
      <View>
        <Text>Bienvenido!</Text>
      </View>
    );
  }
}
