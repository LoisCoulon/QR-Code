import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


export default function Home({ navigation }) {

  const promo = ["promo1", "promo2", "promo3", "promo4", "promo5"];
  const listItems = promo.map((promo) =>
  <li>{promo}</li>
);

let ok = console.log("ok")

    return (
      <View style={ styles.container }>
          <Text style={styles.h1}>Bienvenue sur Go Style</Text>
          <Text style={styles.cell}>Promotions en cours :</Text>
            <ul>{listItems}</ul>
          <Text style={styles.cell}>Scanner un QRCode</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2A66AE',
    },
    cell: {
        color: "white",
    },
    h1: {
      color: "white",
      fontSize: "35px",
      position: "absolute",
      top: 0
    }
    
  });
  