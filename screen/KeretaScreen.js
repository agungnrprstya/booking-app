import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

function KeretaScreen({ navigation }) {
  const [Asal, setAsal] = React.useState("asal");
  const [Tujuan, setTujuan] = React.useState("tujuan");
  const [text, setText] = React.useState("");
  const image = { uri: "https://cdn.dribbble.com/users/2222988/screenshots/6564288/bbb-02.jpg" };
  // const [selectedLanguage, setSelectedLanguage] = useState();

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
      <ImageBackground source={image} style={{ width: 393, height: 200, }}></ImageBackground>
      <View style={style.container}>
        {/* <ImageBackground source={image} style={{ width: 393, height: 200, }}></ImageBackground> */}
        <Text style={style.header}> Pemesanan Tiket</Text>
        <Text style={style.border}></Text>
        <Text style={style.text}>Rute Kereta</Text>
        <Picker
          style={style.picker}
          selectedValue={Asal}
          onValueChange={(itemValue, itemIndex) => setAsal(itemValue)}
        >
          <Picker.Item label="Kota Asal" value="asal" />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Bandung" value="bandung" />
        </Picker>
        <Text style={style.text2}>Ke</Text>
        <Picker
          style={style.picker}
          selectedValue={Tujuan}
          onValueChange={(itemValue, itemIndex) => setTujuan(itemValue)}
        >
          <Picker.Item label="Kota Tujuan" value="tujuan" />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Bandung" value="bandung" />
        </Picker>
        <Text style={style.text3}>Tanggal Pergi</Text>
        <TextInput
          style={{
            backgroundColor: "#ffff",
            // marginBottom: 20,
          }}
          label="DD/MM/YYYY"
          value={text}
          onChangeText={(text) => setText(text)}
          left={<TextInput.Icon name="calendar" />}
        />
      </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("HasilScreen")}
          color="#ed4f1a"
          style={{
            borderRadius: 30,
            marginTop: 275,
            marginHorizontal: 13,
          }}
        >
          Cari
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
    width: 330,
    // alignItems: 'left'
    },
  bg: {
    backgroundColor: '#F4F3F3',
    flex: 1
  }
});
export default KeretaScreen;