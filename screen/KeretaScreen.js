import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Appbar, TextInput, List, Button } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
// const [selectedLanguage, setSelectedLanguage] = useState();

function KeretaScreen({ navigation }) {
    const [Asal, setAsal] = React.useState("asal");
    const [Tujuan, setTujuan] = React.useState('tujuan');
    const [text, setText] = React.useState('');
    // const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction color='white' onPress={() => navigation.goBack()} />
                <Appbar.Content title="Tiket Kereta Api" titleStyle={{ color: 'white' }} />
            </Appbar.Header>

            <View style={style.container}>
              <Text style={style.text}>Dari</Text>
                <Picker style={style.picker}
                    selectedValue={Asal}
                    onValueChange={(itemValue, itemIndex) => setAsal(itemValue)
                    }>
                    <Picker.Item label="Kota Asal" value="asal" />
                    <Picker.Item label="Jakarta" value="jakarta" />
                    <Picker.Item label="Bandung" value="bandung" />
                </Picker>
              <Text style={style.text2}>Ke</Text>
                <Picker style={style.picker}
                    selectedValue={Tujuan}
                    onValueChange={(itemValue, itemIndex) => setTujuan(itemValue)
                    }>
                    <Picker.Item label="Kota Tujuan" value="tujuan" />
                    <Picker.Item label="Jakarta" value="jakarta" />
                    <Picker.Item label="Bandung" value="bandung" />
                </Picker>
                <Text style={style.text3}>
                    Tanggal Pergi
                </Text>
                <TextInput
                    style={{ backgroundColor: '#ffff' }}
                    label="DD/MM/YYYY"
                    value={text}
                    onChangeText={text => setText(text)}
                    left={<TextInput.Icon name="calendar" />}
                />
            </View>
            <View>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('HasilScreen')}
                    style={{ marginHorizontal: 9 }}
                    color="#ed4f1a"
                >
                    Cari
                </Button>
            </View>

        </>
    );
}
const style = StyleSheet.create({
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  },
  text3: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 1,
    paddingTop: 10,
  },
  picker:{
    borderRadius: 100, 
    fontSize: 20, 
    marginVertical: 10, 
    borderBottomEndRadius: 100
  },
  container:{
    marginHorizontal: 10,  
    marginTop: 15, 
    marginBottom: 15, 
    borderRadius: 5, 
    backgroundColor: 'white'
  }
})
export default KeretaScreen;