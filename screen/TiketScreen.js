import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Appbar, List, Avatar, Button } from "react-native-paper";
import supabase from '../supabase';
// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import style from 'react-native-datepicker/style';

function TiketScreen({ navigation }) {

  const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        }, [data]);
    
      const getData = async() => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
                                  .from('tiket')
                                  .select('id_tiket, rute:id_rute(*), kereta:id_kereta(*), penumpang:id_penumpang(*), detail_kereta:id_detail_kereta(*)')
                                  .order('id_tiket', {ascending:false});
        //mengisi state data
        // console.log(error)
        setData(data);
      }

  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
        <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
        <Appbar.Content
          title="Info Tiket"
          color="black"
        />
      </Appbar.Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
      <View>
        <View style={styles.border}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.kereta}>{item.kereta.nama_kereta}</Text>
          <Avatar.Image style={styles.avatar} source={require('../assets/kereta.png')} />
        </View>
        <View style={{ flexDirection: 'row', marginTop:20}}>
          <Text style={{ marginLeft: 11,}}> {item.rute.stasiun_asal} </Text>
          <Text style={{color:'#32aae5', fontWeight:'bold'}}>←----------------------------------→</Text>
          <Text style={{color:'black'}}> {item.rute.stasiun_tujuan} </Text>
        </View>
        <View style={{ marginLeft: 70 }}>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Text style={{ marginLeft:30, marginTop: 4 }}> {item.detail_kereta.jam_berangkat} - {item.detail_kereta.jam_sampai}</Text>
          <Text style={{color:'red', fontWeight:'bold', marginHorizontal: 5, marginTop: 3}}>-----------</Text>
          <Text style={{color:'black', marginTop: 4}}> {item.detail_kereta.tanggal}</Text>
        </View>
        <View style={{marginLeft:15}}>
          <Text style={styles.penumpang}>Penumpang</Text>
          <Text style={{ marginBottom: 10 }}>{item.penumpang.nama_penumpang}</Text>
          <Text style={{ marginBottom: 20, color:'black'}}>{item.penumpang.no_telepon}</Text>
        </View>
        <View>
        <Text style={{color:'black', marginLeft:270, marginTop:-92, position:'absolute', fontWeight:'bold'}}>Harga</Text>
        <Text style={{color:'black', marginLeft:270, marginTop:-64, position:'absolute', fontWeight:'bold', color:'#e67a0e'}}>Rp{item.detail_kereta.harga}</Text>
        </View>
        </View>
      

        <StatusBar style="auto" />
      </View>
       )}
      />  
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F3F3',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical:5
  },
  border:{
    borderWidth: 3,
    borderRadius: 20, 
    marginHorizontal:20, 
    marginVertical: 10,
    borderColor: '#32aae5', 
    backgroundColor:'#fff'
  },
  border_penumpang:{
    borderWidth: 3,
    borderRadius: 20, 
    marginHorizontal:10,
    marginBottom: 10,
    borderColor: '#32aae5', 
    backgroundColor:'#fff'
  },
  kereta:{
    marginTop: 20, 
    marginLeft: 14, 
    fontWeight: 'bold',
    color:'black'
  },
  jadwal: {
    borderColor: '#F4F3F3',
    marginTop: 10,
    marginLeft: 16, 
    marginBottom: 10,
    backgroundColor: '#F4F3F3', 
    color: 'black',
    fontWeight: 'bold',
  },
  penumpang: {
    marginTop: 10, 
    // marginLeft: 16, 
    marginBottom: 10,
    fontWeight: 'bold',
  },
  avatar:{
    backgroundColor: '#ffff', 
    marginLeft: 280,
    position:'absolute',
  },
  tanggal_br:{
    marginLeft: 17, 
    position:'absolute',
    marginTop: 20, 
    fontSize:11, 
    color:'black'
  },
  tanggal_pl:{
    marginLeft: 17, 
    position:'absolute', 
    marginTop: 70, 
    fontSize:11, 
    color:'black'
  },
});

export default TiketScreen;