import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from './Components/Connexion';
import Home from './Components/Home'
import Inscription from './Components/Inscription';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connexion"
          component={Connexion}
        />
         <Stack.Screen
          name="Accueil"
          component={Home}
          options={{ title: 'Accueil' }}
        />
          <Stack.Screen
          name="Inscription"
          component={Inscription}
          options={{ title: 'Inscription' }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
