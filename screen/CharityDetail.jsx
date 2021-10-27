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
              Thông tin chiến dịch từ thiện
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
              • Người phụ trách:
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
              • Trạng thái:
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
              • Tổng số tiền:
              <Text style={{ fontWeight: "bold" }}>
                {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VNĐ
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
              • Tiến độ giải ngân:
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
              • Số tiền còn lại:
              <Text style={{ fontWeight: "bold" }}>
                {(item.total - (item.total * item.progress) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VNĐ
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
              • Ngày bắt đầu chiến dịch:
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
              • Dự kiến hoàn thành chiến dịch:
              <Text style={{ fontWeight: "bold" }}>10/10/2021</Text>
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: 'center'
              marginTop: 20,
            }}
          >
            <MaterialIcons name="campaign" size={30} color="blue" />
            <Text
              style={{
                marginTop: 10,
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 7,
                marginLeft: 5,
              }}
            >
              Hoạt động được phân công
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
                <Text style={{ fontWeight: "bold" }}>Hoạt động:</Text> Mua lương
                thực
              </Text>
              <Text style={{ paddingVertical: 5, fontWeight: "bold" }}>
                Loại lương thực:</Text> 
                <Text>• 1400 thùng mì</Text>
                <Text>• 1000 kg gạo</Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Số tiền dự tính:</Text>
                190.000.000 VND
              </Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Thời gian bắt đầu:</Text>
                19/09/2021
              </Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Thời gian kết thúc:</Text>
                21/09/2021
              </Text>
              <Text style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Người phụ trách:</Text> Đỗ
                Thị Thảo
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
