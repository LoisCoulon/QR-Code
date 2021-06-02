import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Inscription({ navigation }) {
  
    return ( 

        <View style={styles.container}>
          <Text style={styles.logo}>Formulaire d'inscription</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Votre adresse e-mail" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({mail:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Choisir un mot de passe" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({username:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Confirmer le mot de passe" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={() => navigation.navigate('Inscription')}>S'inscrire</Text>
          </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A66AE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"white",
    marginBottom:40,
    textAlign:"center",
  },
  inputView:{
    width:"80%",
    backgroundColor:"#e0e0e0",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
