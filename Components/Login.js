import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Config';
import SignUp from './SignUp'
import Feather from 'react-native-vector-icons/Feather';



export default function Login({ navigation }) {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [signedIn, setSignedIn] = useState(false)

  // saves the Authentification for the users email and password when they first login into the backend tables.
  // const handleLogin = () => {
  //     signInWithEmailAndPassword(auth, email, password)
  //         .then(() => {
  //             console.log('Logged in')
  //             setSignedIn(true)
  //             navigation.navigate('Home')
  //         })
  //         .catch((error) => {
  //             console.log(error.message);
  //             setSignedIn(false)
  //         })
  // }
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', backgroundColor: 'white'
    }}>

      <Image style={{ width: 250, height: 200, borderRadius: 30, marginTop: 20 }} source={require("../assets/Images/choose.png")}/>
      <Text>By Logining in you are agreeing our...</Text>
      <Text style={{ color: 'blue' }}>Term and privacy policy</Text>
      <View style={[styles.card, styles.shadowProp]}>
        <TextInput placeholder='USERNAME' style={{ borderWidth: 2, borderRadius: 20, padding: 15, width: 250, borderStyle: 'dashed', margin: 5 }}></TextInput>
        <TextInput placeholder='PASSWORD' style={{ borderWidth: 2, borderRadius: 20, padding: 15, marginTop: 5, width: 250, borderStyle: 'dashed', margin: 5 }}></TextInput>
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            backgroundColor: '#998184',
            // borderWidth: 2,
            borderRadius: 20,
            margin: 15
          }}

        >
          <Text style={{ color: 'white', alignSelf: 'center', margin: 10, width: 140, paddingLeft: 35, height: 30, fontSize: 20 }} > 
          <Feather name="log-in" size={15} color='white' />Login</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 25, marginBottom: 8}}>No user account?</Text>
        <View
          style={{
            alignItems: 'flex-end',
            backgroundColor: '#998184',
            // borderWidth: 2,
            borderRadius: 20,
            // margin: 15
          }}

        >
          <Pressable  onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: 'white', alignSelf: 'center', margin: 10, width: 140, paddingLeft: 35, height: 30, fontSize: 20 }} > <Text />Sign Up</Text>
          </Pressable>
        </View>

      </View>

    </SafeAreaView>


  )
}
const styles = StyleSheet.create({


  but: {
    borderRadius: 10,
    margin: 11,
    padding: 7,
    width: "40%",
    backgroundColor: "#BABEE7",
  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    fontFamily: 'Cochin',
    color: '#1d386f',
    fontWeight: 'bold',
    fontSize: 19,
  },
  card: {
    backgroundColor: '#D3B3B8',
    opacity: 0.95,
    borderRadius: 20,
    padding: 10,
    width: '80%',
    height: '60%',
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: '#3e529b',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
});

