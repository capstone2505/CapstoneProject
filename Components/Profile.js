//Farah Aboudia 60093383
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = ({ navigation }) => {

  return (
    <ImageBackground resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 30 }}>Profile</Text>
      <View style={{ alignItems: "center" }}>
        {/* <TouchableOpacity> */}
          <View style={styles.imgProfile}>
            <Text>55555</Text>  
            </View>
        {/* </TouchableOpacity> */}
      </View>

      {/* { */}
        <View style={{ alignItems: 'center', }}>
          <View style={styles.txt}>
            <Text>Name : </Text>
          </View>
          <View style={styles.txt}>
            <Text>Age: </Text>
          </View>
          <View style={styles.txt}>
            <Text>Email: </Text>
          </View>
          <View style={styles.txt}>
            <Text>Contact: </Text>
          </View>
          <View style={styles.txt}>
            <Text>Address: </Text>
          </View>
        </View>
      {/* } */}

      <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#FFF2B2', width: '50%', borderRadius: 8, padding: 8 }}>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name='log-out' color={'green'} size={20} />
            <Text> SignOut </Text>
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
  },
  txt: {
    // borderColor: 'green',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderRadius: 8,
    margin: 6,
    backgroundColor: 'white', 
  },
})