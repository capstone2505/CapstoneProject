// Edit Profile Done 
import React, { useEffect, useState } from "react";
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
import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const EditProfile = ({ navigation, route }) => {

  const { profile } = route.params;
  const [name, setName] = useState(profile[0].name);
  const [contact, setContact] = useState(profile[0].contact);
  const [email, setEmail] = useState(profile[0].email)
  const [streetNumber, setStreetNumber] = useState(profile[0].address["streetNum"])
  const [streetName, setStreetName] = useState(profile[0].address["streetName"])
  const [buildingNumber, setBuildingNumber] = useState(profile[0].address["buidingNum"])
  const [city,setCity]=useState(profile[0].address["city"])

  let userId = auth?.currentUser?.email;
  console.log("rout",profile);
  const [user, setUser] = useState();
  const [profiles, setProfiles] = useState()


  useEffect(() => {
    readAllWhere();
  }, []);
  const readAllWhere = async () => {
    const q = query(collection(db, "user"), where("email", "==", userId));
    const docs = await getDocs(q);
    const profiles = [];
    docs.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    
      setProfiles(doc.data())
    });
    console.log("ppp",profiles)
    // setProfiles(profiles); // Set the first profile in the array
  }
  console.log(profile);

  console.log(profile);
  const updateUserProfile = async () => {
    try {
      const docRef = doc(db, "user", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          name: name,
          contact: contact,
          email: email,
          address: {
            streetNum: streetNumber,
            streetName: streetName,
            buidingNum: buildingNumber,
            city: city,
          }
        });

        console.log("Profile updated successfully!");

        // You can navigate to a different screen or perform any other action here after the profile is updated successfully.
        navigation.goBack();
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Edit Profile
      </Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.imgProfile}>
          <Text style={{ fontSize: 40 }}>
          {email?.charAt(0).toUpperCase()}</Text>
        </View>
      </View>

      <Text style={{ paddingLeft: 25, fontSize: 20, fontWeight: "bold" }}>
        Account Info
      </Text>
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <View style={[styles.txt, { flexDirection: "row" }]}>
          <MaterialCommunityIcons name="account" color={"#998184"} size={20} />
          <TextInput
            style={{ color: "black" }}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={[styles.txt, { flexDirection: "row" }]}>
          <Fontisto name="email" color={"#998184"} size={20} />
          <Text style={{ color: "black" }}>{"  " + email}</Text>
        </View>
        <View style={[styles.txt, { flexDirection: "row" }]}>
          <FontAwesome name="phone" color={"#998184"} size={20} />
          <TextInput
            style={{ color: "black" }}
            placeholder="Contact"
            value={contact}
            onChangeText={(text) => setContact(text)}
          />
        </View>
      </View>

      <Text style={{ paddingLeft: 25, fontSize: 20, fontWeight: "bold" }}>
        Address
      </Text>
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <View style={[styles.txt, { flexDirection: "row" }]}>
          <TextInput
            style={{ color: "#6B5E5E" }}
            placeholder=" Street number"
            value={streetNumber}
            onChangeText={(text) => setStreetNumber(text)}
          />
        </View>
        <View style={[styles.txt, { flexDirection: "row" }]}>
          <TextInput style={{ color: "#6B5E5E" }} placeholder=" Street Name" 
          value={streetName}
          onChangeText={(text) => setStreetName(text)}/>
          
        </View>
        <View style={[styles.txt, { flexDirection: "row" }]}>
          <TextInput
            style={{ color: "#6B5E5E" }}
            placeholder=" Building Number"
            value={buildingNumber}
            onChangeText={(text) => setBuildingNumber(text)}
          />
        </View>
      </View>

      <View
        style={{
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: "#998184",
          width: "50%",
          borderRadius: 8,
          padding: 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={updateUserProfile}>
            <Text style={{ color: "white", width: 200, textAlign: "center" }}>
              
              Save
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    marginBottom: 30,
  },
  txt: {
    width: 350,
    padding: 10,
    borderRadius: 8,
    margin: 6,
    backgroundColor: "#F7EBED",
  },
});