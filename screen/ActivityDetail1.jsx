import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageView from "react-native-image-viewing";

import { SimpleLineIcons, Ionicons, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

export default function ActivityDetail1(props) {

    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

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
                }}>Th??ng tin</Text>



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
                    }}>?????a ??i???m th???c hi???n:</Text>

                </View>
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    268 T?? Hi???n Th??nh, Ph?????ng 15, Qu???n 10, Th??nh ph??? H??? Ch?? Minh</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: 20,
                paddingBottom: 9,
            }}>
                <AntDesign name="filetext1" size={24} color="#0F6657" />
                <Text style={{
                    fontWeight: 'bold',
                    marginLeft: 5,
                    fontSize: 15
                }}>S??? l?????ng:</Text>
                <Text style={{
                    marginLeft: 5,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    5 xe t???i th??ng lo???i 0.5 - 1 t???n</Text>

            </View>
            <View style={{
                paddingBottom: 10
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
                        18/09/2021</Text>
                </View>

            </View>
            <View style={{
                paddingBottom: 10
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
                        18/10/2021</Text>
                </View>

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
                    }}><Text style={{ fontWeight: 'bold', }}>T???ng s??? ti???n ???? chi: </Text>
                        10,000,000 VN??</Text>
                </View>

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
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    ???  V??o l??c 5:00AM 18/09/2021 ???? thu?? 5 xe v???n t???i t???i GOGOX ????? v???n chuy???n h??ng h??a t??? thi???n.</Text>
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

            <View style={{
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

            </View>
            <View style={{
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

            </View>
            <View style={{
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

            </View>


        </ScrollView>
    )
}