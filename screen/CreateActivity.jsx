import React, { useState, useEffect, useRef, Children } from 'react'
import { Text, View, TextInput, Pressable, Platform, Button, ScrollView, StatusBar, Image, Alert, SafeAreaView, LogBox } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome, SimpleLineIcons, Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreateActivity({ navigation }) {

    const refRBSheet = useRef();
    //
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

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
                            }}>S??? d???ng m??y ???nh</Text>
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
                            }}>Ch???n ???nh t??? th?? vi???n</Text>
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
                            }}>H???y b???</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </View>
    }
    //
    const day = new Date();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
    const [dateChoose, setDateChoose] = useState(day)
    const [dateChoose2, setDateChoose2] = useState(day)
    const [dateChoose3, setDateChoose3] = useState(day)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };
    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const showDatePicker3 = () => {
        setDatePickerVisibility3(true);
    };
    const hideDatePicker3 = () => {
        setDatePickerVisibility3(false);
    };
    const handleConfirm = (date) => {
        setDateChoose(date);
        hideDatePicker();
    };
    const handleConfirm2 = (date) => {
        setDateChoose2(date);
        hideDatePicker2();
    };
    const handleConfirm3 = (date) => {
        setDateChoose3(date);
        hideDatePicker3();
    };

    let [planList, setPlanList] = useState([]);
    const onAddPlan = () => {
        setPlanList(planList.concat(renderPlan()));
    }
    const onRemovePlan = (key) => {
        let plan1 = [...planList];
        const plans = plan1.splice(0, key);
        setPlanList(plans);
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Mua s???m l????ng th???c', value: 'doan' },
        { label: 'Ph??t qu??', value: 'qua' },
        { label: 'Thu?? ph????ng ti???n', value: 'phuongtien' },
        { label: 'Ti???n tr??? c???p', value: 'trocap' },
        { label: 'Ho???t ?????ng kh??c', value: 'khac' },
    ]);

    const [isDisplay, setIsDisplay] = useState('none');


    const renderPlan = () => {
        return <View key={planList.length} style={{
            margin: 10,
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            borderStyle: 'dashed',
            position: 'relative'
        }}>
            <Pressable style={{
                position: 'absolute',
                top: 5,
                right: 10
            }} onPress={() => {
                onRemovePlan(planList.length);
            }}>
                <Ionicons name="ios-close-circle-outline" size={40} color="black" />
            </Pressable>
            <Text style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: 'bold'
            }}>Ho???t ?????ng {planList.length + 1}</Text>

            <View style={{ marginTop: 10 }}>
                <Text>Ho???t ?????ng</Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{
                        borderColor: 'gray',
                        width: 300,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 15,
                        paddingRight: 20,
                        marginTop: 10,
                        // marginLeft: 20,
                        borderRadius: 10
                    }}
                />
            </View>

            <Text>?????a ??i???m</Text>
            <TextInput
                style={{
                    borderColor: 'gray',
                    width: 300,
                    height: 40,
                    borderWidth: 1,
                    paddingLeft: 15,
                    paddingRight: 20,
                    marginTop: 10,
                    // marginLeft: 20,
                    borderRadius: 10
                }}
                placeholder="Nh???p ?????a ??i???m"
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10
            }}>

                <View>
                    <Text>Th???i gian</Text>
                    <Pressable onPress={showDatePicker2}>
                        <Text style={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            width: 110,
                            height: 40,
                            borderRadius: 10,
                            paddingTop: 10,
                            color: '#000',
                            textAlign: 'center',
                            marginTop: 10
                        }}>
                            {moment(dateChoose2).format('DD/MM/YYYY')}
                        </Text>
                    </Pressable>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible2}
                        mode="date"
                        onConfirm={handleConfirm2}
                        onCancel={hideDatePicker2}
                        date={dateChoose2}
                    />
                </View>
                <View style={{
                    marginLeft: 10
                }}>
                    <Text>S??? ti???n d??? t??nh</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 180,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            // marginLeft: 20,
                            borderRadius: 10,
                        }}
                        placeholder="Nh???p s??? ti???n"
                        keyboardType="numeric"
                    />
                </View>

            </View>
            <View style={{
                marginTop: 10,
                marginBottom: 20
            }}>
                <Text>Ng?????i th???c hi???n</Text>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        width: 300,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 15,
                        paddingRight: 20,
                        marginTop: 10,
                        // marginLeft: 20,
                        borderRadius: 10
                    }}
                    placeholder="Nh???p h??? v?? t??n"
                />
            </View>
        </View>
    }

    const renderAllPlan = () => {
        return planList.map((plan, index) => {
            return <View key={index} style={{
                margin: 10,
                marginLeft: 20,
                marginRight: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                borderStyle: 'dashed',
                position: 'relative'
            }}>
                <Pressable style={{
                    position: 'absolute',
                    top: 5,
                    right: 10
                }} onPress={() => {
                    onRemovePlan(index);
                }}>
                    <Ionicons name="ios-close-circle-outline" size={40} color="black" />
                </Pressable>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>Ho???t ?????ng {index + 1}</Text>

                <View style={{ marginTop: 10 }}>
                    <Text>Ho???t ?????ng</Text>
                    <SafeAreaView>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{
                                borderColor: 'gray',
                                width: 300,
                                height: 40,
                                // borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                                marginBottom: 10,
                            }}
                            containerStyle={{
                                width: 300
                            }}
                            placeholder='Ch???n ho???t ?????ng'
                        />
                    </SafeAreaView>
                </View>
                {value === 'khac' ? <View >
                    <Text>T??n ho???t ?????ng</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 300,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            // marginLeft: 20,
                            borderRadius: 10
                        }}
                        placeholder="Nh???p ho???t ?????ng"
                    />
                </View> : null}
                
                <Text>?????a ??i???m th???c hi???n ho???t ?????ng</Text>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        width: 300,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 15,
                        paddingRight: 20,
                        marginTop: 10,
                        // marginLeft: 20,
                        borderRadius: 10
                    }}
                    placeholder="Nh???p ?????a ??i???m"
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10
                }}>

                    <View>
                        <Text>Th???i gian</Text>
                        <Pressable onPress={showDatePicker2}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width: 110,
                                height: 40,
                                borderRadius: 10,
                                paddingTop: 10,
                                color: '#000',
                                textAlign: 'center',
                                marginTop: 10
                            }}>
                                {moment(dateChoose2).format('DD/MM/YYYY')}
                            </Text>
                        </Pressable>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible2}
                            mode="date"
                            onConfirm={handleConfirm2}
                            onCancel={hideDatePicker2}
                            date={dateChoose2}
                        />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>S??? ti???n d??? t??nh</Text>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 180,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nh???p s??? ti???n"
                            keyboardType="numeric"
                        />
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    marginBottom: 20
                }}>
                    <Text>Ng?????i th???c hi???n</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 300,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            // marginLeft: 20,
                            borderRadius: 10
                        }}
                        placeholder="Nh???p h??? v?? t??n"
                    />
                </View>
            </View>
        })
    }





    return (
        <View>
            <StatusBar backgroundColor="#013459" />
            <ScrollView>
                <View style={{
                    backgroundColor: '#fff',
                    margin: 10,
                    marginRight: 12,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                }}>
                    <View style={{
                        margin: 20
                    }}>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="drive-file-rename-outline" size={24} color="orange" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    T??n chi???n d???ch <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    borderRadius: 10
                                }}
                                placeholder="Nh???p t??n chi???n d???ch"
                            />
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="location" size={24} color="red" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    ?????a ??i???m th???c hi???n chi???n d???ch <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    borderRadius: 10
                                }}
                                placeholder="Nh???p ?????a ??i???m th???c hi???n chi???n d???ch"
                            />
                        </View>

                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <SimpleLineIcons name="note" size={24} color="#000" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    K??? ho???ch c???a chi???n d???ch <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10
                                }}
                                placeholder="Nh???p k??? ho???ch"
                            />
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <SimpleLineIcons name="note" size={24} color="#000" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Chi ti???t k??? ho???ch
                                </Text>
                            </View>
                            {renderAllPlan()}
                            {/* {planList} */}
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 20
                            }}>
                                <Pressable style={{
                                    marginTop: 10,
                                    height: 40,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#024f87',
                                    width: 150,
                                    borderRadius: 5
                                }} onPress={() => {
                                    onAddPlan();
                                }}>

                                    <SimpleLineIcons name="plus" size={24} color="white" />
                                    <Text style={{
                                        textAlign: 'center',
                                        marginLeft: 5,
                                        color: 'white'
                                    }}>
                                        Th??m ho???t ?????ng
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="attach-money" size={24} color="green" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    S??? ti???n ???? k??u g???i <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10
                                }}
                                placeholder="Nh???p s??? ti???n ???? k??u g???i"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Foundation name="clipboard-notes" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 10
                                }}>
                                    M?? t??? chi???n d???ch<Text style={{ color: '#d32f2f' }}></Text>
                                </Text>
                            </View>
                            <TextInput
                                multiline={true}
                                numberOfLines={100}
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 130,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    // marginLeft: 20,
                                    borderRadius: 10,
                                    textAlignVertical: 'top',
                                    marginTop: 10,
                                    paddingTop: 10
                                }}
                                placeholder="Nh???p m?? t??? v??? chi???n d???ch"
                            />
                        </View>

                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginRight: 15
                                }}>
                                    Ng??y b???t ?????u chi???n d???ch:
                                </Text>
                                <Pressable onPress={showDatePicker3}>
                                    <Text style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 182,
                                        height: 40,
                                        borderRadius: 10,
                                        paddingTop: 10,
                                        color: '#000',
                                        textAlign: 'center'
                                    }}>
                                        {moment(dateChoose3).format('DD/MM/YYYY')}
                                    </Text>
                                </Pressable>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible3}
                                    mode="date"
                                    onConfirm={handleConfirm3}
                                    onCancel={hideDatePicker3}
                                    date={dateChoose3}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginRight: 10
                                }}>
                                    Ng??y d??? ki???n ho??n th??nh:
                                </Text>
                                <Pressable onPress={showDatePicker}>
                                    <Text style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 182,
                                        height: 40,
                                        borderRadius: 10,
                                        paddingTop: 10,
                                        color: '#000',
                                        textAlign: 'center'
                                    }}>
                                        {moment(dateChoose).format('DD/MM/YYYY')}
                                    </Text>
                                </Pressable>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    date={dateChoose}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="camerao" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    H??nh ???nh
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
                                    }}>{image ? 'Ch???n ???nh kh??c' : 'Th??m h??nh ???nh'}</Text>
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
                    </View>

                </View>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: 20,
                    marginBottom: 30,

                }}>
                    <Pressable style={{
                        backgroundColor: '#ff8224',
                        width: 170,
                        height: 50,
                        borderRadius: 5
                    }} onPress={async () => {
                        await Alert.alert(
                            "Th??ng b??o",
                            "B???n ???? t???o chi???n d???ch th??nh c??ng!",
                        );
                        navigation.goBack('MainScreen');
                    }
                    }>
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingTop: 10,

                        }}>T???o chi???n d???ch</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )

}

