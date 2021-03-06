import React, { useState, useRef } from 'react'
import { Image, Pressable, Text, View, TextInput, Picker, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageView from "react-native-image-viewing";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';


import { SimpleLineIcons, Ionicons, AntDesign, MaterialIcons, Feather, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';

export default function EditActivity(props) {
    const [dcResult, setDcResult] = useState(null);

    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
    const day = new Date();
    const [dateChoose2, setDateChoose2] = useState(day)
    const [dateChoose3, setDateChoose3] = useState(day)
    const refRBSheet = useRef();

    const [selectedValue, setSelectedValue] = useState("doan");
    const [selectedValue1, setSelectedValue1] = useState("gao");
    const [selectedValue2, setSelectedValue2] = useState("kg");
    const [selectedValue3, setSelectedValue3] = useState("");
    const [selectedValue4, setSelectedValue4] = useState("");
    const [selectedValueXe, setSelectedValueXe] = useState("");
    const [selectedValueDiChuyen, setSelectedValueDiChuyen] = useState("");
    const [selectedValueVanChuyen, setSelectedValueVanChuyen] = useState("");
    const [selectedValueLoaiVanChuyen, setSelectedValueLoaiVanChuyen] = useState("");

    const images = [
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZV0_1Ufe0Ghf_m4RLxhKdZT0kDEZJHCjlA&usqp=CAU",
        },
        {
            uri: "https://images-ext-2.discordapp.net/external/y63u_6sANNiEMLh0-47ras_jtnPNkRw5da14BM3LGSA/https/www.baolongan.vn/image/news/2018/20181109/images/Ngh%25E1%25BB%2581-b%25E1%25BB%2591c-v%25C3%25A1c-n%25E1%25BA%25B7ng-nh%25E1%25BB%258Dc-v%25C3%25A0-ch%25E1%25BB%258Bu-nhi%25E1%25BB%2581u-thi%25E1%25BB%2587t-th%25C3%25B2i.jpg?width=545&height=556",
        },
        {
            uri: "https://images-ext-2.discordapp.net/external/CtBSrJaSLDpEHcEqD1HebX9KsFHzM8lQwcUVZGFWCHk/%3Fw%3D1200%26h%3D0%26q%3D100%26dpr%3D1%26fit%3Dcrop%26s%3D3pXkq-JuIXgn2JBctxJdqQ/https/vcdn1-vnexpress.vnecdn.net/2020/04/09/Phat-gao-tu-thien-5-1586419341.jpg?width=828&height=556",
        },
        {
            uri: "https://images-ext-1.discordapp.net/external/jw6mrWzHRx8_-h-gx_euA_QIdAYXffkxKkPdl9jk18M/%3Fq%3Dtbn%3AANd9GcTXDAQAjLOJDD8cek-z1kEAQqel0pOc0BovaA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        },
        {
            uri: "https://gaotuananh.vn/wp-content/uploads/2021/06/gao-tu-thien-1-571x400.jpg",
        },
    ];

    const renderPlan = () => {
        return "a";
    }

    const renderSubPlan = () => {
        return "b";
    }
    let [subPlanList, setSubPlanList] = useState([]);
    const onAddSubPlan = () => {
        setSubPlanList(subPlanList.concat(renderSubPlan()));
    }
    const onRemoveSubPlan = (key) => {
        // alert(key);
        let plan1 = [...subPlanList];
        // console.log(plan1)
        const plans = plan1.splice(0, key);
        setSubPlanList(plans);
    }
    const renderMove = () => {
        return "c";
    }
    let [moveList, setMoveList] = useState([]);
    const onAddMove = () => {
        setMoveList(moveList.concat(renderMove()));
    }
    const onRemoveMove = (key) => {
        // alert(key);
        let plan1 = [...moveList];
        // console.log(plan1)
        const plans = plan1.splice(0, key);
        setMoveList(plans);
    }

    const renderAllMove = () => {
        return moveList.map((item, index) => {
            return <View key={index} style={{
                // borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: 310,
                paddingBottom: 10,
                paddingTop: 10,
                marginTop: 10,
                marginLeft: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <Text>Ph????ng ti???n <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <Pressable onPress={() => {
                        // alert(index)
                        onRemoveMove(index);
                    }}>
                        <Ionicons name="ios-close-circle-outline" size={30} color="black" />
                    </Pressable>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 310,
                    marginTop: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Picker
                        selectedValue={selectedValueXe}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueXe(itemValue)}
                        pickerStyleType={{
                            paddingBottom: 10
                        }}
                    >
                        <Picker.Item label="Ch???n ph????ng ti???n" value="chondonvi" />
                        <Picker.Item label="Ph????ng ti???n di chuy???n" value="dichuyen" />
                        <Picker.Item label="Ph????ng ti???n v???n chuy???n" value="vanchuyen" />
                    </Picker>
                </View>

                <View>
                    {selectedValueXe === 'dichuyen' ?
                        <>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <View>
                                    <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 150,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueDiChuyen}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueDiChuyen(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Ch???n lo???i xe" value="loaidichuyen" />
                                            <Picker.Item label="Xe 4 ch???" value="4cho" />
                                            <Picker.Item label="Xe 7 ch???" value="7cho" />
                                            <Picker.Item label="Xe 16 ch???" value="16cho" />
                                            <Picker.Item label="Xe 24 ch???" value="24cho" />
                                            <Picker.Item label="Xe kh??c" value="dichuyenkhac" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 160,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="S??? l?????ng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chi???c</Text>
                                </View>

                            </View>
                            {selectedValueDiChuyen === 'dichuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 310,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Nh???p lo???i xe kh??c"
                                    />
                                </View> : null
                            }
                        </>
                        :
                        <>

                            <View>
                                <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    width: 310,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    height: 40,
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Picker
                                        selectedValue={selectedValueVanChuyen}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValueVanChuyen(itemValue)}
                                        pickerStyleType={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <Picker.Item label="Ch???n lo???i xe" value="loaivanchuyen" />
                                        <Picker.Item label="Xe t???i th??ng k??n" value="thungkin" />
                                        <Picker.Item label="Xe t???i th??ng ph??? mui b???t" value="thung" />
                                        <Picker.Item label="Xe t???i ????ng l???nh" value="donglanh" />
                                        <Picker.Item label="Xe kh??c" value="vanchuyenkhac" />

                                    </Picker>
                                </View>
                            </View>
                            {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 310,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Nh???p lo???i xe kh??c"
                                    />
                                </View> : null
                            }
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    position: 'relative'
                                }}>
                                    <Text>Tr???ng t???i <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 160,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueLoaiVanChuyen}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueLoaiVanChuyen(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Ch???n tr???ng t???i xe" value="loaixevanchuyen" />
                                            <Picker.Item label="0.5 - 1 T???n" value="1tan" />
                                            <Picker.Item label="2 - 6 T???n" value="6tan" />
                                            <Picker.Item label="7 - 15 T???n" value="15tan" />
                                            <Picker.Item label="Tr??n 15 t???n" value="tren15" />

                                        </Picker>
                                    </View>
                                </View>

                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 160,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="S??? l?????ng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chi???c</Text>
                                </View>
                            </View>

                        </>

                    }
                </View>

            </View>
        })
    }

    const renderAllPlan = () => {
        return planList.map((item, index) => {
            return <View key={index} style={{
                margin: 10,
                marginLeft: 20,
                marginRight: 20,
                // borderBottomWidth: 1,
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
                    <Text>Ho???t ?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        width: 344,
                        marginTop: 10,
                        borderRadius: 10,
                        marginBottom: 10,
                        height: 40,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            pickerStyleType={{
                                paddingBottom: 10
                            }}
                        >
                            <Picker.Item label="Ch???n ho???t ?????ng" value="chonhd" />
                            <Picker.Item label="Mua l????ng th???c" value="doan" />
                            <Picker.Item label="Ph??t qu??" value="qua" />
                            <Picker.Item label="Thu?? ph????ng ti???n" value="phuongtien" />
                            <Picker.Item label="Ti???n tr??? c???p" value="trocap" />
                            <Picker.Item label="Ho???t ?????ng kh??c" value="khac" />
                        </Picker>
                    </View>
                </View>
                {selectedValue === 'khac' ? <View style={{ marginLeft: 20 }}>
                    <Text>M?? t??? ho???t ?????ng</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 344,
                            // height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            // marginLeft: 20,
                            borderRadius: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Nh???p m?? t??? ho???t ?????ng"
                        multiline={true}
                        numberOfLines={5}
                    />
                </View> :
                    selectedValue === 'doan' ?
                        <View>
                            <View style={{
                                // borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                borderStyle: 'dotted',
                                width: 344,
                                paddingBottom: 10
                            }}>
                                <Text>Lo???i l????ng th???c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    width: 344,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    height: 40,
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Picker
                                        selectedValue={selectedValue1}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedValue1(itemValue)
                                            if (itemValue === 'gao' || itemValue === 'rau') {
                                                setSelectedValue2('kg');
                                            } else if (itemValue === 'mi') {
                                                setSelectedValue2('thung');
                                            } else if (itemValue === 'trung') {
                                                setSelectedValue2('vi');
                                            }
                                        }
                                        }
                                        pickerStyleType={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <Picker.Item label="Ch???n lo???i l????ng th???c" value="loailuongthuc" />
                                        <Picker.Item label="G???o" value="gao" />
                                        <Picker.Item label="Rau c???" value="rau" />
                                        <Picker.Item label="M??" value="mi" />
                                        <Picker.Item label="Tr???ng" value="trung" />
                                        <Picker.Item label="Lo???i kh??c" value="loaikhac" />
                                    </Picker>
                                </View>
                                {selectedValue1 === 'loaikhac' ? <>
                                    <Text>Ho???t ?????ng kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 310,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 20,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Nh???p lo???i l????ng th???c kh??c"
                                    />
                                </> : null}
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View>
                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        <TextInput
                                            // value='1000' ///////////////
                                            style={{
                                                borderColor: 'gray',
                                                width: 160,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 20,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10,
                                            }}
                                            placeholder="Nh???p s??? l?????ng"
                                            keyboardType="numeric"

                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: 10
                                    }}>
                                        <Text>????n v??? <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        {selectedValue1 !== 'loaikhac' ? <>
                                            <View style={{
                                                borderWidth: 1,
                                                borderColor: 'gray',
                                                width: 170,
                                                marginTop: 10,
                                                borderRadius: 10,
                                                marginBottom: 10,
                                                height: 40,
                                                flexDirection: 'column',
                                                justifyContent: 'center'
                                            }}>
                                                <Picker
                                                    selectedValue={selectedValue2}
                                                    onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                                                    pickerStyleType={{
                                                        paddingBottom: 10
                                                    }}
                                                >
                                                    <Picker.Item label="Ch???n ????n v???" value="chondonvi" />
                                                    <Picker.Item label="Kg" value="kg" />
                                                    <Picker.Item label="V???" value="vi" />
                                                    <Picker.Item label="Th??ng" value="thung" />
                                                </Picker>
                                            </View>
                                        </> : <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 150,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 20,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10,
                                            }}
                                            placeholder="Nh???p ????n v???"
                                        />}
                                    </View>
                                </View>
                            </View>

                            {renderAllSubPlan()}


                        </View> :
                        selectedValue === 'phuongtien' ?
                            <View >
                                <View style={{
                                    // borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    width: 310,
                                    paddingBottom: 10,
                                    marginLeft: 20
                                }}>
                                    <Text>Ph????ng ti???n <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 310,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueXe}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueXe(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Ch???n ph????ng ti???n" value="chondonvi" />
                                            <Picker.Item label="Ph????ng ti???n di chuy???n" value="dichuyen" />
                                            <Picker.Item label="Ph????ng ti???n v???n chuy???n" value="vanchuyen" />
                                        </Picker>
                                    </View>

                                    <View>
                                        {selectedValueXe === 'dichuyen' ?
                                            <>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <View>
                                                        <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            width: 150,
                                                            marginTop: 10,
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                            height: 40,
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Picker
                                                                selectedValue={selectedValueDiChuyen}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedValueDiChuyen(itemValue)}
                                                                pickerStyleType={{
                                                                    paddingBottom: 10
                                                                }}
                                                            >
                                                                <Picker.Item label="Ch???n lo???i xe" value="loaidichuyen" />
                                                                <Picker.Item label="Xe 4 ch???" value="4cho" />
                                                                <Picker.Item label="Xe 7 ch???" value="7cho" />
                                                                <Picker.Item label="Xe 16 ch???" value="16cho" />
                                                                <Picker.Item label="Xe 24 ch???" value="24cho" />
                                                                <Picker.Item label="Xe kh??c" value="dichuyenkhac" />
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 160,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="S??? l?????ng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chi???c</Text>
                                                    </View>

                                                </View>
                                                {selectedValueDiChuyen === 'dichuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 310,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Nh???p lo???i xe kh??c"
                                                        />
                                                    </View> : null
                                                }
                                            </>
                                            :
                                            <>

                                                <View>
                                                    <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                    <View style={{
                                                        borderWidth: 1,
                                                        borderColor: 'gray',
                                                        width: 310,
                                                        marginTop: 10,
                                                        borderRadius: 10,
                                                        marginBottom: 10,
                                                        height: 40,
                                                        flexDirection: 'column',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <Picker
                                                            selectedValue={selectedValueVanChuyen}
                                                            onValueChange={(itemValue, itemIndex) => setSelectedValueVanChuyen(itemValue)}
                                                            pickerStyleType={{
                                                                paddingBottom: 10
                                                            }}
                                                        >
                                                            <Picker.Item label="Ch???n lo???i xe" value="loaivanchuyen" />
                                                            <Picker.Item label="Xe t???i th??ng k??n" value="thungkin" />
                                                            <Picker.Item label="Xe t???i th??ng ph??? mui b???t" value="thung" />
                                                            <Picker.Item label="Xe t???i ????ng l???nh" value="donglanh" />
                                                            <Picker.Item label="Xe kh??c" value="vanchuyenkhac" />

                                                        </Picker>
                                                    </View>
                                                </View>
                                                {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 310,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Nh???p lo???i xe kh??c"
                                                        />
                                                    </View> : null
                                                }
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Tr???ng t???i <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            width: 160,
                                                            marginTop: 10,
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                            height: 40,
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Picker
                                                                selectedValue={selectedValueLoaiVanChuyen}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedValueLoaiVanChuyen(itemValue)}
                                                                pickerStyleType={{
                                                                    paddingBottom: 10
                                                                }}
                                                            >
                                                                <Picker.Item label="Ch???n tr???ng t???i xe" value="loaixevanchuyen" />
                                                                <Picker.Item label="0.5 - 1 T???n" value="1tan" />
                                                                <Picker.Item label="2 - 6 T???n" value="6tan" />
                                                                <Picker.Item label="7 - 15 T???n" value="15tan" />
                                                                <Picker.Item label="Tr??n 15 t???n" value="tren15" />

                                                            </Picker>
                                                        </View>
                                                    </View>

                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 160,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="S??? l?????ng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chi???c</Text>
                                                    </View>
                                                </View>

                                            </>

                                        }
                                    </View>
                                </View>
                                {renderAllMove()}
                            </View>

                            :
                            selectedValue === 'qua' ?
                                <View>
                                    <View style={{
                                        position: 'relative',
                                        marginBottom: 10,
                                    }}>
                                        <Text>S??? l?????ng ph???n qu??<Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 280,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 70,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10
                                            }}
                                            placeholder="Nh???p s??? l?????ng ph???n qu??"
                                            keyboardType="numeric"
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            right: 10,
                                            top: 40
                                        }}>Ph???n</Text>
                                    </View>
                                </View>
                                : null
                }

                {/* {selectedValue === 'doan' ?
                    <View style={{ width: 310, marginBottom: 10, marginTop: 20 }}>
                        <Button title="Th??m lo???i l????ng th???c" onPress={() => {
                            onAddSubPlan();
                        }} />
                    </View>
                    : selectedValue === 'phuongtien' ?
                        <View style={{ width: 310, marginBottom: 10, marginTop: 20 }}>
                            <Button title="Th??m lo???i xe" onPress={() => {
                                onAddMove();
                            }} />
                        </View> : null

                } */}

                <Text>?????a ??i???m th???c hi???n ho???t ?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        width: 310,
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
                        <Text>Th???i gian <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        marginLeft: 10,
                        position: 'relative'
                    }}>
                        <Text>S??? ti???n d??? t??nh <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 180,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 70,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nh???p s??? ti???n"
                            keyboardType="numeric"
                        />
                        <Text style={{
                            position: 'absolute',
                            right: 10,
                            top: 40
                        }}>VND</Text>
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    marginBottom: 20
                }}>
                    <Text>Ng?????i ph??? tr??ch <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 310,
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

    const renderAllSubPlan = () => {
        return subPlanList.map((item, index) => {
            return <View key={index} style={{
                // borderBottomWidth: 1,
                borderBottomColor: 'gray',
                borderStyle: 'dotted',
                width: 344,
                paddingBottom: 10,
                paddingTop: 10,
                position: 'relative',
                marginLeft: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>

                    <Text>Lo???i l????ng th???c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <Pressable onPress={() => {
                        // alert(index)
                        onRemoveSubPlan(index);
                    }}>
                        <Ionicons name="ios-close-circle-outline" size={30} color="black" />
                    </Pressable>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 344,
                    marginTop: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Picker
                        selectedValue={selectedValue3}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedValue3(itemValue)
                            if (itemValue === 'gao' || itemValue === 'rau') {
                                setSelectedValue4('kg');
                            } else if (itemValue === 'mi') {
                                setSelectedValue4('thung');
                            } else if (itemValue === 'trung') {
                                setSelectedValue4('vi');
                            }
                        }
                        }
                        pickerStyleType={{
                            paddingBottom: 10
                        }}
                    >
                        <Picker.Item label="Ch???n lo???i l????ng th???c" value="loailuongthuc" />
                        <Picker.Item label="G???o" value="gao" />
                        <Picker.Item label="Rau c???" value="rau" />
                        <Picker.Item label="M??" value="mi" />
                        <Picker.Item label="Tr???ng" value="trung" />
                        <Picker.Item label="Lo???i kh??c" value="loaikhac" />
                    </Picker>
                </View>
                {selectedValue1 === 'loaikhac' ? <>
                    <Text>Ho???t ?????ng kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 310,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            // marginLeft: 20,
                            borderRadius: 10
                        }}
                        placeholder="Nh???p lo???i l????ng th???c kh??c"
                    />
                </> : null}
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                        <TextInput
                            // value='1000'
                            style={{
                                borderColor: 'gray',
                                width: 160,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nh???p s??? l?????ng"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>????n v??? <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                        {selectedValue1 !== 'loaikhac' ? <>
                            <View style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width: 170,
                                marginTop: 10,
                                borderRadius: 10,
                                marginBottom: 10,
                                height: 40,
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Picker
                                    selectedValue={selectedValue4}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
                                    pickerStyleType={{
                                        paddingBottom: 10
                                    }}
                                >
                                    <Picker.Item label="Ch???n ????n v???" value="chondonvi" />
                                    <Picker.Item label="Kg" value="kg" />
                                    <Picker.Item label="V???" value="vi" />
                                    <Picker.Item label="Th??ng" value="thung" />
                                </Picker>
                            </View>
                        </> : <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 150,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nh???p ????n v???"
                        />}
                    </View>
                </View>
            </View>
        })
    }

    const renderImageHeader = () => {
        return images.map((item, index) => {
            return <Pressable key={index} onPress={() => {
                setIndex(index);
                setIsVisible(true);
            }}>
                <Image style={{ width: 200, height: 200 }} source={item} />
            </Pressable>
        })
    }

    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };
    const showDatePicker3 = () => {
        setDatePickerVisibility3(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const handleConfirm2 = (date) => {
        setDateChoose2(date);
        hideDatePicker2();
    };

    const hideDatePicker3 = () => {
        setDatePickerVisibility3(false);
    };
    const handleConfirm3 = (date) => {
        setDateChoose3(date);
        hideDatePicker3();
    };
    const [image, setImage] = useState(null);
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
                            // borderBottomWidth: 1,
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
                            // borderBottomWidth: 1,
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


    return (
        <ScrollView style={{
            backgroundColor: '#fff'
        }}>
            <View style={{
                display: "flex",
                flexDirection: 'row'
            }}>
                <Pressable onPress={() => {
                    setIsVisible(true);
                }}>
                    <Image style={{ width: 212, height: 200 }} source={images[0]} />

                </Pressable>
                <Pressable onPress={() => {
                    setIsVisible(true);
                }}>
                    <Image style={{ width: 100, height: 100 }} source={images[1]} />
                    <Image style={{ width: 100, height: 100 }} source={images[2]} />
                </Pressable>
                <Pressable onPress={() => {
                    setIsVisible(true);
                }} style={{
                    position: 'relative'
                }}>
                    <Pressable onPress={() => {
                        setIsVisible(true);
                    }}>
                        <Image style={{ width: 100, height: 100 }} source={images[3]} />
                        <Image style={{ width: 100, height: 100 }} source={images[4]} />

                    </Pressable>
                    {/* <View style={{
                        position: 'absolute',
                        backgroundColor: '#000',
                        width: 100,
                        height: 100,
                        bottom: 0,
                        opacity: .5
                    }}>
                        <Text style={{
                            fontSize: 30,
                            color: '#fff',
                            zIndex: 999,
                            elevation: 999,
                            paddingTop: 25,
                            paddingLeft: 25,
                        }}>+3</Text>
                    </View> */}
                </Pressable>
            </View>
            <ImageView
                images={images}
                imageIndex={index}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />
            <View style={{ alignItems: 'flex-end', paddingRight: 8, paddingTop: 6 }}>
                <Pressable onPress={() => refRBSheet.current.open()} style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }} >
                    <View style={{ paddingTop: 1 }}><MaterialIcons name="file-upload" size={18} color="gray" /></View>
                    <Text style={{
                        marginLeft: 5,
                        color: 'gray',
                    }}>{image ? 'Ch???n ???nh kh??c' : 'Th??m h??nh ???nh'}</Text>
                </Pressable>
            </View>
            <View>
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

            {/* <View style={{
                padding: 20,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <SimpleLineIcons name="note" size={24} color="black" />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: 5
                }}>Th??ng tin</Text>



            </View> */}
            {/* ================================= */}
            {/* <View style={{
                marginTop: 10,
                // marginLeft: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,

                elevation: 16,
                width: 370,
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingTop: 10,
                paddingLeft: 10
            }}> */}

            <View style={{ marginTop: 10 }}>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                        <MaterialIcons name="campaign" size={24} color="#024f87" />
                        <Text>Ho???t ?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    </View>

                    <View style={{
                        borderColor: 'gray',
                        width: 344,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 10,
                        marginTop: 10,
                        marginLeft: 20,
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            pickerStyleType={{
                                paddingBottom: 10
                            }}
                        >
                            <Picker.Item label="Ch???n ho???t ?????ng" value="chonhd" />
                            <Picker.Item label="Mua l????ng th???c" value="doan" />
                            <Picker.Item label="Ph??t qu??" value="qua" />
                            <Picker.Item label="Thu?? ph????ng ti???n" value="phuongtien" />
                            <Picker.Item label="Ti???n tr??? c???p" value="trocap" />
                            <Picker.Item label="Ho???t ?????ng kh??c" value="khac" />
                        </Picker>
                    </View>
                </View>
                {selectedValue === 'khac' ? <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text>M?? t??? ho???t ?????ng</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 344,
                            // height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            // marginLeft: 20,
                            borderRadius: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Nh???p m?? t??? ho???t ?????ng"
                        multiline={true}
                        numberOfLines={5}
                    />
                </View> :
                    selectedValue === 'doan' ?
                        <View>
                            <View style={{
                                // borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                borderStyle: 'dotted',
                                width: 344,
                                paddingBottom: 10,
                                marginLeft: 20,
                                marginTop: 10
                            }}>
                                <Text>Lo???i l????ng th???c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    width: 344,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    height: 40,
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Picker
                                        selectedValue={selectedValue1}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedValue1(itemValue)
                                            if (itemValue === 'gao' || itemValue === 'rau') {
                                                setSelectedValue2('kg');
                                            } else if (itemValue === 'mi') {
                                                setSelectedValue2('thung');
                                            } else if (itemValue === 'trung') {
                                                setSelectedValue2('vi');
                                            }
                                        }
                                        }
                                        pickerStyleType={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <Picker.Item label="Ch???n lo???i l????ng th???c" value="loailuongthuc" />
                                        <Picker.Item label="G???o" value="gao" />
                                        <Picker.Item label="Rau c???" value="rau" />
                                        <Picker.Item label="M??" value="mi" />
                                        <Picker.Item label="Tr???ng" value="trung" />
                                        <Picker.Item label="Lo???i kh??c" value="loaikhac" />
                                    </Picker>
                                </View>
                                {selectedValue1 === 'loaikhac' ? <>
                                    <Text>Ho???t ?????ng kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 310,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 20,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Nh???p lo???i l????ng th???c kh??c"
                                    />
                                </> : null}
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View>
                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        <TextInput
                                            value='1000'
                                            style={{
                                                borderColor: 'gray',
                                                width: 160,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 20,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10,
                                            }}
                                            placeholder="Nh???p s??? l?????ng"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: 10
                                    }}>
                                        <Text>????n v??? <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        {selectedValue1 !== 'loaikhac' ? <>
                                            <View style={{
                                                borderWidth: 1,
                                                borderColor: 'gray',
                                                width: 170,
                                                marginTop: 10,
                                                borderRadius: 10,
                                                marginBottom: 10,
                                                height: 40,
                                                flexDirection: 'column',
                                                justifyContent: 'center'
                                            }}>
                                                <Picker
                                                    selectedValue={selectedValue2}
                                                    onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                                                    pickerStyleType={{
                                                        paddingBottom: 10
                                                    }}
                                                >
                                                    <Picker.Item label="Ch???n ????n v???" value="chondonvi" />
                                                    <Picker.Item label="Kg" value="kg" />
                                                    <Picker.Item label="V???" value="vi" />
                                                    <Picker.Item label="Th??ng" value="thung" />
                                                </Picker>
                                            </View>
                                        </> : <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 150,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 20,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10,
                                            }}
                                            placeholder="Nh???p ????n v???"
                                        />}
                                    </View>
                                </View>
                            </View>
                            {renderAllSubPlan()}

                        </View> :
                        selectedValue === 'phuongtien' ?
                            <View >
                                <View style={{
                                    // borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    width: 310,
                                    paddingBottom: 10,
                                    marginLeft: 20,
                                    marginTop: 10
                                }}>
                                    <Text>Ph????ng ti???n <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 310,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueXe}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueXe(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Ch???n ph????ng ti???n" value="chondonvi" />
                                            <Picker.Item label="Ph????ng ti???n di chuy???n" value="dichuyen" />
                                            <Picker.Item label="Ph????ng ti???n v???n chuy???n" value="vanchuyen" />
                                        </Picker>
                                    </View>

                                    <View>
                                        {selectedValueXe === 'dichuyen' ?
                                            <>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <View>
                                                        <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            width: 150,
                                                            marginTop: 10,
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                            height: 40,
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Picker
                                                                selectedValue={selectedValueDiChuyen}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedValueDiChuyen(itemValue)}
                                                                pickerStyleType={{
                                                                    paddingBottom: 10
                                                                }}
                                                            >
                                                                <Picker.Item label="Ch???n lo???i xe" value="loaidichuyen" />
                                                                <Picker.Item label="Xe 4 ch???" value="4cho" />
                                                                <Picker.Item label="Xe 7 ch???" value="7cho" />
                                                                <Picker.Item label="Xe 16 ch???" value="16cho" />
                                                                <Picker.Item label="Xe 24 ch???" value="24cho" />
                                                                <Picker.Item label="Xe kh??c" value="dichuyenkhac" />
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 160,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="S??? l?????ng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chi???c</Text>
                                                    </View>

                                                </View>
                                                {selectedValueDiChuyen === 'dichuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 310,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Nh???p lo???i xe kh??c"
                                                        />
                                                    </View> : null
                                                }
                                            </>
                                            :
                                            <>

                                                <View>
                                                    <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                    <View style={{
                                                        borderWidth: 1,
                                                        borderColor: 'gray',
                                                        width: 310,
                                                        marginTop: 10,
                                                        borderRadius: 10,
                                                        marginBottom: 10,
                                                        height: 40,
                                                        flexDirection: 'column',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <Picker
                                                            selectedValue={selectedValueVanChuyen}
                                                            onValueChange={(itemValue, itemIndex) => setSelectedValueVanChuyen(itemValue)}
                                                            pickerStyleType={{
                                                                paddingBottom: 10
                                                            }}
                                                        >
                                                            <Picker.Item label="Ch???n lo???i xe" value="loaivanchuyen" />
                                                            <Picker.Item label="Xe t???i th??ng k??n" value="thungkin" />
                                                            <Picker.Item label="Xe t???i th??ng ph??? mui b???t" value="thung" />
                                                            <Picker.Item label="Xe t???i ????ng l???nh" value="donglanh" />
                                                            <Picker.Item label="Xe kh??c" value="vanchuyenkhac" />

                                                        </Picker>
                                                    </View>
                                                </View>
                                                {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 310,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Nh???p lo???i xe kh??c"
                                                        />
                                                    </View> : null
                                                }
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Tr???ng t???i <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            width: 160,
                                                            marginTop: 10,
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                            height: 40,
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Picker
                                                                selectedValue={selectedValueLoaiVanChuyen}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedValueLoaiVanChuyen(itemValue)}
                                                                pickerStyleType={{
                                                                    paddingBottom: 10
                                                                }}
                                                            >
                                                                <Picker.Item label="Ch???n tr???ng t???i xe" value="loaixevanchuyen" />
                                                                <Picker.Item label="0.5 - 1 T???n" value="1tan" />
                                                                <Picker.Item label="2 - 6 T???n" value="6tan" />
                                                                <Picker.Item label="7 - 15 T???n" value="15tan" />
                                                                <Picker.Item label="Tr??n 15 t???n" value="tren15" />

                                                            </Picker>
                                                        </View>
                                                    </View>

                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 160,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="S??? l?????ng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chi???c</Text>
                                                    </View>
                                                </View>

                                            </>

                                        }
                                    </View>
                                </View>
                                {renderAllMove()}
                            </View>

                            :
                            selectedValue === 'qua' ?
                                <View>
                                    <View style={{
                                        position: 'relative',
                                        marginBottom: 10,
                                        marginLeft: 20,
                                        marginTop: 10
                                    }}>
                                        <Text>S??? l?????ng ph???n qu??<Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 280,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 70,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10
                                            }}
                                            placeholder="Nh???p s??? l?????ng ph???n qu??"
                                            keyboardType="numeric"
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            right: 40,
                                            top: 40
                                        }}>Ph???n</Text>
                                    </View>
                                </View>
                                : null
                }


                {/* {selectedValue === 'doan' ?
                    <View style={{ width: 310, marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
                        <Button title="Th??m lo???i l????ng th???c" onPress={() => {
                            onAddSubPlan();
                        }} />
                    </View>
                    : selectedValue === 'phuongtien' ?
                        <View style={{ width: 310, marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
                            <Button title="Th??m lo???i xe" onPress={() => {
                                onAddMove();
                            }} />
                        </View> : null

                } */}
            </View>

            {
                selectedValue === 'qua' || selectedValue === 'trocap' ?
                    <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
                        <View style={{
                            flexDirection: 'row',
                            paddingTop: 10,
                        }}>
                            <AntDesign name="book" size={24} color="#024f87" />
                            <Text>Danh s??ch ng?????i nh???n <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>


                        {
                            dcResult ? <Text style={{
                                textAlign: 'center',
                                margin: 10,
                                color: '#000'
                            }}>{dcResult?.name}</Text> : null
                        }



                        <Pressable style={{
                            margin: 10
                        }} onPress={async () => {
                            setDcResult(await DocumentPicker.getDocumentAsync());
                            console.log(dcResult);
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                textDecorationStyle: 'solid',
                                textDecorationColor: 'black',
                            }}><AntDesign name="upload" size={15} color="black" />  {!dcResult ? ' Ch???n t???p' : ' Ch???n t???p kh??c'}</Text>
                        </Pressable>



                    </View> : null
            }
            {/* <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10
                }}>
                    <EvilIcons name="location" size={24} color="#024f87" />
                    <Text>?????a ??i???m th???c hi???n ho???t ?????ng <Text style={{ color: 'red' }}>*</Text></Text>
                </View>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        width: 310,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 15,
                        paddingRight: 20,
                        marginTop: 10,
                        marginLeft: 20,
                        borderRadius: 10
                    }}
                    placeholder="Nh???p ?????a ??i???m"
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name="attach-money" size={24} color="#024f87" />
                    <Text>T???ng s??? ti???n ???? chi <Text style={{ color: 'red' }}>*</Text></Text>
                </View>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        width: 310,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 15,
                        paddingRight: 20,
                        marginTop: 10,
                        marginLeft: 20,
                        borderRadius: 10
                    }}
                    placeholder="Nh???p t???ng s??? ti???n"
                    keyboardType="numeric"
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5
                }}>
                    <AntDesign name="clockcircleo" size={20} color="#024f87" />
                    <Text style={{ marginLeft: 5 }}>Th???i gian <Text style={{ color: 'red' }}>*</Text></Text>
                </View>
                <Pressable onPress={showDatePicker2}>
                    <Text style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        width: 310,
                        height: 40,
                        borderRadius: 10,
                        paddingTop: 10,
                        color: '#000',
                        // textAlign: 'center',
                        marginLeft: 20,
                        marginTop: 10,
                        paddingLeft: 15
                    }}>
                        V??o l??c {moment(dateChoose2).format('hh:mmA ')}
                        - {moment(dateChoose2).format('DD/MM/YYYY ')}
                    </Text>
                </Pressable>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible2}
                    mode="datetime"
                    onConfirm={handleConfirm2}
                    onCancel={hideDatePicker2}
                    date={dateChoose2}
                />
            </View>
            <View style={{
                marginTop: 10,
                paddingBottom: 30
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name="description" size={24} color="#024f87" />
                    <Text style={{ marginLeft: 5 }}>M?? t??? chi ti???t <Text style={{ color: 'red' }}>*</Text></Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={100}
                        style={{
                            borderColor: 'gray',
                            width: 310,
                            height: 130,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            // marginLeft: 20,
                            borderRadius: 10,
                            textAlignVertical: 'top',
                            marginTop: 10,
                            paddingTop: 10,
                            marginRight: 10
                        }}
                        placeholder="Nh???p m?? t??? chi ti???t"
                    />
                </View>
                <View style={{
                    marginBottom: 10
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="camerao" size={24} color="#024f87" />
                        <Text style={{
                            marginLeft: 5
                        }}>
                            H??nh ???nh  <Text style={{ color: 'red' }}>*</Text>
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
                        marginTop: 15,
                        marginRight: 10
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
            </View> */}
            {/* </View> */}






            {/* ================================= */}
            <View style={{
                paddingBottom: 15
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20,
                }}>
                    <Ionicons name="location-outline" size={24} color="#0F6657" />
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 5,
                        fontSize: 15
                    }}>?????a ??i???m th???c hi???n:</Text>

                </View>
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    268 T?? Hi???n Th??nh, Ph?????ng 15, Qu???n 10, Th??nh ph??? H??? Ch?? Minh</Text> */}
                <View style={{
                    alignItems: 'center',
                    paddingLeft: 8,
                    // paddingRight: 30
                }}>
                    <TextInput
                        value='230 ???????ng Man Thi???n, TP. th??? ?????c, TP. H??? Ch?? Minh'
                        multiline={true}
                        numberOfLines={5}
                        style={{
                            borderColor: 'gray',
                            width: 344,
                            height: 70,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            // marginLeft: 20,
                            borderRadius: 10,
                            textAlignVertical: 'top',
                            marginTop: 10,
                            paddingTop: 10,
                            marginRight: 10
                        }}
                        placeholder="Nh???p m?? t??? chi ti???t"
                    />
                </View>
            </View>
            {/* <View style={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: 20,
                paddingBottom: 5,
            }}>
                <AntDesign name="filetext1" size={24} color="#0F6657" />
                <Text style={{
                    fontWeight: 'bold',
                    marginLeft: 5,
                    fontSize: 15
                }}>S??? l?????ng:</Text> */}
            {/* <Text style={{
                    marginLeft: 5,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    5 xe t???i th??ng lo???i 0.5 - 1 t???n</Text> */}

            {/* </View> */}
            {/* < View style={{ flexDirection: 'row' }
            }>
                <View style={{
                    alignItems: 'center',
                    paddingBottom: 12,
                    paddingLeft: 24
                }}>
                    <TextInput
                        value='1000'
                        multiline={true}
                        numberOfLines={5}
                        keyboardType="numeric"
                        style={{
                            borderColor: 'gray',
                            width: 183,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            // marginLeft: 20,
                            borderRadius: 10,
                            textAlignVertical: 'top',
                            marginTop: 10,
                            paddingTop: 10,
                            marginRight: 10
                        }}
                        placeholder="Nh???p m?? t??? chi ti???t"
                    />
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',

                    width: 150,
                    marginTop: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Picker
                        selectedValue={selectedValue2}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                        pickerStyleType={{
                            paddingBottom: 10
                        }}
                    >
                        <Picker.Item label="Ch???n ????n v???" value="chondonvi" />
                        <Picker.Item label="Kg" value="kg" />
                        <Picker.Item label="V???" value="vi" />
                        <Picker.Item label="Th??ng" value="thung" />
                    </Picker>
                </View>
            </ View> */}
            {/* <View style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: 310,
                marginTop: 10,
                borderRadius: 10,
                marginBottom: 10,
                height: 40,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Picker
                    selectedValue={selectedValueXe}
                    onValueChange={(itemValue, itemIndex) => setSelectedValueXe(itemValue)}
                    pickerStyleType={{
                        paddingBottom: 10
                    }}
                >
                    <Picker.Item label="Ch???n ph????ng ti???n" value="chondonvi" />
                    <Picker.Item label="Ph????ng ti???n di chuy???n" value="dichuyen" />
                    <Picker.Item label="Ph????ng ti???n v???n chuy???n" value="vanchuyen" />
                </Picker>
            </View> */}
            {/* < View style={{ marginLeft: 24, marginBottom: 4 }}>
                <Text>Ch???n lo???i xe v???n chuy???n <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 344,
                    marginTop: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Picker
                        selectedValue={selectedValueDiChuyen}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueDiChuyen(itemValue)}
                        pickerStyleType={{
                            paddingBottom: 10,
                        }}
                    >
                        <Picker.Item label="    Ch???n lo???i xe" value="loaidichuyen" />
                        <Picker.Item label="    Xe 2 t???n" value="4cho" />
                        <Picker.Item label="    Xe 4 t???n" value="7cho" />
                        <Picker.Item label="    Xe 6 t???n" value="16cho" />
                        <Picker.Item label="    Xe 8 t???n" value="24cho" />
                    </Picker>
                </View>
            </View > */}
            <View style={{
                paddingBottom: 0,
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <AntDesign name="clockcircleo" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Th???i gian b???t ?????u: </Text>
                    </Text>
                </View>

            </View>
            {/* ??dfasf */}
            <View style={{ marginTop: 0, paddingLeft: 4, paddingBottom: 14 }}>
                {/* <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 8
                }}>
                    <AntDesign name="clockcircleo" size={20} color="#024f87" />
                    <Text style={{ marginLeft: 5 }}>Th???i gian <Text style={{ color: 'red' }}>*</Text></Text>
                </View> */}
                <Pressable onPress={showDatePicker2}>
                    <Text style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        width: 344,
                        height: 40,
                        borderRadius: 10,
                        paddingTop: 10,
                        color: '#000',
                        // textAlign: 'center',
                        marginLeft: 20,
                        marginTop: 10,
                        paddingLeft: 15
                    }}>
                        V??o l??c {moment(dateChoose2).format('hh:mmA ')}
                        - {moment(dateChoose2).format('DD/MM/YYYY ')}
                    </Text>
                </Pressable>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible2}
                    mode="datetime"
                    onConfirm={handleConfirm2}
                    onCancel={hideDatePicker2}
                    date={dateChoose2}
                />
            </View>
            {/* ??dfasf */}
            <View style={{
                paddingBottom: 0
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <AntDesign name="clockcircleo" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Th???i gian ho??n th??nh: </Text>
                    </Text>
                </View>

            </View>

            <View style={{ marginTop: 0, paddingLeft: 4, paddingBottom: 14 }}>
                {/* <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 8
                }}>
                    <AntDesign name="clockcircleo" size={20} color="#024f87" />
                    <Text style={{ marginLeft: 5 }}>Th???i gian <Text style={{ color: 'red' }}>*</Text></Text>
                </View> */}
                <Pressable onPress={showDatePicker3}>
                    <Text style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        width: 344,
                        height: 40,
                        borderRadius: 10,
                        paddingTop: 10,
                        color: '#000',
                        // textAlign: 'center',
                        marginLeft: 20,
                        marginTop: 10,
                        paddingLeft: 15
                    }}>
                        V??o l??c {moment(dateChoose3).format('hh:mmA ')}
                        - {moment(dateChoose3).format('DD/MM/YYYY ')}
                    </Text>
                </Pressable>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible3}
                    mode="datetime"
                    onConfirm={handleConfirm3}
                    onCancel={hideDatePicker3}
                    date={dateChoose3}
                />
            </View>

            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <MaterialIcons name="attach-money" size={24} color="#0F6657" />
                    <Text style={{
                        marginLeft: 5,
                        fontSize: 15
                    }}>T???ng s??? ti???n ???? chi:
                    </Text>
                </View>

            </View>
            <View style={{
                alignItems: 'center',
                // justifyContent: 'center',
                paddingBottom: 12,
                marginTop: -10,
                flexDirection: 'row',
                paddingLeft: 24,
            }}>
                <TextInput
                    value='50000000'
                    multiline={true}
                    numberOfLines={5}
                    keyboardType="numeric"
                    style={{
                        borderColor: 'gray',
                        width: 302,
                        height: 40,
                        borderWidth: 1,
                        paddingLeft: 15,
                        paddingRight: 20,
                        // marginLeft: 20,
                        borderRadius: 10,
                        textAlignVertical: 'top',
                        marginTop: 10,
                        paddingTop: 10,
                        marginRight: 10
                    }}
                    placeholder="Nh???p m?? t??? chi ti???t"
                />
                <Text style={{
                    // marginLeft: 5,
                    fontSize: 15,
                    marginTop: 10,
                }}>VND
                </Text>
            </View>

            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <AntDesign name="filetext1" size={24} color="#0F6657" />
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 5,
                        fontSize: 15
                    }}>M?? t??? chi ti???t:</Text>

                </View>
                <View style={{
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <TextInput
                        value='??? V??o l??c 5:00AM 19/09/2021 ???? mua 100 bao g???o, m???i bao 50kg gi??
                        500.000VN??/bao t???i t???p h??a Ph????ng Linh Qu???n 9 TP HCM. T???ng c???ng
                        50,000,000 VN??'
                        multiline={true}
                        numberOfLines={5}
                        style={{
                            borderColor: 'gray',
                            width: 344,
                            height: 130,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            // marginLeft: 20,
                            borderRadius: 10,
                            textAlignVertical: 'top',
                            marginTop: 10,
                            paddingTop: 10,
                            marginRight: 10
                        }}
                        placeholder="Nh???p m?? t??? chi ti???t"
                    />
                </View>
                <View style={{
                    flexDirection: 'row', marginBottom: 20, marginLeft: 15,
                    alignContent: 'center',
                    // textAlign: 'center',
                }}>
                    <Pressable>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={{
                                padding: 15,
                                backgroundColor: 'red',
                                width: 165,
                                textAlign: 'center',
                                borderRadius: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                marginLeft: 11,
                                marginRight: 11,
                            }}>X??a</Text>
                        </View>
                    </Pressable>


                    {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{
                            padding: 15,
                            backgroundColor: 'orange',
                            width: 107,
                            textAlign: 'center',
                            borderRadius: 10,
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: 11,
                        }}>H???y b???</Text>
                    </View> */}
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{
                            padding: 15,
                            backgroundColor: 'green',
                            width: 165,
                            textAlign: 'center',
                            borderRadius: 10,
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: 11,
                        }}>L??u</Text>
                    </View>
                </View>
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    ???  V??o l??c 5:00AM 18/09/2021 ???? thu?? 5 xe v???n t???i t???i GOGOX ????? v???n chuy???n h??ng h??a t??? thi???n.</Text> */}
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    ???  V??o l??c 7:00AM 19/09/2021 ???? mua 40KG t??i ni l??ng lo???i 10KG gi?? 50.000VN??/KG t???i ?????i l?? t??i nil??ng Ng???c Hoa.</Text>
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    ???  V??o l??c 11:00AM 19/09/2021 ???? mua 10 th??ng n?????c su???i t???i t???p ho?? Th??nh T??n cho ??o??n c??ng t??c t??? thi???n.</Text> */}
            </View>

            {/* <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <SimpleLineIcons name="user" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Ng?????i th???c hi???n: </Text>
                        Nguy???n V??n An</Text>
                </View>

            </View> */}
            {/* <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <SimpleLineIcons name="user-following" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Ng?????i ki???m duy???t: </Text>
                        L?? Duy Tu???n V??</Text>
                </View>

            </View> */}
            {/* <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <Feather name="check-circle" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Tr???ng th??i: </Text>
                        ???? ho??n th??nh</Text>
                </View>

            </View> */}


        </ScrollView >
    )
}