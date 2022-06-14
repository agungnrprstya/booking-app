import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet, FlatList, Text, ImageBackground } from 'react-native';
import { Appbar, List, Avatar, Button, TextInput } from "react-native-paper";
import supabase from '../supabase';

function PemesananScreen({ navigation, route }) {
    const [nama, setNama] = React.useState('');
    const [telepon, setTelepon] = React.useState('');
    let filter= route.params
    // console.log(route)
    // const [kereta, setKereta] = React.useState('');
    // const [tanggal, setTanggal] = React.useState('');
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     getData();
    //     }, [data]);

    // const getData = async() => {
    //     //data : hasil query, error : pesan error
    //     const { data, error } = await supabase
    //                               .from('detail_kereta')
    //                               .select('*, kereta:id_kereta(*)')
    //                               .eq('id_detail_kereta', filter.detail)
    //                             //   .eq('id_rute', filter.stasiun_asal)
    //                             //   .order('id_detail_kereta', {ascending:true});
    //     //mengisi state data
    //     // console.log(error)
    //     setData(data);
    // }

    const onSimpan = async() => {
        //data : hasil query, error : pesan error
        let penumpang = await supabase
                                  .from('penumpang')
                                  .insert({
                                    nama_penumpang: nama,   
                                    no_telepon: telepon
                                  });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang = penumpang.data[0].id_penumpang;

        let tiket = await supabase
        .from('tiket')
        .insert({
            id_kereta: filter.kereta,
            id_penumpang: id_penumpang,
            id_rute: filter.rute,
            id_detail_kereta: filter.detail
        })
        // console.log({ tiket: tiket.error, id: tiket.data[0].id })
        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('PencarianScreen');
    } 

    return (
        <>
            <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
                <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Ringkasan Pemesanan"
                    color="black"
                />
            </Appbar.Header>
            <View style={{ flex: 1 }}>
                <ImageBackground style={{
                    width: '100%',
                    height: '100%',
                    flex: 1
                }}
                    resizeMode='cover'
                    source={require('../assets/Background2.png')}>
                    <View style={{ marginHorizontal: 16, marginTop: 10, borderColor: '#ffff', height: 300 }}>
                        <View style={{}}>
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama}
                                onChangeText={nama => setNama(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telepon => setTelepon(telepon)}

                            />
                            <Button
                                mode="contained"
                                style={{ marginHorizontal: 40, borderRadius: 30, marginTop: 10 }}
                                color="#FE9B4B"
                                labelStyle={{ color: '#fff' }}
                            onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                                [
                                    { text: "Tidak" },
                                    { text: "Iya", onPress: () => onSimpan() }
                                ]
                            )}
                            >
                                Simpan
                            </Button>
                        </View>
                    </View>

                </ImageBackground>
            </View>

        </>

    );
}
export default PemesananScreen;