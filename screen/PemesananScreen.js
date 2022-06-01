import React from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { Appbar, TextInput, List, Button } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 
// import { Picker } from '@react-native-picker/picker';

function PemesanScreen({ navigation }) {
    const [nama, setNama] = React.useState('');
    const [nomor, setNomor] = React.useState('');

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
                value={nomor}
                left={<TextInput.Icon name="phone" />}
                onChangeText={nomor => setNomor(nomor)}

            />
            <View>
                <Button
                    mode="contained"
                    // onPress={() => onSimpan()}
                    style={{ margin: 10 }}
                    color="#ed4f1a"
                    onPress={() => navigation.navigate("KeretaScreen")}
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