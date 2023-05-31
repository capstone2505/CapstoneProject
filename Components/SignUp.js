import { View, Text ,Image,SafeAreaView, TextInput,StyleSheet,TouchableOpacity, ScrollView, Pressable} from 'react-native'
import React ,{ useState } from 'react'
import { auth, db } from './Config';
import { addDoc, getDoc, getDocs, ref, where, collection, doc, query, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = ({ navigation }) => {

  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [Confirmpassword, ConfirmsetPassword] = useState()
  const [signedIn, setSignedIn] = useState(false)
  

  // To registe at the firebase and check if the user is there or not 
  const handleRegister = () => { 
      createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
              console.log('Signed in')
              setSignedIn(true)
              navigation.navigate('Login')
          })
          .catch((error) => console.log(error.message))
          console.log("hii from collection")
  }
  // To add data in the profile 
  const add = async () => {
      const docRef = await addDoc(collection(db, "user"), {
          name: name, contact: contact,email: email
      });
      console.log("Document written with ID: ", docRef.id);
      handleRegister()
      console.log("hii from add")
  }
  return (
    <ScrollView>
    <SafeAreaView style={{backgroundColor:'white',width:500,height:1200}}>
    <View>
      
      <Image style={{width:400,height:200,borderRadius:30}} source={require("../assets/Images/choose.png")} />
    </View>
    <View>
      <Text style={{fontSize:25,marginLeft:10,marginBottom:10}}> Create account</Text>
    </View>
    <View>
      <Text style={[styles.txtstyle]}>Name</Text>
      <TextInput placeholder='Your Name' style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:25,width:390}} onChangeText={text => setName(text)}> </TextInput>
      <Text style={[styles.txtstyle]}>Contact</Text>
     <TextInput placeholder='+974'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}} onChangeText={text => setContact(text)}> </TextInput>
     <Text style={[styles.txtstyle]}>Email</Text>
      <TextInput placeholder='Email Address'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}}onChangeText={text => setEmail(text)}></TextInput>
      <Text style={[styles.txtstyle]}>Password</Text>
      <TextInput placeholder='Password'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}} onChangeText={text => setPassword(text)}></TextInput>
      <Text style={[styles.txtstyle]}>Confirm Password</Text>
      <TextInput placeholder='Confirm Password'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}} onChangeText={text => ConfirmsetPassword(text)}></TextInput>
      
    </View>
    <View>
          <Pressable
          // onPress={() => navigation.navigate("Login")} 
          onPress={add}
          style={{
            alignItems:'center',
            backgroundColor:'#998184',
            // borderWidth:1,
            borderRadius:10,
            marginRight:5,
            width:300,
            marginLeft:68,
            marginTop: 25
          }}
          
    
        >
          <Text style={{textAlign: 'center', color: 'white',margin:10,width:140,height:30,fontSize:20}}  onPress={add}> SIGN UP</Text>
        </Pressable>
    </View>
    
    </SafeAreaView>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({

txtstyle: {
        marginLeft:20,
        marginTop:10,
        fontSize:20,

    }

  })