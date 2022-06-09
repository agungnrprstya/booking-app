import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { Appbar, List, Avatar } from "react-native-paper";
import supabase from '../supabase';

function HasilScreen({ navigation, route }) {
    let filter= route.params
    // console.log(route)
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        }, [data]);
    
      const getData = async() => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
                                  .from('rute')
                                  .select('*, kereta:id_kereta(*), stasiun:id_stasiun(*)')
                                  .eq('id_stasiun', filter.stasiun_tujuan)
                                  .eq('id_stasiun', filter.stasiun_asal)
                                //   .eq('id_rute', filter.stasiun_tujuan)
                                //   .order('nama_kereta', {ascending:false});
        //mengisi state data
        // console.log(error)
        setData(data);
      }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction color="white" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Hasil Pencarian"
                    color="white"
                />
            </Appbar.Header>
            <View style={style.background}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <List.Item
                        style={style.container}
                        key={index}
                        title={item.kereta.nama_kereta}
                        titleStyle={style.title}
                        description={item.jam}
                        descriptionStyle={style.description}
                        left={props => <Avatar.Image {...props} style={style.avatar} source={require('../assets/kereta.png')} />}
                        right={props => <List.Subheader {...props} style={style.subheader}> Rp {item.harga}.- </List.Subheader>}
                        onPress={() => navigation.navigate("PemesananScreen", {id_rute:item.id_kereta, id_kereta:item.kereta.id_kereta, id_stasiun:item.stasiun.id_stasiun})}
                />
                // {/* <List.Item
                //     style={style.container}
                //     title="BENGAWAN"
                //     titleStyle={style.title}
                //     description="10:00 - 15:00"
                //     descriptionStyle={style.description}
                //     left={props => <Avatar.Image {...props} style={style.avatar} source={require('../assets/kereta.png')} />}
                //     right={props => <List.Subheader {...props} style={style.subheader}>Rp 75,000.-</List.Subheader>}
                //     onPress={() => navigation.navigate("PemesananScreen")}                
                //     />
                // <List.Item
                //     style={style.container}
                //     title="ARGO PARAHYANGAN"
                //     titleStyle={style.title}
                //     description="06:00 - 10:45"
                //     descriptionStyle={style.description}
                //     left={props => <Avatar.Image {...props} style={style.avatar} source={require('../assets/kereta.png')} />}
                //     right={props => <List.Subheader {...props} style={style.subheader}>Rp 350,000.-</List.Subheader>}
                //     onPress={() => navigation.navigate("PemesananScreen")}                
                //     />
                // <List.Item
                //     style={style.container}
                //     title="SERAYU"
                //     titleStyle={style.title}
                //     description="17:10 - 22:20"
                //     descriptionStyle={style.description}
                //     left={props => <Avatar.Image {...props} style={style.avatar} source={require('../assets/kereta.png')} />}
                //     right={props => <List.Subheader {...props} style={style.subheader}>Rp 100,000.-</List.Subheader>}
                //     onPress={() => navigation.navigate("PemesananScreen")}                
                //     /> */}
                )}
            />
            </View>
        </>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F4F3F3",
    },
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        borderColor: '#32aae5',
        borderWidth: 3,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    title:{
        color: '#2B9FDC', 
        fontWeight: 'bold', 
        fontSize: 13
    },
    subheader:{
        color : '#e86a09', 
        fontWeight: 'bold',
        marginLeft: -20,
        marginTop: 5,
    },
    description:{
        fontWeight: 'bold',
        color : 'black',
        marginTop: 10
    },
    avatar:{
        backgroundColor: '#f7f7f7', 
        marginVertical: -6
    }
})
export default HasilScreen;