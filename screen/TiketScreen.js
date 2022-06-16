import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Appbar, Card } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import supabase from '../supabase';

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
            <Appbar.Header style={{ backgroundColor: '#FE9B4B' }}>
                <Appbar.BackAction color="white" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Info Tiket"
                    color="white"
                />
            </Appbar.Header>
            <LinearGradient colors={['#FE9B4B', '#BBF7FB', '#2596D7']} style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                <View style={{ marginTop: 10, marginHorizontal: 22, }}>
                    <Card style={{ marginTop: 20, borderBottomWidth: 0.5, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <Card.Content style={{ marginHorizontal: 10 }}>
                            <Text>{item.kereta.nama_kereta}</Text>
                            <Text style={{ position: 'absolute', marginTop: 18, marginLeft: 240, }}>ID Tiket : {item.id_tiket}</Text>
                            {/* <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={24} color="#EB5757" style={{ position: 'absolute', marginTop: 50, marginLeft: 140 }} />
                        <Text style={{ marginTop: 20 }}>Pasar Senen</Text>
                        <Text style={{ position: 'absolute', marginTop: 53, marginLeft: 215 }}>Pasar Senen</Text> */}
                        </Card.Content>
                    </Card>
                    <Card style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <Card.Content style={{ marginHorizontal: 12, }}>
                            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={24} color="#EB5757" style={{ position: 'absolute', marginTop: 25, marginLeft: 145 }} />
                            <Text>{item.rute.stasiun_asal}</Text>
                            <Text style={{ position: 'absolute', marginTop: 15, marginLeft: 230 }}>{item.rute.stasiun_tujuan}</Text>
                            <Text style={{ marginTop: 5 }}>{item.detail_kereta.jam_berangkat}</Text>
                            <Text style={{ marginTop: 40, position: 'absolute', marginLeft: 250 }}>{item.detail_kereta.jam_sampai}</Text>
                            <Text style={{ marginTop: 55, position: 'absolute', marginLeft: 120, }}>{item.detail_kereta.tanggal}</Text>
                            <Text></Text>
                        </Card.Content>
                    </Card>
                    <Card style={{ borderTopWidth: 0.5, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <Card.Content style={{ marginHorizontal: 12 }}>
                            <Text style={{ color: 'black' }}>{item.penumpang.nama_penumpang}</Text>
                            <Text style={{ color: 'grey', marginTop: 2 }}>Pemesan</Text>
                            <Text style={{ position: 'absolute', marginTop: 18, marginLeft: 200 }}>{item.penumpang.no_telepon}</Text>
                            <Text style={{ color: 'grey', position: 'absolute', marginTop: 37, marginLeft: 195 }}>Nomor Telepon</Text>
                            <Text style={{ marginTop: 10 }}>{item.detail_kereta.kelas}</Text>
                            <Text style={{ color: 'grey', marginTop: 2 }}>Class</Text>
                            <Text style={{ position: 'absolute', marginTop: 67, marginLeft: 215 }}>Rp. {item.detail_kereta.harga}</Text>
                            <Text style={{ position: 'absolute', marginTop: 87, marginLeft: 256, color: 'grey' }}>Price</Text>
                        </Card.Content>
                    </Card>
                </View>
            )}
            />
            </LinearGradient>
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
});

export default TiketScreen;