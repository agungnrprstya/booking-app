import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Appbar, TextInput, List, Button } from "react-native-paper";
// import { Picker } from '@react-native-picker/picker';

function PemesananScreen({ navigation }) {
    const [text, setText] = React.useState('');

    return (
        <>
        <Appbar.Header>
                <Appbar.BackAction color='white' onPress={() => navigation.goBack()} />
                <Appbar.Content title="Pemesanan Kereta Api" titleStyle={{ color: 'white' }} />
        </Appbar.Header>

        {/* <Text style={style.text}>
            Nama
        </Text> */}
        <TextInput 
            style={{ backgroundColor: '#ffff' }}
            label="Nama"
            value={text}
            onChangeText={text => setText(text)}
            left={<TextInput.Icon name="calendar" />}
        />
{/* 
        <Text style={style.text}>
            No Telepon
        </Text> */}
        <TextInput
            style={{ backgroundColor: '#ffff' }}
            label="Nomor Telepon"
            value={text}
            onChangeText={text => setText(text)}
            left={<TextInput.Icon name="calendar" />}
        />
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
export default PemesananScreen;