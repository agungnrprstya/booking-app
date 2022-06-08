import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from "react-native-paper";
import supabase from '../supabase';

function PemesanScreen({ navigation }) {
    const [nama, setNama] = React.useState('');
    const [telepon, setTelepon] = React.useState('');

    const onSimpan = async() => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
                                  .from('penumpang')
                                  .insert({
                                    nama_penumpang: nama,
                                    no_telepon: telepon
                                  });
        // console.log(error)                          
        Alert.alert("Pesan", "Data Berhasil Disimpan");
        navigation.navigate("PencarianScreen")
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