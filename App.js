import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import NuevoPedidoScreen from './src/screens/NuevoPedidoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



//<Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
/*
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Home" component={HomeScreen} 
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                  />
                ),
              }}/>
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}*/
const Tab = createBottomTabNavigator();

function MyTabs (){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        }else if (route.name === 'Search') {
          iconName = 'ios-search' ;
        }
        else if (route.name === 'NuevoPedido') {
          iconName = 'ios-add-circle-outline' ;
        }  
        
        else if (route.name === 'Login') {
          iconName = 'ios-person' ;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="NuevoPedido" component={NuevoPedidoScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );

}




export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}


