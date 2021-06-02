import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';




export default function Home({ navigation }) {

//   const promotion = useState([
//     {id:1, title:"promo1", content: "-50% sur les chaussettes" },
//     {id:2, title:"promo2", content: "-50% sur les chemises" },
//     {id:3, title:"promo3", content: "-50% sur les jeans" }
// ]);
  const [modalOpen, setModalOpen] = useState(false);
  const promo = ["promo1"]
  const promoOld = ["promo2"]
  const ref = ["-50% sur les t-shirt"]

  const listItems = promo.map((promo) =>
  <li>{promo}</li>
  );
  const listItems2 = promoOld.map((promoOld) =>
    <li>{promoOld}</li>
  );

    return (
    <View style={ styles.container }>
      <Text style={styles.h1}>Bienvenue sur Go Style</Text>
      <View style={styles.tab}>
        <Text style={styles.promo}>Tableau de vos promotions :</Text>
        <Text style={styles.title}>En cours</Text>
   
          <Modal visible={modalOpen} animationType="slide">
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(false)}          
              />
            <Image
              style={styles.tinyLogo}
              source={require('./../assets/favicon.png')}
            />
              <Text>{ref}</Text>
            </View>
          </Modal>

        <Text style={styles.modalToggle} onPress={() => setModalOpen(true)}>{listItems}</Text>

        <Text style={styles.title}>Passées</Text>
        <Text style={styles.modalToggle} onPress={() => setModalOpen(true)}>{listItems2}</Text>
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
    },
    modalToggle:{
      marginBottom: 10,
      borderWidth:1,
      borderColor:"#f2f2f2",
      padding:10,
      alignSelf:'start',
      listStyle:"none",
      marginTop:'10px',
      marginLeft:"15px"
    },
    modalContent:{
      flex:1,
      textAlign:"center",
      marginTop:20,
    },
    title:{
      fontStyle:'italic',
      marginTop:'10px',
      marginLeft:"15px"
    },
    tinyLogo: {
      alignSelf:'center',
      width: 50,
      height: 50,
      margin:'10px',
      marginTop:"100px"
    },
    
});
  