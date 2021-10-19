import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function VerifyAccount({ navigation }) {
    const [text, setText] = React.useState('');
    return (
        <ScrollView>
            {/* <View style={{ flexDirection: 'column', height: 250, paddingTop: 60, backgroundColor: '#C0C0C0' }}>
        <View style={{ height: 2 }}></View>
        <View style={{ flexDirection: 'column', paddingTop: 12, alignContent: 'center', alignItems: 'center' }}>
          <Image
            source={{
              uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s403x403/246226675_4534604516599582_8634563701159754105_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=l9TTmYnkUqkAX-Dt20C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c66445c46d4f98da5e93d95ad067ac43&oe=61933059'
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: 10 }}>Lê Duy Tuấn Vũ</Text>
        </View>

      </View> */}
            <Pressable onPress={() => {
                navigation.goBack('UserInfo');
            }} style={{ position: 'absolute', left: 16, top: 38 }}><Ionicons name="arrow-back" size={24} color="black" /></Pressable>
            <View style={{
                position: 'absolute',
                right: 160,
                top: 150,
                height: 25,
                width: 25,
                borderRadius: 100,
                backgroundColor: '#EEEEEE',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            </View>

            <View style={{ paddingTop: 85, paddingLeft: 20 }}>

                <Text style={{ fontSize: 15, paddingTop: 2.8, paddingLeft: 75, opacity: 0.5 }}>Số CMND/ Căn cước công dân</Text>
                <TextInput

                    value='251149494'
                    onChangeText={text => setText(text)}
                    style={{
                        fontSize: 18,
                        paddingLeft: 128,
                        alignItems: 'center',
                        alignContent: 'center',
                        paddingTop: 25
                    }}
                />
            </View>


            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{
                    padding: 15,
                    backgroundColor: 'green',
                    width: 180,
                    textAlign: 'center',
                    borderRadius: 10,
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 11,
                    marginRight: 11,
                    marginTop: 10
                }}>Đã xác thực</Text>
            </View>


        </ScrollView >
    );
}
