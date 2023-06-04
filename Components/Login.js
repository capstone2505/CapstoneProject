import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Config';
import SignUp from './SignUp'
import Feather from 'react-native-vector-icons/Feather';
//import Home2 from './Components/Home2';



export default function Login({ navigation }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [signedIn, setSignedIn] = useState(false)

  const [emailError, setEmailError] = useState("")
  const [emailFocused, setEmailFocused] = useState(false);

  const [passwordError, setPasswordlError] = useState("")
  const [passwordFocused, setPasswordFocused] = useState(false);


  const [invaildMassage, setInvalidMassage] = useState("")
  const [done, setDone] = useState("")

  
  // saves the Authentification for the users email and password when they first login into the backend tables.

  const handleError = () => {
    if (email === '') {
        setEmailError('Enter your email!!');
        setEmailFocused(true);
        setPasswordlError('');
        setPasswordFocused(false);
    }
    else if (password === '') {
        setPasswordlError('Enter your password!!');
        setPasswordFocused(true);
        setEmailError('');
        setEmailFocused(false);
    }
    else if (invaildMassage === 'auth/invalid-email') {
        setEmailError('invalid-email!!');
        setEmailFocused(true);
        setPasswordlError('');
        setPasswordFocused(false);
    }
    else if (invaildMassage === 'auth/user-not-found') {
        setEmailError('Email is not registered');
        setEmailFocused(true);
        setPasswordlError('');
        setPasswordFocused(false);
    }
    else if (invaildMassage === 'auth/email-already-in-use') {
        setEmailError('This Email already in use!');
        setEmailFocused(true);
        setPasswordlError('');
        setPasswordFocused(false);
    }
    else if (invaildMassage === 'auth/wrong-password') {
        setPasswordlError('Wrong-Password!!');
        setPasswordFocused(true);
        setEmailError('');
        setEmailFocused(false);
    }
    else if (password.length < 6 ) {
        setPasswordlError('Password should be at least 6 characters!!');
        setPasswordFocused(true);
        setEmailError('');
        setEmailFocused(false);
        
    }
};

  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
          .then(() => {
              console.log('Logged in')
              setSignedIn(true)
              navigation.navigate('Home2')
          })
          .catch((error) => {
              console.log(error.message);
              setSignedIn(false)
          })
          console.log("hi form login")
          handleError()
  }


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
        <TextInput placeholder='Email' style={{ borderWidth: 2, borderRadius: 20, padding: 15, width: 250, borderStyle: 'dashed', margin: 5,borderColor: (email === '' && emailFocused === true) || emailFocused ? 'red' : 'white'  }} onChangeText={text => setEmail(text)}></TextInput>
        <TextInput   errorText="Enter your password" secureTextEntry placeholder='Password' style={{ borderWidth: 2, borderRadius: 20, padding: 15, marginTop: 5, width: 250, borderStyle: 'dashed', margin: 5,borderColor: (password === '' && passwordFocused === true) || passwordFocused ? 'red' : 'white'}} onChangeText={text => setPassword(text)}></TextInput>

        <View>

          {/* {(email === '' && emailFocused == true) || emailFocused == true ? <Text style={styles.error}>{emailError}</Text> : null}
          {(password === '' && passwordFocused == true) || passwordFocused == true ? <Text style={styles.error}>{passwordError}</Text> : null} */}
          {(email === '' && emailFocused === true) || emailFocused ? <Text style={styles.error}>{emailError}</Text> : null}
          {(password === '' && passwordFocused === true) || passwordFocused ? <Text style={styles.error}>{passwordError}</Text> : null}

          {done && <Text style={{ color: 'green', marginTop: 15 }}>{done}</Text>}

</View>
        <Pressable
          style={{
            alignItems: 'flex-end',
            backgroundColor: '#998184',
            // borderWidth: 2,
            borderRadius: 20,
            margin: 15
          }}
         // onPress={() => navigation.navigate("Home")}
         
        >
          <Text style={{ color: 'white', alignSelf: 'center', margin: 10, width: 140, paddingLeft: 35, height: 30, fontSize: 20 }}   onPress={handleLogin} > 
          <Feather name="log-in" size={15} color='white' />Login</Text>
        </Pressable>
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
  error: {
    color: 'red',
    marginTop: 15,
},
});

