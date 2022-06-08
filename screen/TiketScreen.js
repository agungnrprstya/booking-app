import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, List, Avatar } from "react-native-paper";

// import Navigation from './Navigation';

function TiketScreen({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack("")} />
        <Appbar.Content
          title="Info Tiket"
          color="white"
        />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={{ borderColor: '#F4F3F3', borderWidth: 1, backgroundColor: '#F4F3F3', color: 'black' }}>
          <Text style={styles.jadwal}>Jadwal Kereta</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 20, marginLeft: 14, fontWeight: 'bold' }}>SINGASARI</Text>
          <Avatar.Image style={styles.avatar} source={require('../assets/kereta.png')} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 10 }}> 07. 30</Text>
          <Text style={{ marginLeft: 35 }}> Stasiun Bandung</Text>
          <Text style={{ marginLeft: 17, position:'absolute', marginTop: 20, fontSize:11, color:'black'}}> 7 Mei</Text>
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
          {/* <Text style={{ marginLeft: 10, marginTop: 50 }}> 17. 30</Text> */}
          <Text style={{ marginLeft: 35, marginTop: 50 }}> Stasiun Pasar Senen</Text>
          <Text style={{ marginLeft: 17, position:'absolute', marginTop: 70, fontSize:11, color:'black'}}> 7 Mei</Text>
        </View>
        <Text></Text>
        <View style={{ borderColor: '#F4F3F3', borderWidth: 1, backgroundColor: '#F4F3F3', color: 'black', }}>
          <Text style={styles.penumpang}>Penumpang</Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 10, }}>
          <Text style={{ marginBottom: 10 }}>Tn. Agung</Text>
          <Text>081383262954</Text>
          <Text></Text>
        </View>
        <View style={{ borderColor: '#F4F3F3', borderWidth: 1, backgroundColor: '#F4F3F3', color: 'black', }}>
          <Text style={{ marginTop: 200, marginLeft: 10, marginBottom: 10 }}></Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jadwal: {
    borderColor: '#F4F3F3',
    marginTop: 10,
    marginLeft: 10, 
    marginBottom: 10,
    backgroundColor: '#F4F3F3', 
    color: 'black',
    fontWeight: 'bold',
  },
  penumpang: {
    marginTop: 10, 
    marginLeft: 10, 
    marginBottom: 10,
    fontWeight: 'bold',
  },
  avatar:{
    backgroundColor: '#ffff', 
    marginLeft: 240, 
    marginRight: 10,
  }
});

export default TiketScreen;