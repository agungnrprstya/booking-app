import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import supabase from '../supabase';
import DatePicker from 'react-native-datepicker'

function PencarianScreen({ navigation }) {
  const [dataPicker, setDataPicker] = useState([]);
  const [asal, setAsal] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [tanggal, setTanggal] = React.useState('');
  // const [Tujuan, setTujuan] = React.useState("tujuan");
  // const [text, setText] = React.useState("");
  const image = { uri: "https://cdn.dribbble.com/users/2222988/screenshots/6564288/bbb-02.jpg" };

  useEffect(() => {
    getRute();
  }, []);

  //list data picker
  const getRute = async() => {
    const { data, error } = await supabase
                              .from('stasiun')
                              .select('*')
                              // .order('stasiun_asal', {ascending:true});
    setDataPicker(data);
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Tiket Kereta Api"
          titleStyle={{
            color: "white",
          }}
        />
      </Appbar.Header>
      <View style={style.bg}>
      <ImageBackground source={image} style={{ width: 415, height: 200, alignSelf:'center'}}></ImageBackground>
      <View style={style.container}>
        {/* <ImageBackground source={image} style={{ width: 393, height: 200, }}></ImageBackground> */}
        <Text style={style.header}>Pemesanan Tiket</Text>
        <Text style={style.border}></Text>
        <Text style={style.text}>Rute Kereta</Text>
        <Picker
          style={style.picker}
          selectedValue={asal}
          onValueChange={(value) => setAsal(value)}>    
          <Picker.Item label="Kota Asal" value="" />
          {dataPicker.map((row) => 
          <Picker.Item label={row.stasiun_asal} value={row.id_stasiun} />
        )}
        </Picker>
        <Text style={style.text2}>Ke</Text>
        <Picker
          style={style.picker}
          selectedValue={tujuan}
          onValueChange={(value) => setTujuan(value)}        
        >
          <Picker.Item label="Kota Tujuan" value="" />
          {dataPicker.map((row) => 
          <Picker.Item label={row.stasiun_tujuan} value={row.id_stasiun} />
        )}
        </Picker>
        <Text style={style.text3}>Tanggal Pergi</Text>
        <DatePicker 
        style={{width: 350, marginTop: 10, marginBottom:80}}
        date={tanggal}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 5,
            marginLeft: 7
          },
          dateInput: {
            marginLeft: 45,
            borderRadius: 50,
            marginRight: 10,
          }
        }}
        format='DD-MM-YYYY'
        onDateChange={(date) => setTanggal(date)}
        />
      {/* <Text></Text> */}
      </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("HasilScreen",  {stasiun_asal: asal, stasiun_tujuan: tujuan})}
          color="#ed4f1a"
          style={{
            borderRadius: 30,
            marginTop: 350,
            marginHorizontal: 31,
          }}
        >
          CARI
        </Button>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  header:{
    textAlign: 'center', 
    alignItems: 'center', 
    fontSize: 20, 
    marginTop: 10,
    marginBottom: 15, 
    fontWeight: 'bold'
  },
  border:{
    borderTopColor: 'darkblue',
    borderTopWidth: 3,
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  },
  text3: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 1,
    paddingTop: 10,
  },
  picker: {
    borderRadius: 100,
    fontSize: 20,
    marginVertical: 2,
    borderBottomEndRadius: 100,
  },
  container: {
    // marginHorizontal: 100,
    marginTop: 146,
    alignSelf: 'center',
    // marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "white",
    position: 'absolute',
    // justifyContent: 'center',
    // height: 100,
    width: 350,
    // alignItems: 'left'
    },
  bg: {
    backgroundColor: '#F4F3F3',
    flex: 1
  }
});
export default PencarianScreen;