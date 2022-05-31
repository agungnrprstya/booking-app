import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
    <View style={styles.container}>
        <Text style={styles.text1}>Selamat Datang Di Aplikasi Kereta Api Indonesia</Text>
        <StatusBar style="auto" />

        <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("KeretaScreen")} >
            <Text style={styles.text2}> Pesan Tiket !</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    textAlign: "center",
    justifyContent:"center",
    fontSize:50, 
    paddingTop:5,
  },
  text2: {
    fontSize:20,
    fontWeight:"bold"
  },
  button: {
    borderWidth: 1,
    borderColor:'#25d366',
    alignItems:"center",
    width:200,
    marginTop:10,
    backgroundColor:"#25d366",
  },
});

export default HomeScreen;