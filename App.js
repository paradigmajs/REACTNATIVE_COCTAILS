import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Detail from './components/Detail';
import Ingridient from './components/Ingridient'
const Stack = createStackNavigator();

export default function App(){
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'COCTAILS',
          headerStyle: {
            backgroundColor: '#000',
           
          }, 
          headerTintColor: '#fff',}}
          
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'DETAIL',
          headerStyle: {
            backgroundColor: '#000',
           
          }, 
          headerTintColor: '#fff', }}
        />
        <Stack.Screen
          name="Ingridient"
          component={Ingridient}
          options={{ title: 'Ingridients',
          headerStyle: {
            backgroundColor: '#000',
           
          }, 
          headerTintColor: '#fff', }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
