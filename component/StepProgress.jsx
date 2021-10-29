import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  Button
} from "react-native";
import StepIndicator from "react-native-step-indicator";
import { Feather, AntDesign } from "@expo/vector-icons";
// import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const labels = ["Cart"];
const labels3 = ["Cart"];
const customStyles = {
  stepIndicatorSize: 0,
  currentStepIndicatorSize: 5,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fff",
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: "green",
  stepStrokeUnFinishedColor: "green",
  separatorFinishedColor: "#013459",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#013459",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: "#013459",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#013459",
  labelColor: "#999999",
  labelSize: 0,
  currentStepLabelColor: "#013459",
};

export default function StepProgress({ navigation }) {
  // const data = [
  //     {
  //         label: 'Thuê phương tiện',
  //         dateTime: '1:00 PM',
  //         status: 10000000,
  //         owner: 'Nguyễn Văn An'
  //     },
  // ]
  const data2 = [
    {
      label: "Mua lương thực",
      loaiLuongThuc: "Mì",
      soLuong: "1400 thùng",
      dateTime: "5:00 AM 19/09/2021",
      soTien: 140000000,
      status: "Đã được duyệt",
      owner: "Đỗ Thị Thảo",
    },
    {
      label: "Mua lương thực",
      loaiLuongThuc: "Gạo",
      soLuong: "1000 kg",
      dateTime: "10:00 AM 20/09/2021",
      soTien: 50000000,
      status: "Đang chờ duyệt",
      owner: "Đỗ Thị Thảo",
    },
  ];
  // const data3 = [
  //     {
  //         label: 'Mua vật dụng đóng gói',
  //         dateTime: '7:00 AM',
  //         status: 2000000,
  //         owner: 'Đỗ Thị Thảo'
  //     },
  // ]
  // const data4 = [
  //     {
  //         label: 'Chi phí phát sinh',
  //         dateTime: '11:00 AM',
  //         status: 500000,
  //         owner: 'Đỗ Thị Thảo'
  //     },
  // ]

  return (
    <ScrollView>
      <View
        style={{
          height: 380,
          // width: width - 70,
          marginBottom: 220,
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 20,
        }}
      >
        <View
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
            marginBottom: 20,
          }}
        >
          <StepIndicator
            customStyles={customStyles}
            labels={labels3}
            direction="vertical"
            renderLabel={({ position, stepStatus, label, crntPosition }) => {
              return (
                <Pressable
                  style={styles.lblContainer}
                  onPress={() => {
                    navigation.push("ActivityDetail");
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                      paddingTop: 7,
                      position: "relative",
                    }}
                  >
                    <Text>Thời gian: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[position].dateTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                      paddingTop: 7,
                    }}
                  >
                    <Text>Số tiền đã chi: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[position].soTien
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      VNĐ
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Hoạt động: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[position].label}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Loại lương thực: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[position].loaiLuongThuc}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Số lượng: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[position].soLuong}
                    </Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Trạng thái: </Text>
                    <Text style={{ fontWeight: "bold", color: "green" }}>
                      {data2[position].status}
                    </Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingBottom: 7,
                      paddingTop: 7,
                    }}
                  >
                    <Text>Người thực hiện:</Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[position].owner}
                    </Text>
                  </View>
                </Pressable>
              );
            }}
            stepCount="1"
          />
        </View>
        <View
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
            marginBottom: 20,
          }}
        >
          <StepIndicator
            customStyles={customStyles}
            labels={labels3}
            direction="vertical"
            renderLabel={({ position, stepStatus, label, crntPosition }) => {
              return (
                <Pressable
                  style={styles.lblContainer}
                  onPress={() => {
                    navigation.push("BrowseActivityDetail");
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                      paddingTop: 7,
                      position: "relative",
                    }}
                  >
                    <Text>Thời gian: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[1].dateTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                      paddingTop: 7,
                    }}
                  >
                    <Text>Số tiền đã chi: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[1].soTien
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      VNĐ
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Hoạt động: </Text>
                    <Text style={{ fontWeight: "bold" }}>{data2[1].label}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Loại lương thực: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[1].loaiLuongThuc}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Số lượng: </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {data2[1].soLuong}
                    </Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "lightgray",
                      paddingBottom: 7,
                    }}
                  >
                    <Text>Trạng thái: </Text>
                    <Text style={{ fontWeight: "bold", color: "orange" }}>
                      {data2[1].status}
                    </Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingBottom: 7,
                      paddingTop: 7,
                    }}
                  >
                    <Text>Người thực hiện:</Text>
                    <Text style={{ fontWeight: "bold" }}>{data2[1].owner}</Text>
                  </View>
                </Pressable>
              );
            }}
            stepCount="1"
          />
        </View>
        
        

        <Button
          title="Tạo báo cáo hoạt động"
          onPress={() => {
            navigation.push("CreateSubActivity");
          }}
        />
      </View>

      {/* <Pressable
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          elevation: 99,
          backgroundColor: "#ff8224",
          width: 60,
          height: 60,
          borderRadius: 50,
        }}
        onPress={() => {
          navigation.push("CreateSubActivity");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            lineHeight: 60,
          }}
        >
          <AntDesign
            style={{
              fontWeight: "bold",
            }}
            name="plus"
            size={35}
            color="white"
          />
        </Text>
      </Pressable> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lblContainer: {
    // marginTop: 20,
    paddingLeft: 20,
    paddingRight: 35,
    width: width - 100,
    // marginBottom: 30
  },
  viewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
  },
});
