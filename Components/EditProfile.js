import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import { auth, db } from "./Config";
import { setDoc, doc } from "firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const EditProfile = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  let user = auth?.currentUser?.email;

  const updateProfile = async () => {
    const docRef = doc(db, "users", user);
    await setDoc(
      docRef,
      { name: name, contact: contact },
      { merge: true }
    ).then(() => {
      console.log("Profile updated successfully!");
      // You can navigate to a different screen or perform any other action here after the profile is updated successfully.
    }).catch((error) => {
      console.error("Error updating profile:", error);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Edit Profile</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.imgProfile}>
          <Text style={{ fontSize: 40 }}>{(route.params.email.charAt(0).toUpperCase() + route.params.email.slice(1))[0]}</Text>
        </View>
      </View>

      <Text style={{ paddingLeft: 25, fontSize: 20, fontWeight: 'bold' }}>Account Info</Text>
      <View style={{ alignItems: 'center', marginBottom: 50 }}>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <MaterialCommunityIcons name='account' color={'#998184'} size={20} />
          <TextInput
            style={{ color: 'black' }}
            placeholder='Name'
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <Fontisto name='email' color={'#998184'} size={20} />
          <Text style={{ color: 'black' }}>{'  ' + route.params.email}</Text>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <FontAwesome name='phone' color={'#998184'} size={20} />
          <TextInput
            style={{ color: 'black' }}
            placeholder='Contact'
            value={contact}
            onChangeText={(text) => setContact(text)}
          />
        </View>
      </View>

      <Text style={{ paddingLeft: 25, fontSize: 20, fontWeight: 'bold' }}>Address</Text>
      <View style={{ alignItems: 'center', marginBottom: 50 }}>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <TextInput style={{ color: '#6B5E5E' }} placeholder=' Street number' />
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <TextInput style={{ color: '#6B5E5E' }} placeholder=' Street Name' />
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <TextInput style={{ color: '#6B5E5E' }} placeholder=' Building Number' />
        </View>
      </View>

      <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: '50%', borderRadius: 8, padding: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={updateProfile}>
            <Text style={{ color: 'white', width: 200, textAlign: 'center' }}> Save </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'pink',
    marginBottom: 30
  },
  txt: {
    width: 350,
    padding: 10,
    borderRadius: 8,
    margin: 6,
    backgroundColor: '#F7EBED',
  },
});
