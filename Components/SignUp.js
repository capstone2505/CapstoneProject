import { View, Text, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from './Config';
import { addDoc, getDoc, getDocs, ref, where, collection, doc, query, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = ({ navigation }) => {

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, ConfirmsetPassword] = useState('')
  const [signedIn, setSignedIn] = useState(false)

  const [emailError, setEmailError] = useState("")
  const [emailFocused, setEmailFocused] = useState(false);

  const [passwordError, setPasswordlError] = useState("")
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const [invaildMassage, setInvalidMassage] = useState("")
  const [emptyFields, setEmptyFields] = useState([]);

  // To registe at the firebase and check if the user is there or not 
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Signed in')
        setSignedIn(true)
        navigation.navigate('Login')
       
      })
      .catch((error) => {
        console.log(error.message)
        let e = error.code
        setInvalidMassage(e);
      })
    console.log("hii from collection")
    handleError()
  }

  // To add data in the profile 
  const add = async () => {
    //const emptyFields = Object.keys(fields).filter(key => !fields[key])

    if (!name || !contact|| !email || !password ) {
      console.log('Please fill in all fields');
      //return;
    }
    else if (password !== confirmPassword) {
      ConfirmsetPassword(true);
      console.log('Password and Confirm Password do not match');
      return;
    }
    
    else{
    const docRef = await addDoc(collection(db, "user"), {
      name: name, contact: contact, email: email, address: {city:'',streetNum:'',streetName:'',buidingNum:''}
    });
    console.log("Document written with ID: ", docRef.id);
    handleRegister()
    console.log("hii from add")
    clear()
    }
   
  }
  
  const isFieldEmpty = fieldName => emptyFields.includes(fieldName);

   const handleError = () => {

    if (password !== confirmPassword) {
      ConfirmsetPassword(true);
      console.log('Password and Confirm Password do not match');
      return;
    }
   
    
    //console.log("hhhhhhhhhhhhhhhhhhhh");
    // if (email === '' && password === '') {
    //   setEmailError('Enter an email!!');
    //   setEmailFocused(true);
    //   // setPasswordFocused(true);
    // }
    // if (email === '') {
    //   setEmailError('Enter an email!!');
    //   setEmailFocused(true);
    //   setPasswordlError('');
    //   setPasswordFocused(false);
    // }
    // if (invaildMassage === 'auth/invalid-email') {
    //   setEmailError('invalid-email!!');
    //   setEmailFocused(true);
    //   setPasswordlError('');
    //   setPasswordFocused(false);
    // }
    // if (invaildMassage === 'auth/email-already-in-use') {
    //   setEmailError('This Email already in use!');
    //   setEmailFocused(true);
    //   setPasswordlError('');
    //   setPasswordFocused(false);
    // }
    

  // const check = async () => {
  //   if (!name || !age || !country || !email || !password || !contact) {
  //     console.log('Please fill in all fields');
  //     return;
  //   }


    // else if (password === '') {
    //   setPasswordlError('Enter a password!!');
    //   setPasswordFocused(true);
    //   setEmailError('');
    //   setEmailFocused(false);
    // }

    // if (password !== '' && confirmPassword === '') {
    //   setConfirmPasswordError('Confirm your password!!');
    //   setConfirmPasswordFocused(true)

    //   setEmailError('');
    //   setEmailFocused(false);

    //   setPasswordlError('');
    //   setPasswordFocused(false);
    // }
    // else if (password !== confirmPassword) {
    //   setConfirmPasswordError('Passwords didn’t match. Try again!!');
    //   setConfirmPasswordFocused(true)

    //   setEmailError('');
    //   setEmailFocused(false);

    //   setPasswordlError('');
    //   setPasswordFocused(false);
    // }
  }
  
  const  press = () => {
    navigation.navigate("Login")
    add()

  }
  const clear = async () => {
    console.log('this is clear')
    setName("")
    setContact("")
    setEmail("")
    setPassword("")
    ConfirmsetPassword("")
  }
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: 'white', width: 450, height: 1200 }}>
        <View>

          <Image style={{ width: 400, height: 200, borderRadius: 30 }} source={require("../assets/Images/choose.png")} />
        </View>
        <View>
          <Text style={{ fontSize: 25, marginLeft: 10, marginBottom: 10 }}> Create account</Text>
        </View>
        <View>
          <Text style={[styles.txtstyle]}>Name</Text>
          <TextInput placeholder='Your Name' style={[styles.textInput ,{ borderColor: isFieldEmpty('name') ? 'red' : 'grey' }]} onChangeText={text => setName(text)}></TextInput>
          {/* { borderColor: isFieldEmpty('name') ? 'red' : '#89487c' }]} placeholder='Name' onChangeText={text => setName(text)} */}
          <Text style={[styles.txtstyle]}>Contact</Text>
          <TextInput placeholder='+974' style={styles.textInput} onChangeText={text => setContact(text)}> </TextInput>

          <Text style={[styles.txtstyle]}>Email</Text>
          <TextInput
            placeholder='Email Address'
            style={[styles.textInput, { borderBottomColor: (email === '' && emailFocused === true) || emailFocused ? 'red' : 'grey' }]}
            onChangeText={text => setEmail(text)}
          />
          {(email === '' && emailFocused === true) || emailFocused ? <Text style={styles.error}>{emailError}</Text> : null}


          <Text style={[styles.txtstyle]}>Password</Text>
          <TextInput
            placeholder='Password'
            style={[styles.textInput, { borderBottomColor: (password === '' && passwordFocused === true) || passwordFocused ? 'red' : 'grey' }]}
            onChangeText={text => setPassword(text)}
          />
          {(password === '' && passwordFocused === true) || passwordFocused ? <Text style={styles.error}>{passwordError}</Text> : null}

          <Text style={[styles.txtstyle]}>Confirm Password</Text>
          <TextInput
            placeholder='Confirm Password'
            style={[styles.textInput, { borderBottomColor: (confirmPassword === '' && confirmPasswordFocused === true) || confirmPasswordFocused ? 'red' : 'grey' }]}
            onChangeText={text => ConfirmsetPassword(text)}
          />
          {(confirmPassword === '' && confirmPasswordFocused === true) || confirmPasswordFocused ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
        </View>
        <View>
          <Pressable
            // onPress={() => navigation.navigate("Login")} 
            //onPress={add}
            onPress={press}
            style={{
              alignItems: 'center',
              backgroundColor: '#998184',
              // borderWidth:1,
              borderRadius: 10,
              marginRight: 5,
              width: 300,
              marginLeft: 68,
              marginTop: 25
            }}
          >
            <Text style={{ textAlign: 'center', color: 'white', margin: 10, width: 140, height: 30, fontSize: 20 }} > SIGN UP</Text>
          </Pressable>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
          }

export default SignUp

const styles = StyleSheet.create({

  txtstyle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  },
  textInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    fontSize: 20,
    margin: 25,
    // width: 390, 
    marginBottom: 5
  },
  error: {
    color: 'red',
    // marginTop: 15,
  },

})