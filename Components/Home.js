import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Modal, TextInput, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

import { db } from "./Config";
import { getDocs, collection } from "firebase/firestore";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const handleChatIconPress = () => {
    setModalVisible(true);
  };

  const handleSendButtonPress = () => {
    if (inputText) {
      const newMessage = { type: 'user', text: inputText };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText('');

      setTimeout(() => {
        let autoResponse;

        if (inputText.toLowerCase().includes('hello')) {
          autoResponse = { type: 'app', text: 'Welcome to our chat! How can we assist you?' };
        } else if (inputText.toLowerCase().includes('issue') || inputText.toLowerCase().includes('problem')) {
          autoResponse = { type: 'app', text: 'Could you please explain in more details?' };
        } else if (/^\d+$/.test(inputText)) {
          autoResponse = { type: 'app', text: 'Thank you for providing us your phone number. Please wait for our response via call or message.' };
        } else {
          autoResponse = { type: 'app', text: 'Thank you for contacting us. We received your question and will respond as soon as possible.' };
        }

        setMessages((prevMessages) => [...prevMessages, autoResponse]);
      }, 500);
    }
  };


  const handleCloseButtonPress = () => {
    setModalVisible(false);
    setMessages([]);
    setInputText('');
  };

  const [sliderCards, setSliderCards] = useState([
    require("../assets/Images/homepage.png"),
    require("../assets/Images/aboutus.png"),
    require("../assets/Images/homepage.png"),
    require("../assets/Images/offers2.png"),
    require("../assets/Images/homepage.png"),
    require("../assets/Images/saltbooth.png")
  ]);
  const randomCards = sliderCards.sort(() => Math.random() - 0.5);
  const [flag, setFlag] = useState(true);
  const [path, setPath] = useState(randomCards[0]);

  useEffect(() => {
    if (!flag) return;
    let interval = setInterval(() => {
      let random = Math.floor(Math.random() * 6);
      setPath(randomCards[random]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOffersButtonPress = () => {
    navigation.navigate('Offers');
  };
  const handleProductButtonPress = () => {
    navigation.navigate('Products');
  };

  const images = [
    { name: "rosemary.png", path: require("../assets/Images/rosemary.png") },
    { name: "charger.jpg", path: require("../assets/Images/charger.jpg") },
    { name: "cheatB.jpeg", path: require("../assets/Images/cheatB.jpeg") },
    { name: "paws.jpg", path: require("../assets/Images/paws.jpg") },

  ];

  const more = [
    { id: 1, name: "Rosemary", image: "rosemary.png" },
    { id: 2, name: "Charger", image: "charger.jpg" },
    { id: 3, name: "Cheat Burger", image: "cheatB.jpeg" },
    { id: 4, name: "Pows", image: "paws.jpg" },
  ];

  const [data, setData] = useState([]);
  const [id, setId] = useState();

  const readAll = async () => {
    const docs = await getDocs(collection(db, "products"));
    let temp = [];
    docs.forEach(async (doc) => {
      let product = doc.data();
      setId(doc.id);
      temp.push(product);
      setData(temp);
    });
  };

  useEffect(() => {
    readAll();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: 'white' }}>
          <View>
            <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={require("../assets/Images/logo.png")} />
            <View style={{ width: 80, height: 40, backgroundColor: 'rosybrown', borderRadius: 40, marginLeft: 340, marginBottom: 15 }}>
              <Pressable onPress={() => navigation.navigate("Login")} style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'white', alignSelf: 'center', margin: 10, fontSize: 15 }} >
                  <MaterialCommunityIcons name="login" size={15} color='white' /> Login
                </Text>
              </Pressable>
            </View>
          </View>
          <Card.Image style={{ padding: 0, width: 435, height: 150, alignSelf: 'center' }} source={path} />
          <View>
            <TouchableOpacity onPress={handleProductButtonPress}><Image style={{ width: 425, height: 150, alignSelf: 'center' }} source={require("../assets/Images/startOrder.png")} /></TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            {more.map((p, index) => {
              const path = images.find((img) => img.name === p.image);
              const icon = path ? path.path : null;
              const product = data.filter((item) => item.name === p.name);
              const m = product ? product : null;
              return (
                <View>
                  {product.map((x, i) => {
                    return (
                      <View key={i}>
                        <Pressable
                          onPress={() =>
                            navigation.navigate({
                              name: "Packages",
                              params: {
                                packageList: x.packages,
                                name: x.name,
                                image: x.image,
                                pId: id,
                                imgDetails: x.imgDetails,
                                extraPack: x.extraPack,
                              },
                            })
                          }
                        >
                          <Image
                            style={{
                              width: 105,
                              height: 100,
                              alignSelf: "center",
                              margin: 15,
                              borderRadius: 20,
                            }}
                            source={icon}
                          />
                        </Pressable>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <View style={{ backgroundColor: 'lavenderblush', borderRadius: 20, width: 350, height: 30, alignSelf: 'center' }}>
            <TouchableOpacity onPress={handleOffersButtonPress}>
              <Text style={{ padding: 5, alignSelf: 'center', fontWeight: 'bold', color: 'red' }}>
                Click Here To Check Out Our Offers <MaterialCommunityIcons name="arrow-right-bold" size={15} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image style={{
              width: 150, height: 200, borderRadius: 30, marginTop: 20
            }} source={require("../assets/Images/paws.jpg")} />


            <View style={{ width: 230, height: 200, backgroundColor: 'lavenderblush', borderRadius: 10, margin: 20 }}>
              <View style={{ alignSelf: 'center', margin: 55 }}>
                <Text style={{ color: 'rosybrown', fontWeight: 'bold', fontSize: 20 }}> CATERING FOR YOU</Text>
                <Text style={{ color: 'rosybrown' }}> food services that create good opportunities</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* Chat Live Icon */}
      <TouchableOpacity style={styles.chatIcon} onPress={handleChatIconPress}>
        <MaterialCommunityIcons name="chat-processing-outline" size={35} color='black' />
      </TouchableOpacity>

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
            <Text style={styles.modalTitle}>Chat with us</Text>
            <ScrollView contentContainerStyle={styles.chatContainer}>
              {messages.map((message, index) => (
                <View key={index} style={message.type === 'app' ? styles.appMessage : styles.userMessage}>
                  <Text style={styles.messageText}>{message.text}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Write your message here"
                placeholderTextColor="#999"
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendButtonPress}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseButtonPress}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'lavenderblush',
    width: width * 0.9,
    height: height * 0.6,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    color: 'brown',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textAlign: 'center',
  },
  chatContainer: {
    flexGrow: 1,
    marginBottom: 10,
  },
  appMessage: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#ffd4d4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'pink',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  chatIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'pink',
    borderRadius: 30,
    padding: 8,
    elevation: 3,

  },
});