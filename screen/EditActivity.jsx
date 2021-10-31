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
    const day = new Date();
    const [dateChoose2, setDateChoose2] = useState(day)
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

                    <Text>Phương tiện <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Picker.Item label="Chọn phương tiện" value="chondonvi" />
                        <Picker.Item label="Phương tiện di chuyển" value="dichuyen" />
                        <Picker.Item label="Phương tiện vận chuyển" value="vanchuyen" />
                    </Picker>
                </View>

                <View>
                    {selectedValueXe === 'dichuyen' ?
                        <>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <View>
                                    <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Chọn loại xe" value="loaidichuyen" />
                                            <Picker.Item label="Xe 4 chỗ" value="4cho" />
                                            <Picker.Item label="Xe 7 chỗ" value="7cho" />
                                            <Picker.Item label="Xe 16 chỗ" value="16cho" />
                                            <Picker.Item label="Xe 24 chỗ" value="24cho" />
                                            <Picker.Item label="Xe khác" value="dichuyenkhac" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Số lượng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chiếc</Text>
                                </View>

                            </View>
                            {selectedValueDiChuyen === 'dichuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nhập loại xe khác"
                                    />
                                </View> : null
                            }
                        </>
                        :
                        <>

                            <View>
                                <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        <Picker.Item label="Chọn loại xe" value="loaivanchuyen" />
                                        <Picker.Item label="Xe tải thùng kín" value="thungkin" />
                                        <Picker.Item label="Xe tải thùng phủ mui bạt" value="thung" />
                                        <Picker.Item label="Xe tải đông lạnh" value="donglanh" />
                                        <Picker.Item label="Xe khác" value="vanchuyenkhac" />

                                    </Picker>
                                </View>
                            </View>
                            {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nhập loại xe khác"
                                    />
                                </View> : null
                            }
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    position: 'relative'
                                }}>
                                    <Text>Trọng tải <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Chọn trọng tải xe" value="loaixevanchuyen" />
                                            <Picker.Item label="0.5 - 1 Tấn" value="1tan" />
                                            <Picker.Item label="2 - 6 Tấn" value="6tan" />
                                            <Picker.Item label="7 - 15 Tấn" value="15tan" />
                                            <Picker.Item label="Trên 15 tấn" value="tren15" />

                                        </Picker>
                                    </View>
                                </View>

                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Số lượng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chiếc</Text>
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
                }}>Hoạt động {index + 1}</Text>

                <View style={{ marginTop: 10 }}>
                    <Text>Hoạt động <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            <Picker.Item label="Chọn hoạt động" value="chonhd" />
                            <Picker.Item label="Mua lương thực" value="doan" />
                            <Picker.Item label="Phát quà" value="qua" />
                            <Picker.Item label="Thuê phương tiện" value="phuongtien" />
                            <Picker.Item label="Tiền trợ cấp" value="trocap" />
                            <Picker.Item label="Hoạt động khác" value="khac" />
                        </Picker>
                    </View>
                </View>
                {selectedValue === 'khac' ? <View style={{ marginLeft: 20 }}>
                    <Text>Mô tả hoạt động</Text>
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
                        placeholder="Nhập mô tả hoạt động"
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
                                <Text>Loại lương thực <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        <Picker.Item label="Chọn loại lương thực" value="loailuongthuc" />
                                        <Picker.Item label="Gạo" value="gao" />
                                        <Picker.Item label="Rau củ" value="rau" />
                                        <Picker.Item label="Mì" value="mi" />
                                        <Picker.Item label="Trứng" value="trung" />
                                        <Picker.Item label="Loại khác" value="loaikhac" />
                                    </Picker>
                                </View>
                                {selectedValue1 === 'loaikhac' ? <>
                                    <Text>Hoạt động khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nhập loại lương thực khác"
                                    />
                                </> : null}
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View>
                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            placeholder="Nhập số lượng"
                                            keyboardType="numeric"

                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: 10
                                    }}>
                                        <Text>Đơn vị <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                    <Picker.Item label="Chọn đơn vị" value="chondonvi" />
                                                    <Picker.Item label="Kg" value="kg" />
                                                    <Picker.Item label="Vỉ" value="vi" />
                                                    <Picker.Item label="Thùng" value="thung" />
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
                                            placeholder="Nhập đơn vị"
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
                                    <Text>Phương tiện <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Chọn phương tiện" value="chondonvi" />
                                            <Picker.Item label="Phương tiện di chuyển" value="dichuyen" />
                                            <Picker.Item label="Phương tiện vận chuyển" value="vanchuyen" />
                                        </Picker>
                                    </View>

                                    <View>
                                        {selectedValueXe === 'dichuyen' ?
                                            <>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <View>
                                                        <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                                <Picker.Item label="Chọn loại xe" value="loaidichuyen" />
                                                                <Picker.Item label="Xe 4 chỗ" value="4cho" />
                                                                <Picker.Item label="Xe 7 chỗ" value="7cho" />
                                                                <Picker.Item label="Xe 16 chỗ" value="16cho" />
                                                                <Picker.Item label="Xe 24 chỗ" value="24cho" />
                                                                <Picker.Item label="Xe khác" value="dichuyenkhac" />
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Số lượng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chiếc</Text>
                                                    </View>

                                                </View>
                                                {selectedValueDiChuyen === 'dichuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Nhập loại xe khác"
                                                        />
                                                    </View> : null
                                                }
                                            </>
                                            :
                                            <>

                                                <View>
                                                    <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            <Picker.Item label="Chọn loại xe" value="loaivanchuyen" />
                                                            <Picker.Item label="Xe tải thùng kín" value="thungkin" />
                                                            <Picker.Item label="Xe tải thùng phủ mui bạt" value="thung" />
                                                            <Picker.Item label="Xe tải đông lạnh" value="donglanh" />
                                                            <Picker.Item label="Xe khác" value="vanchuyenkhac" />

                                                        </Picker>
                                                    </View>
                                                </View>
                                                {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Nhập loại xe khác"
                                                        />
                                                    </View> : null
                                                }
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Trọng tải <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                                <Picker.Item label="Chọn trọng tải xe" value="loaixevanchuyen" />
                                                                <Picker.Item label="0.5 - 1 Tấn" value="1tan" />
                                                                <Picker.Item label="2 - 6 Tấn" value="6tan" />
                                                                <Picker.Item label="7 - 15 Tấn" value="15tan" />
                                                                <Picker.Item label="Trên 15 tấn" value="tren15" />

                                                            </Picker>
                                                        </View>
                                                    </View>

                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Số lượng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chiếc</Text>
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
                                        <Text>Số lượng phần quà<Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            placeholder="Nhập số lượng phần quà"
                                            keyboardType="numeric"
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            right: 10,
                                            top: 40
                                        }}>Phần</Text>
                                    </View>
                                </View>
                                : null
                }

                {/* {selectedValue === 'doan' ?
                    <View style={{ width: 310, marginBottom: 10, marginTop: 20 }}>
                        <Button title="Thêm loại lương thực" onPress={() => {
                            onAddSubPlan();
                        }} />
                    </View>
                    : selectedValue === 'phuongtien' ?
                        <View style={{ width: 310, marginBottom: 10, marginTop: 20 }}>
                            <Button title="Thêm loại xe" onPress={() => {
                                onAddMove();
                            }} />
                        </View> : null

                } */}

                <Text>Địa điểm thực hiện hoạt động <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                    placeholder="Nhập địa điểm"
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10
                }}>

                    <View>
                        <Text>Thời gian <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Text>Số tiền dự tính <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            placeholder="Nhập số tiền"
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
                    <Text>Người phụ trách <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        placeholder="Nhập họ và tên"
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

                    <Text>Loại lương thực <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Picker.Item label="Chọn loại lương thực" value="loailuongthuc" />
                        <Picker.Item label="Gạo" value="gao" />
                        <Picker.Item label="Rau củ" value="rau" />
                        <Picker.Item label="Mì" value="mi" />
                        <Picker.Item label="Trứng" value="trung" />
                        <Picker.Item label="Loại khác" value="loaikhac" />
                    </Picker>
                </View>
                {selectedValue1 === 'loaikhac' ? <>
                    <Text>Hoạt động khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        placeholder="Nhập loại lương thực khác"
                    />
                </> : null}
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            placeholder="Nhập số lượng"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>Đơn vị <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                    <Picker.Item label="Chọn đơn vị" value="chondonvi" />
                                    <Picker.Item label="Kg" value="kg" />
                                    <Picker.Item label="Vỉ" value="vi" />
                                    <Picker.Item label="Thùng" value="thung" />
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
                            placeholder="Nhập đơn vị"
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

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const handleConfirm2 = (date) => {
        setDateChoose2(date);
        hideDatePicker2();
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
                            }}>Sử dụng máy ảnh</Text>
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
                    }}>{image ? 'Chọn ảnh khác' : 'Thêm hình ảnh'}</Text>
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
                }}>Thông tin</Text>



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
                        <Text>Hoạt động <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            <Picker.Item label="Chọn hoạt động" value="chonhd" />
                            <Picker.Item label="Mua lương thực" value="doan" />
                            <Picker.Item label="Phát quà" value="qua" />
                            <Picker.Item label="Thuê phương tiện" value="phuongtien" />
                            <Picker.Item label="Tiền trợ cấp" value="trocap" />
                            <Picker.Item label="Hoạt động khác" value="khac" />
                        </Picker>
                    </View>
                </View>
                {selectedValue === 'khac' ? <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text>Mô tả hoạt động</Text>
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
                        placeholder="Nhập mô tả hoạt động"
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
                                <Text>Loại lương thực <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        <Picker.Item label="Chọn loại lương thực" value="loailuongthuc" />
                                        <Picker.Item label="Gạo" value="gao" />
                                        <Picker.Item label="Rau củ" value="rau" />
                                        <Picker.Item label="Mì" value="mi" />
                                        <Picker.Item label="Trứng" value="trung" />
                                        <Picker.Item label="Loại khác" value="loaikhac" />
                                    </Picker>
                                </View>
                                {selectedValue1 === 'loaikhac' ? <>
                                    <Text>Hoạt động khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nhập loại lương thực khác"
                                    />
                                </> : null}
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View>
                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            placeholder="Nhập số lượng"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: 10
                                    }}>
                                        <Text>Đơn vị <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                    <Picker.Item label="Chọn đơn vị" value="chondonvi" />
                                                    <Picker.Item label="Kg" value="kg" />
                                                    <Picker.Item label="Vỉ" value="vi" />
                                                    <Picker.Item label="Thùng" value="thung" />
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
                                            placeholder="Nhập đơn vị"
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
                                    <Text>Phương tiện <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Chọn phương tiện" value="chondonvi" />
                                            <Picker.Item label="Phương tiện di chuyển" value="dichuyen" />
                                            <Picker.Item label="Phương tiện vận chuyển" value="vanchuyen" />
                                        </Picker>
                                    </View>

                                    <View>
                                        {selectedValueXe === 'dichuyen' ?
                                            <>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <View>
                                                        <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                                <Picker.Item label="Chọn loại xe" value="loaidichuyen" />
                                                                <Picker.Item label="Xe 4 chỗ" value="4cho" />
                                                                <Picker.Item label="Xe 7 chỗ" value="7cho" />
                                                                <Picker.Item label="Xe 16 chỗ" value="16cho" />
                                                                <Picker.Item label="Xe 24 chỗ" value="24cho" />
                                                                <Picker.Item label="Xe khác" value="dichuyenkhac" />
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Số lượng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chiếc</Text>
                                                    </View>

                                                </View>
                                                {selectedValueDiChuyen === 'dichuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Nhập loại xe khác"
                                                        />
                                                    </View> : null
                                                }
                                            </>
                                            :
                                            <>

                                                <View>
                                                    <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            <Picker.Item label="Chọn loại xe" value="loaivanchuyen" />
                                                            <Picker.Item label="Xe tải thùng kín" value="thungkin" />
                                                            <Picker.Item label="Xe tải thùng phủ mui bạt" value="thung" />
                                                            <Picker.Item label="Xe tải đông lạnh" value="donglanh" />
                                                            <Picker.Item label="Xe khác" value="vanchuyenkhac" />

                                                        </Picker>
                                                    </View>
                                                </View>
                                                {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Nhập loại xe khác"
                                                        />
                                                    </View> : null
                                                }
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Trọng tải <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                                <Picker.Item label="Chọn trọng tải xe" value="loaixevanchuyen" />
                                                                <Picker.Item label="0.5 - 1 Tấn" value="1tan" />
                                                                <Picker.Item label="2 - 6 Tấn" value="6tan" />
                                                                <Picker.Item label="7 - 15 Tấn" value="15tan" />
                                                                <Picker.Item label="Trên 15 tấn" value="tren15" />

                                                            </Picker>
                                                        </View>
                                                    </View>

                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Số lượng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chiếc</Text>
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
                                        <Text>Số lượng phần quà<Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            placeholder="Nhập số lượng phần quà"
                                            keyboardType="numeric"
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            right: 40,
                                            top: 40
                                        }}>Phần</Text>
                                    </View>
                                </View>
                                : null
                }


                {/* {selectedValue === 'doan' ?
                    <View style={{ width: 310, marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
                        <Button title="Thêm loại lương thực" onPress={() => {
                            onAddSubPlan();
                        }} />
                    </View>
                    : selectedValue === 'phuongtien' ?
                        <View style={{ width: 310, marginBottom: 10, marginTop: 20, marginLeft: 20 }}>
                            <Button title="Thêm loại xe" onPress={() => {
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
                            <Text>Danh sách người nhận <Text style={{ color: 'red' }}>*</Text></Text>
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
                            }}><AntDesign name="upload" size={15} color="black" />  {!dcResult ? ' Chọn tệp' : ' Chọn tệp khác'}</Text>
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
                    <Text>Địa điểm thực hiện hoạt động <Text style={{ color: 'red' }}>*</Text></Text>
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
                    placeholder="Nhập địa điểm"
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name="attach-money" size={24} color="#024f87" />
                    <Text>Tổng số tiền đã chi <Text style={{ color: 'red' }}>*</Text></Text>
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
                    placeholder="Nhập tổng số tiền"
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
                    <Text style={{ marginLeft: 5 }}>Thời gian <Text style={{ color: 'red' }}>*</Text></Text>
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
                        Vào lúc {moment(dateChoose2).format('hh:mmA ')}
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
                    <Text style={{ marginLeft: 5 }}>Mô tả chi tiết <Text style={{ color: 'red' }}>*</Text></Text>
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
                        placeholder="Nhập mô tả chi tiết"
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
                            Hình ảnh  <Text style={{ color: 'red' }}>*</Text>
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
                            }}>{image ? 'Chọn ảnh khác' : 'Thêm hình ảnh'}</Text>
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
                    }}>Địa điểm thực hiện:</Text>

                </View>
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    268 Tô Hiến Thành, Phường 15, Quận 10, Thành phố Hồ Chí Minh</Text> */}
                <View style={{
                    alignItems: 'center',
                    paddingLeft: 8,
                    // paddingRight: 30
                }}>
                    <TextInput
                        value='230 đường Man Thiện, TP. thủ đức, TP. Hồ Chí Minh'
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
                        placeholder="Nhập mô tả chi tiết"
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
                }}>Số lượng:</Text> */}
            {/* <Text style={{
                    marginLeft: 5,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    5 xe tải thùng loại 0.5 - 1 tấn</Text> */}

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
                        placeholder="Nhập mô tả chi tiết"
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
                        <Picker.Item label="Chọn đơn vị" value="chondonvi" />
                        <Picker.Item label="Kg" value="kg" />
                        <Picker.Item label="Vỉ" value="vi" />
                        <Picker.Item label="Thùng" value="thung" />
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
                    <Picker.Item label="Chọn phương tiện" value="chondonvi" />
                    <Picker.Item label="Phương tiện di chuyển" value="dichuyen" />
                    <Picker.Item label="Phương tiện vận chuyển" value="vanchuyen" />
                </Picker>
            </View> */}
            {/* < View style={{ marginLeft: 24, marginBottom: 4 }}>
                <Text>Chọn loại xe vận chuyển <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Picker.Item label="    Chọn loại xe" value="loaidichuyen" />
                        <Picker.Item label="    Xe 2 tấn" value="4cho" />
                        <Picker.Item label="    Xe 4 tấn" value="7cho" />
                        <Picker.Item label="    Xe 6 tấn" value="16cho" />
                        <Picker.Item label="    Xe 8 tấn" value="24cho" />
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
                    }}><Text style={{ fontWeight: 'bold', }}>Thời gian bắt đầu: </Text>
                    </Text>
                </View>

            </View>
            {/* ádfasf */}
            <View style={{ marginTop: 0, paddingLeft: 4, paddingBottom: 14 }}>
                {/* <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 8
                }}>
                    <AntDesign name="clockcircleo" size={20} color="#024f87" />
                    <Text style={{ marginLeft: 5 }}>Thời gian <Text style={{ color: 'red' }}>*</Text></Text>
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
                        Vào lúc {moment(dateChoose2).format('hh:mmA ')}
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
            {/* ádfasf */}
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
                    }}><Text style={{ fontWeight: 'bold', }}>Thời gian hoàn thành: </Text>
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
                    <Text style={{ marginLeft: 5 }}>Thời gian <Text style={{ color: 'red' }}>*</Text></Text>
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
                        Vào lúc {moment(dateChoose2).format('hh:mmA ')}
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
                    }}>Tổng số tiền đã chi:
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
                    placeholder="Nhập mô tả chi tiết"
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
                    }}>Mô tả chi tiết:</Text>

                </View>
                <View style={{
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <TextInput
                        value='• Vào lúc 5:00AM 19/09/2021 đã mua 100 bao gạo, mỗi bao 50kg giá
                        500.000VNĐ/bao tại tạp hóa Phương Linh Quận 9 TP HCM. Tổng cộng
                        50,000,000 VNĐ'
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
                        placeholder="Nhập mô tả chi tiết"
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
                            }}>Xóa</Text>
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
                        }}>Hủy bỏ</Text>
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
                        }}>Lưu</Text>
                    </View>
                </View>
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    •  Vào lúc 5:00AM 18/09/2021 đã thuê 5 xe vận tải tại GOGOX để vận chuyển hàng hóa từ thiện.</Text> */}
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    •  Vào lúc 7:00AM 19/09/2021 đã mua 40KG túi ni lông loại 10KG giá 50.000VNĐ/KG tại đại lí túi nilông Ngọc Hoa.</Text>
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    •  Vào lúc 11:00AM 19/09/2021 đã mua 10 thùng nước suối tại tạp hoá Thành Tín cho đoàn công tác từ thiện.</Text> */}
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
                    }}><Text style={{ fontWeight: 'bold', }}>Người thực hiện: </Text>
                        Nguyễn Văn An</Text>
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
                    }}><Text style={{ fontWeight: 'bold', }}>Người kiểm duyệt: </Text>
                        Lê Duy Tuấn Vũ</Text>
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
                    }}><Text style={{ fontWeight: 'bold', }}>Trạng thái: </Text>
                        Đã hoàn thành</Text>
                </View>

            </View> */}


        </ScrollView >
    )
}