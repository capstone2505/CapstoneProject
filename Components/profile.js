import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//DB work
import { auth, db } from './Config';
import { getDocs, collection, query, where } from "firebase/firestore";

//npm install react-native-vector-icons --save

const Profile = ({ navigation }) => {

  const [profile, setProfile] = useState(null)
  let user = auth?.currentUser?.email;
  console.log(user);

  useEffect(() => {
    readAllWhere();
  }, [user]);

  const readAllWhere = async () => {
    const q = query(collection(db, "user"), where("email", "==", user));
    const docs = await getDocs(q);
    const profiles = [];
    docs.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      profiles.push(doc.data());
      console.log(profiles);
    });
    setProfile(profiles); // Set the first profile in the array
  }
  console.log(profile);

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 30 }}>Profile</Text>

      {
        profile ?
          <View style={{ alignItems: 'center', }}>
            {
              profile.map((item, index) => (
                <View key={index}>
                  <View style={{ alignItems: "center" }}>
                    <View style={styles.imgProfile}>
                      <Text style={{fontSize: 40}}>{(item.email.charAt(0).toUpperCase() + item.email.slice(1))[0]}</Text>
                    </View>
                  </View>
                  <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: '50%', borderRadius: 8, padding: 8, marginBottom: 25 }}>
                    <TouchableOpacity onPress={() =>
                      navigation.navigate({
                        name: "EditProfile",
                        params: {
                          name: item.name,
                          email: item.email,
                          contact: item.contact,
                        },
                      })
                    }>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name='edit' color={'white'} size={20} />
                        <Text style={{ color: 'white' }}> Edit Profile </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
          :
          null
      }

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Account Info</Text>
      {
        profile ?
          <View style={{ alignItems: 'center', marginBottom: 50 }}>
            {
              profile.map((item, index) => (
                <View key={index}>
                  <View style={[styles.txt, { flexDirection: 'row' }]}>
                    <MaterialCommunityIcons name='account' color={'#998184'} size={20} />
                    <Text style={{ color: '#998184' }}> {item.name} </Text>
                  </View>
                  <View style={[styles.txt, { flexDirection: 'row' }]}>
                    <Fontisto name='email' color={'#998184'} size={20} />
                    <Text style={{ color: '#998184' }}> {item.email} </Text>
                  </View>
                  <View style={[styles.txt, { flexDirection: 'row' }]}>
                    <FontAwesome name='phone' color={'#998184'} size={20} />
                    <Text style={{ color: '#998184' }}> {item.contact}</Text>
                  </View>
                </View>
              ))}
          </View>
          :
          null
      }

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address</Text>
      <View style={[styles.txt, { marginBottom: 25 }]}>
        <Text style={{ color: '#998184', margin: 5 }}> City </Text>
        <Text style={{ color: '#998184', margin: 5 }}> Street number </Text>
        <Text style={{ color: '#998184', margin: 5 }}> Street name </Text>
        <Text style={{ color: '#998184', margin: 5 }}> Building number </Text>
      </View>
    </SafeAreaView >
  );
}

export default Profile

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
    width: '80%',
    width: 350,
    padding: 10,
    borderRadius: 8,
    margin: 6,
    backgroundColor: 'white',
    backgroundColor: '#F7EBED',
  },
})

