import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, List, Avatar } from "react-native-paper";

function HasilScreen({ navigation }) {
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
                <List.Item
                    title="FAJAR UTAMA SOLO (134B)"
                    titleStyle={style.title}
                    description="05:55 - 13:30"
                    descriptionStyle={style.description}
                    style={style.container}
                    right={props => <List.Subheader {...props} style={style.subheader}> Rp 400,000.- </List.Subheader>}
                    onPress={() => navigation.navigate("PemesananScreen")}
                />
                <List.Item
                    title="FAJAR UTAMA SOLO (134A)"
                    titleStyle={style.title}
                    description="10:00 - 17:30"
                    descriptionStyle={style.description}
                    style={style.container}
                    right={props => <List.Subheader {...props} style={style.subheader}>Rp 150,000.-</List.Subheader>}
                    onPress={() => navigation.navigate("PemesananScreen")}                
                    />
                <List.Item
                    title="FAJAR UTAMA YK (144)"
                    titleStyle={style.title}
                    description="06:20 - 15:18"
                    descriptionStyle={style.description}
                    style={style.container}
                    right={props => <List.Subheader {...props} style={style.subheader}>Rp 350,000.-</List.Subheader>}
                    onPress={() => navigation.navigate("PemesananScreen")}                
                    />
                <List.Item
                    title="FAJAR UTAMA YK (144)"
                    titleStyle={style.title}
                    description="17:10 - 01:20"
                    descriptionStyle={style.description}
                    style={style.container}
                    right={props => <List.Subheader {...props} style={style.subheader}>Rp 100,000.-</List.Subheader>}
                    onPress={() => navigation.navigate("PemesananScreen")}                
                    />
                <List.Item
                    title="FAJAR UTAMA YK (144)"
                    titleStyle={style.title}
                    description="21:00 - 05:30"
                    descriptionStyle={style.description}
                    style={style.container}
                    right={props => <List.Subheader {...props} style={style.subheader}>Rp 120,000.-</List.Subheader>}
                    onPress={() => navigation.navigate("PemesananScreen")}
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
        flex: 0.1,
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
        marginTop: 5,
    },
    description:{
        fontWeight: 'bold',
        color : 'black',
        marginTop: 10
    }
})
export default HasilScreen;