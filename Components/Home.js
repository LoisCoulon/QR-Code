import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


export default function Home({ navigation }) {
    return (
      <View style={ styles.container }>
 
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cell: {
        color: "blue",
    }
    
  });
  