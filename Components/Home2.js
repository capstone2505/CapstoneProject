import { View, Text, Pressable, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



const Home2 = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: "white", height: 1500 }}>
        <View>
          <Image
            style={{ width: 150, height: 150, alignSelf: "center" }}
            source={require("../assets/Images/logo.png")}
          />
        </View>
        <View>
          <Image
            style={{ width: 435, height: 150, alignSelf: "center" }}
            source={require("../assets/Images2/homepage.png")}
          ></Image>
        </View>
        <View>
          <Image
            style={{ width: 425, height: 150, alignSelf: "center" }}
            source={require("../assets/Images2/start_order.jpg")}
          ></Image>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 105,
              height: 100,
              alignSelf: "center",
              margin: 15,
              borderRadius: 20,
            }}
            source={require("../assets/Images/rosemary.png")}
          ></Image>
          <Image
            style={{
              width: 105,
              height: 100,
              alignSelf: "center",
              margin: 15,
              borderRadius: 20,
            }}
            source={require("../assets/Images2/charger.jpg")}
          ></Image>
          <Image
            style={{
              width: 105,
              height: 100,
              alignSelf: "center",
              margin: 15,
              borderRadius: 20,
            }}
            source={require("../assets/Images2/cheatB.jpeg")}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "lavenderblush",
            borderRadius: 20,
            width: 350,
            height: 30,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                padding: 5,
                alignSelf: "center",
                fontWeight: "bold",
                color: "red",
              }}
            >
              Click Here To Check Out Our Offers{" "}
              <MaterialCommunityIcons name="arrow-right-bold" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 150, height: 200, borderRadius: 30, marginTop: 20 }}
            source={require("../assets/Images2/paws.jpg")}
          ></Image>
          <View
            style={{
              width: 230,
              height: 200,
              backgroundColor: "lavenderblush",
              borderRadius: 10,
              margin: 20,
            }}
          >
            <View style={{ alignSelf: "center", margin: 55 }}>
              <Text
                style={{ color: "rosybrown", fontWeight: "bold", fontSize: 20 }}
              >
                {" "}
                CATERING FOR YOU
              </Text>
              <Text style={{ color: "rosybrown" }}>
                {" "}
                food services that create good opportunties
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={35}
              color="black"
              style={{ marginLeft: 196 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Home2



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
