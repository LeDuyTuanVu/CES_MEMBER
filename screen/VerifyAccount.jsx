import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, Entypo, Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";


export default function VerifyAccount({ navigation }) {
    const refRBSheet = React.useRef();
    const [image, setImage] = React.useState(null);
    const [text, setText] = React.useState('');
    const pickImageLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const ModalPicker = () => {
        return <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
        }}>
            <View>
                <View style={{
                    backgroundColor: '#fff',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                    width: 390,
                    height: 210,
                    marginTop: 10,
                    borderRadius: 20,

                }}>
                    <View>
                        <Pressable style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgray',
                            paddingLeft: 30,
                            paddingBottom: 20
                        }} onPress={() => {
                            pickImageCamera();
                            refRBSheet.current.close();
                        }}>
                            <Ionicons name="camera-outline" size={30} color="#1976d2" />
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 10
                            }}>Sử dụng máy ảnh</Text>
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 15,
                            paddingLeft: 30,
                            paddingBottom: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgray',
                        }} onPress={() => {
                            pickImageLibrary();
                            refRBSheet.current.close();
                        }}>
                            <Ionicons name="ios-image-outline" size={30} color="#1976d2" />
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 10
                            }}>Chọn ảnh từ thư viện</Text>
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 15,
                            paddingLeft: 30,
                            paddingBottom: 15
                        }} onPress={() => {
                            refRBSheet.current.close();
                        }}>
                            <MaterialCommunityIcons name="cancel" size={30} color="red" />
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 10,
                                color: '#e53935'
                            }}>Hủy bỏ</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </View>
    }
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

            {/* <View style={{ paddingTop: 85, paddingLeft: 20 }}>

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
            </View> */}
            <View style={{
                marginBottom: 10,
                marginTop: 90,
                marginHorizontal: 20
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="camerao" size={24} color="black" />
                    <Text style={{
                        marginLeft: 5
                    }}>
                        Hình ảnh
                    </Text>
                </View>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 1,
                    height: 130,
                    marginTop: 15
                }}>
                    <Pressable onPress={() => refRBSheet.current.open()} style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} >
                        <MaterialIcons name="file-upload" size={40} color="gray" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'gray',
                        }}>{image ? 'Chọn ảnh khác' : 'Ảnh CMND/CCCD mặt trước'}</Text>
                    </Pressable>
                </View>
                {image && <Image source={{ uri: image }} style={{ width: 350, height: 200, marginTop: 10 }} />}
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000"
                    }}
                >
                    <RBSheet
                        ref={refRBSheet}
                        height={270}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "transparent"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                        closeOnPressMask={true}
                    >
                        <ModalPicker />
                    </RBSheet>
                </View>
            </View>

            <View style={{
                marginBottom: 10,
                marginHorizontal: 20
            }}>
                {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="camerao" size={24} color="black" />
                    <Text style={{
                        marginLeft: 5
                    }}>
                        Hình ảnh
                    </Text>
                </View> */}
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 1,
                    height: 130,
                    marginTop: 15
                }}>
                    <Pressable onPress={() => refRBSheet.current.open()} style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} >
                        <MaterialIcons name="file-upload" size={40} color="gray" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'gray',
                        }}>{image ? 'Chọn ảnh khác' : 'Ảnh CMND/CCCD mặt sau'}</Text>
                    </Pressable>
                </View>
                {image && <Image source={{ uri: image }} style={{ width: 350, height: 200, marginTop: 10 }} />}
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000"
                    }}
                >
                    <RBSheet
                        ref={refRBSheet}
                        height={270}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "transparent"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                        closeOnPressMask={true}
                    >
                        <ModalPicker />
                    </RBSheet>
                </View>
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
                }}>Xác thực</Text>
            </View>


        </ScrollView >
    );
}
