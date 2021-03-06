import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import StepProgress from "../component/StepProgress";

export default function CharityDetail({ navigation, route }) {
  const { item } = route.params;

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <View
        style={{
          marginTop: 25,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 15,
          paddingRight: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          color: "#000",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("MainScreen");
          }}
        >
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
        <Text
          style={{
            fontSize: 17,
            color: "#000",
          }}
        >
          {item.title}
        </Text>
        <Pressable
          onPress={() => {
            navigation.push("InfoActivity");
          }}
        >
          <AntDesign name="infocirlceo" size={20} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          }}
        >
          <Image
            style={{
              height: 200,
            }}
            source={{ uri: item.imgURL }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: 'center'
              marginBottom: 10,
              marginTop: 6,
            }}
          >
            <MaterialCommunityIcons
              name="file-document-outline"
              size={30}
              color="green"
            />
            <Text
              style={{
                marginTop: 14,
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 7,
                marginLeft: 5,
              }}
            >
              Th??ng tin chi???n d???ch t??? thi???n
            </Text>
          </View>

          <View style={styles.viewStyle}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? Ng?????i ph??? tr??ch:
              <Text style={{ fontWeight: "bold" }}>{item.owner}</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? Tr???ng th??i:
              <Text style={{ fontWeight: "bold" }}>{item.status}</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? T???ng s??? ti???n:
              <Text style={{ fontWeight: "bold" }}>
                {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VN??
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? Ti???n ????? gi???i ng??n:
              <Text style={{ fontWeight: "bold" }}>{item.progress}%</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? S??? ti???n c??n l???i:
              <Text style={{ fontWeight: "bold" }}>
                {(item.total - (item.total * item.progress) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VN??
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? Ng??y b???t ?????u chi???n d???ch:
              <Text style={{ fontWeight: "bold" }}>{item.date}</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              ??? D??? ki???n ho??n th??nh chi???n d???ch:
              <Text style={{ fontWeight: "bold" }}>10/10/2021</Text>
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: 'center'
              marginTop: 12,
              marginBottom: 10,
            }}
          >
            <MaterialIcons name="campaign" size={30} color="blue" />
            <Text
              style={{
                marginTop: 8,
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 7,
                marginLeft: 5,
              }}
            >
              Nhi???m v??? ???????c ph??n c??ng
            </Text>
          </View>
          <View style={{ height: 300, marginBottom: 50 }}>
            <Pressable
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: "#fff",
                height: 250,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
                borderRadius: 10,
                paddingLeft: 20,
                marginRight: 10,
              }}
              onPress={() => {
                navigation.push("mission")
              }}
            >
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Ho???t ?????ng:</Text> Mua l????ng
                th???c
              </Text>
              <Text style={{ paddingVertical: 5, fontWeight: "bold" }}>
                Lo???i l????ng th???c:</Text>
              <Text>??? 1400 th??ng m??</Text>
              <Text>??? 1000 kg g???o</Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>S??? ti???n d??? t??nh:</Text>
                190.000.000 VND
              </Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Th???i gian b???t ?????u:</Text>
                19/09/2021
              </Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Th???i gian k???t th??c:</Text>
                21/09/2021
              </Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Ng?????i ph??? tr??ch:</Text> ?????
                Th??? Th???o
              </Text>
            </Pressable>
            {/* <StepProgress navigation={navigation} /> */}
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    width: 355,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    paddingBottom: 20,
    paddingTop: 5,
    borderRadius: 7,
  },
});
