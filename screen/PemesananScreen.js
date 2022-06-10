import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';
import { Appbar, TextInput, Button } from "react-native-paper";
import supabase from '../supabase';

function PemesanScreen({ navigation, route}) {
    const [nama, setNama] = React.useState('');
    const [telepon, setTelepon] = React.useState('');
    let filter= route.params
    // const [kereta, setKereta] = React.useState('');
    // const [tanggal, setTanggal] = React.useState('');

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
            id_kereta: filter.id_kereta,
            id_penumpang: id_penumpang,
            id_rute: filter.id_rute,
            id_detail: filter.id_detail
        })
        // console.log({ tiket: tiket.error, id: tiket.data[0].id })
        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('PencarianScreen');
    }  

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction color='white' onPress={() => navigation.goBack()} />
                <Appbar.Content title="Pemesanan Kereta Api" titleStyle={{ color: 'white' }} />
            </Appbar.Header>

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
                onChangeText={telpon => setTelepon(telpon)}

            />
            {/* <Text>{kereta}</Text> */}
            <View>
                {/* <Button
                    mode="contained"
                    // onPress={() => onSimpan()}
                    style={{ margin: 10 }}
                    color="#ed4f1a"     
                    onPress={() => navigation.navigate("PencarianScreen")}
                >
                    Simpan
                </Button> */}
                <Button
                    mode="contained"
                    style={{ margin: 10 }}
                    color="#ed4f1a"
                    onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                        [   
                            {text: "Tidak"},
                            {text: "Iya", onPress: () => onSimpan()}
                        ]
                    )}                       
                >
                    Simpan
                </Button>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    text: {
        // flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 1,
        paddingTop: 10,
    }
})
export default PemesanScreen;