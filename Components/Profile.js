//Farah Aboudia 60093383
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//npm install react-native-vector-icons --save

const Profile = ({ navigation }) => {

  return (
    <ImageBackground resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
      {/* <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 30 }}>Profile</Text> */}
      <View style={{ alignItems: "center" }}>
        {/* <TouchableOpacity> */}
        <View style={styles.imgProfile}>
          <Text>55555</Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>

      <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: '50%', borderRadius: 8, padding: 8, marginBottom: 25 }}>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name='edit' color={'white'} size={20} />
            <Text style={{color: 'white'}}> Edit Profile </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Account Info</Text>
      <View style={{ alignItems: 'center' , marginBottom: 50}}>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <MaterialCommunityIcons name='account' color={'#998184'} size={20} />
          <Text style={{color: '#998184'}}> Name : </Text>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <Fontisto name='email' color={'#998184'} size={20} />
          <Text style={{color: '#998184'}}> Email: </Text>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <FontAwesome name='phone' color={'#998184'} size={20} />
          <Text style={{color: '#998184'}}> Phone: </Text>
        </View>
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address</Text>
      <View style={[styles.txt, {marginBottom: 25}]}>
        <Text style={{color: '#998184', margin: 5}}> City </Text>
        <Text style={{color: '#998184', margin: 5}}> Street number </Text>
        <Text style={{color: '#998184', margin: 5}}> Street name </Text>
        <Text style={{color: '#998184', margin: 5}}> Building number </Text>

      </View>

      <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: '50%', borderRadius: 8, padding: 8 }}>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name='log-out' color={'white'} size={20} />
            <Text style={{color: 'white'}}> SignOut </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    // borderColor: 'green',
    // borderWidth: 1,
    width: 350,
    padding: 10,
    borderRadius: 8,
    margin: 6,
    backgroundColor: '#F7EBED',
  },
})