import React, { useState, useRef } from 'react'
import { Image, Pressable, Text, View, TextInput, Picker } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageView from "react-native-image-viewing";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

import { SimpleLineIcons, Ionicons, AntDesign, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function EditActivity(props) {

    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const day = new Date();
    const [dateChoose2, setDateChoose2] = useState(day)
    const refRBSheet = useRef();

    const images = [
        {
            uri: "https://cdnmedia.baotintuc.vn/Upload/pTMF1jgWpbjY1m8G1xWUsg/files/2021/07/cactinhungho/binhthuanh13.jpg",
        },
        {
            uri: "https://info-imgs.vgcloud.vn/2020/10/22/18/am-ap-nhung-chuyen-xe-nghia-tinh-cho-hang-cuu-tro-huong-ve-mien-trung.jpg",
        },
        {
            uri: "https://cdnmedia.baotintuc.vn/Upload/e9GdNZvHDFi8lZSWc6ubA/files/2020/10/xe-cuu-tro-281020a.jpeg",
        },
        {
            uri: "https://img.nhandan.com.vn/resize/600x-/Files/Images/2020/09/10/tr8-1599678065249.jpg",
        },
        {
            uri: "https://i.ytimg.com/vi/gv7-Px62pAw/maxresdefault.jpg",
        },
        // {
        //     uri: "https://bizweb.dktcdn.net/100/057/061/articles/1-5d577fe7-41bb-4a48-a111-6c794eaca24a.jpg?v=1499325275443",
        // },
        // {
        //     uri: "https://cdn.vietnambiz.vn/stores/news_dataimages/thuongnt/032018/05/06/tp-hcm-tap-hoa-truyen-thong-song-lay-lat-22-.7466.jpg",
        // },
        // {
        //     uri: "https://images-ext-1.discordapp.net/external/Qq7qhGXcErrhPDUUDk6dAt_lk0sMS5XJs_ST-lAYfkE/https/dongsaigonplas.com/vnt_upload/File/06_2019/vi-tri-cua-hang.jpg",
        // },
    ];

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

            <View style={{
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



            </View>

            <View style={{
                paddingBottom: 10
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
                        value='268 Tô Hiến Thành, Phường 15, Quận 10, Thành phố Hồ Chí Minh'
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
            <View style={{
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
                }}>Số lượng:</Text>
                {/* <Text style={{
                    marginLeft: 5,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    5 xe tải thùng loại 0.5 - 1 tấn</Text> */}

            </View>
            <View style={{
                alignItems: 'center',
                paddingBottom: 12,
                paddingLeft: 8
            }}>
                <TextInput
                    value='5 xe tải thùng loại 0.5 - 1 tấn'
                    multiline={true}
                    numberOfLines={5}
                    style={{
                        borderColor: 'gray',
                        width: 344,
                        height: 50,
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
                        value='Vào lúc 5:00AM 18/09/2021 đã thuê 5 xe vận tải tại GOGOX để vận chuyển hàng hóa từ thiện.'
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
                                width: 107,
                                textAlign: 'center',
                                borderRadius: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                marginLeft: 11,
                                marginRight: 11,
                            }}>Xóa</Text>
                        </View>
                    </Pressable>


                    <View style={{ alignItems: 'center', marginTop: 20 }}>
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
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{
                            padding: 15,
                            backgroundColor: 'green',
                            width: 107,
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


        </ScrollView>
    )
}