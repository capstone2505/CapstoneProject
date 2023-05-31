import { View, Text, Pressable, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleChatIconPress = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: 'white', height: 1500 }}>
        <View>
          <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={require("../assets/Images/logo.png")} />
          <View style={{ width: 80, height: 40, backgroundColor: 'rosybrown', borderRadius: 40, marginLeft: 340 }}>
            <Pressable  onPress={() => navigation.navigate("Login")}    style={{
                alignItems: 'flex-end',
              }}>
                <Text style={{ color: 'white', alignSelf: 'center', margin: 10, fontSize: 15 }} > <Feather name="log-in" size={15} color='white' /> Login </Text>
                </Pressable>
          </View>
        </View>
        <View><Image style={{ width: 435, height: 150, alignSelf: 'center' }} source={require("../assets/Images2/homepage.png")}></Image></View>
        <View >
          <Image style={{ width: 425, height: 150, alignSelf: 'center' }} source={require("../assets/Images2/start_order.jpg")}></Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 105, height: 100, alignSelf: 'center', margin: 15, borderRadius: 20 }} source={require("../assets/Images2/dose.png")}></Image>
          <Image style={{ width: 105, height: 100, alignSelf: 'center', margin: 15, borderRadius: 20 }} source={require("../assets/Images2/charger.jpg")}></Image>
          <Image style={{ width: 105, height: 100, alignSelf: 'center', margin: 15, borderRadius: 20 }} source={require("../assets/Images2/cheatB.jpeg")}></Image>
        </View>
        <View style={{ backgroundColor: 'lavenderblush', borderRadius: 20, width: 350, height: 30, alignSelf: 'center' }}>

          <TouchableOpacity>
            <Text style={{ padding: 5, alignSelf: 'center', fontWeight: 'bold', color: 'red' }}>Click Here To Check Out Our Offers <MaterialCommunityIcons name="arrow-right-bold" size={15} /></Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 150, height: 200, borderRadius: 30, marginTop: 20 }} source={require("../assets/Images2/paws.jpg")}></Image>
          <View style={{ width: 230, height: 200, backgroundColor: 'lavenderblush', borderRadius: 10, margin: 20 }}>
            <View style={{ alignSelf: 'center', margin: 55 }}>
              <Text style={{ color: 'rosybrown', fontWeight: 'bold', fontSize: 20 }}> CATERING FOR YOU</Text>
              <Text style={{ color: 'rosybrown' }}> food services that create good opportunities</Text>

            </View>
            <TouchableOpacity onPress={handleChatIconPress} style={{ marginLeft: 196 }}>
              <MaterialCommunityIcons name="chat-processing-outline" size={35} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Modal for Chat */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Chat content goes here */}
            <Text style={styles.modalText}>This is the live chat!</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalCloseButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
