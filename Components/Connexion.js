import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function Connexion({ navigation }) {

  
    return ( 

        <View style={styles.container}>
          <Text style={styles.logo}>QR-CODE</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Nom d'utilisateur..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({username:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Mot de passe" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={() => navigation.navigate('Accueil')}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    width: "50%"
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
    marginBottom:10,
    width: "50%"
  },
  loginText:{
    color:"white"
  }
});
