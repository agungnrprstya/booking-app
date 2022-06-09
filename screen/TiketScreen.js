import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Appbar, List, Avatar, Button } from "react-native-paper";
import supabase from '../supabase';
import style from 'react-native-datepicker/style';

function TiketScreen({ navigation }) {

  const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        }, [data]);
    
      const getData = async() => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
                                  .from('tiket')
                                  .select('id_tiket, rute:id_rute(*), kereta:id_kereta(*), penumpang:id_penumpang(*)')
                                  .order('id_tiket', {ascending:false});
        //mengisi state data
        // console.log(error)
        setData(data);
      }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack("")} />
        <Appbar.Content
          title="Info Tiket"
          color="white"
        />
      </Appbar.Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
      <View style={styles.container}>
        <View>
          <Text style={styles.jadwal}>Jadwal Kereta</Text>
        </View>
        <View style={styles.border}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.kereta}>{item.kereta.nama_kereta}</Text>
          <Avatar.Image style={styles.avatar} source={require('../assets/kereta.png')} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 10 }}> 07. 30</Text>
          <Text style={{ marginLeft: 35 }}> {item.rute.stasiun_asal}</Text>
          <Text style={styles.tanggal_br}> {item.rute.tanggal}</Text>
        </View>
        <View style={{ marginLeft: 70 }}>
          <Text style={{position: 'absolute'}}>|</Text>
          <Text style={{position: 'absolute', marginTop: 10}}>|</Text>
          <Text style={{position: 'absolute', marginTop: 20}}>|</Text>
          <Text style={{position: 'absolute', marginTop: 30}}>|</Text>
          <Text style={{position: 'absolute', marginTop: 40, marginLeft: -7}}>🔵</Text>
          <Text style={{position: 'absolute', marginTop: -10, marginLeft: -7}}>🔘</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Text style={{ marginLeft: 10, marginTop: 50 }}> 17. 30</Text>
          <Text style={{ marginLeft: 40, marginTop: 50, color:'black' }}> {item.rute.stasiun_tujuan}</Text>
          <Text style={styles.tanggal_pl}> 7 Mei</Text>
        </View>
        </View>
        {/* <Text></Text> */}
        <View style={styles.view}>
          <Text style={styles.penumpang}>Penumpang</Text>
        </View>
        <View style={styles.border}>
        <View style={{ marginLeft: 10, marginTop: 15, }}>
          <Text style={{ marginBottom: 10 }}>{item.penumpang.nama_penumpang}</Text>
          <Text style={{ marginBottom: 20, color:'black' }}>{item.penumpang.no_telepon}</Text>
        </View>
        </View>
        {/* <View style={styles.view}>
          <Text style={{ marginTop: 200, marginLeft: 10, marginBottom: 10 }}></Text>
        </View> */}
        {/* <Button 
            icon="plus" 
            mode="contained" 
            onPress={() => navigation.navigate('TambahTiketScreen')}
            style={{margin:10}}
        >
          Tambah Tiket
        </Button> */}
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
  view:{
    // borderColor: 'black', 
    // borderWidth: 1, 
    // backgroundColor: '#F4F3F3', 
    // color: 'black'
  },
  border:{
    borderWidth: 3,
    borderRadius: 20, 
    marginHorizontal:10, 
    borderColor: '#32aae5', 
    backgroundColor:'#fff'
  },
  kereta:{
    marginTop: 20, 
    marginLeft: 14, 
    fontWeight: 'bold'
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
    marginLeft: 16, 
    marginBottom: 10,
    fontWeight: 'bold',
  },
  avatar:{
    backgroundColor: '#ffff', 
    marginLeft: 100, 
    // marginRight: 10,
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