import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//DB work
import { auth, db } from './Config';
import { getDocs, collection, query, where, updateDoc , doc} from "firebase/firestore";

const EditProfile = ({ navigation, route }) => {

  const [name, setName] = useState()
  const [contact, setContact] = useState()

  let userId = auth?.currentUser?.email;
  console.log(userId);

  const updateProfile = async () => {
    const docRef = doc(db, "user", userId);
    await updateDoc(docRef, { name: name, contact: contact })
      .then(() => {
        console.log("Data updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const save = () => {
    updateProfile()
    navigation.goBack();
    // readAllWhere()
  }

  // const readAllWhere = async () => {
  //   const q = query(collection(db, "user"), where("email", "==", route.params.email));
  //   const docs = await getDocs(q);
  //   const profiles = [];
  //   docs.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //     profiles.push(doc.data());
  //     console.log(profiles);
  //   });
  //   setProfile(profiles); // Set the first profile in the array
  // }
  // console.log(profile);



  return (
    <SafeAreaView resizeMode="cover" style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
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
          <TextInput style={{ color: 'black' , marginRight: 5}} placeholder={' ' + route.params.name} 
           value={name} onChangeText={(txt) => setName(txt)}
          />
        </View>

        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <Fontisto name='email' color={'#998184'} size={20} />
          <Text style={{ color: 'black' }}>{'  ' + route.params.email}</Text>
        </View>
        
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <FontAwesome name='phone' color={'#998184'} size={20} />
          <TextInput style={{ color: 'blackfdf' }} placeholder={' ' + route.params.contact} 
           value={contact} onChangeText={(txt) => setContact(txt)}
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
          <Pressable onPress={() =>save()} >
            <Text style={{ color: 'white', width: 200, textAlign: 'center' }}> Save </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfile

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
})