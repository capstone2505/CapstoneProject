//Farah Aboudia 60093383
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//npm install react-native-vector-icons --save

const Profile = ({ navigation }) => {

  return (
    <SafeAreaView resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
      {/* <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 30 }}>Profile</Text> */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Edit Profile</Text>

      <View style={{ alignItems: "center" }}>
        {/* <TouchableOpacity> */}
        <View style={styles.imgProfile}>
          <Text>55555</Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>


      <Text style={{paddingLeft: 25, fontSize: 20, fontWeight: 'bold'}}>Account Info</Text>
      <View style={{ alignItems: 'center' , marginBottom: 50}}>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <MaterialCommunityIcons name='account' color={'black'} size={20} />
          <TextInput style={{color: 'black'}} placeholder=' Name'/>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
        <Fontisto name='email' color={'black'} size={20} />
        <TextInput style={{color: 'black'}} placeholder=' Email'/>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <FontAwesome name='phone' color={'black'} size={20} />
          <TextInput style={{color: 'blackfdf'}} placeholder='  Phone' />
        </View>
      </View>

      <Text style={{ paddingLeft: 25 , fontSize: 20, fontWeight: 'bold' }}>Address</Text>
      <View style={{ alignItems: 'center' , marginBottom: 50}}>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <TextInput style={{color: '#6B5E5E'}} placeholder=' Street number'/>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <TextInput style={{color: '#6B5E5E'}} placeholder=' Street Name'/>
        </View>
        <View style={[styles.txt, { flexDirection: 'row' }]}>
          <TextInput style={{color: '#6B5E5E'}} placeholder=' Building Number' />
        </View>
      </View>

      <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: '50%', borderRadius: 8, padding: 8 }}>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{color: 'white', width: 200, textAlign: 'center'}}> Save </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    backgroundColor: '#CCAFB4',
  },
})