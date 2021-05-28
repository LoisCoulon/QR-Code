import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, View, ListView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import "./Home.scss";



export default function Home({ navigation }) {

  const promo = ["promo1", "promo2", "promo3", "promo4", "promo5"];
  const listItems = promo.map((promo) =>
  <li>{promo}</li>
);

    return (
      <View style={ styles.container }>
          <Text style={styles.h1}>Bienvenue sur Go Style</Text>
          <View style={styles.tab}>
            <Text style={styles.promo}>Tableau de vos promotions :</Text>
              <ul>{listItems}</ul>
            <Text style={styles.cell}>Scanner un QRCode</Text>
          </View>
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
    tab: {
      backgroundColor: 'white',
      width:"90vw",
      height:"70vh",
    },
    cell: {
        color: "black",
        fontWeight:"bold",
        position:"absolute",
        bottom:"20px",
        right:'0',
        left:'0',  
        textAlign:'center',      
    },
    promo:{
      color: "black",
      fontWeight:"bold",
      margin:"10px",
    },
    h1: {
      color: "white",
      fontSize: "35px",
      position: "absolute",
      top: 0
    }
    
  });
  