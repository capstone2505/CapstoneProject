import React ,{ useState }  from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';


import { auth, db } from './Config';
import { addDoc, getDoc, getDocs, ref, where, collection, doc, query, setDoc } from "firebase/firestore";

const ContactUs =({ navigation }) => {
  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [message,setMessage]= useState()
  //const [Confirmpassword, ConfirmsetPassword] = useState()
 // const [signedIn, setSignedIn] = useState(false)


  const add = async () => {
    const docRef = await addDoc(collection(db, "contactUS"), {
        name: name, contact: contact,email: email,message:message
    });

    console.log("Document written with ID: ", docRef.id);
    handleRegister()
    console.log("hii from add")
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.contactUsText}>{"< Contact Us"}</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.logo} source={require('../assets/Images/contact.png')} />
        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactInfoText}>Qatar - 44477888 - 360Catering@gmail.com</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Name:</Text>
          <TextInput style={styles.input} onChangeText={text => setName(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email:</Text>
          <TextInput style={styles.input} onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Phone:</Text>
          <TextInput style={styles.input} onChangeText={text => setContact(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Message:</Text>
          <TextInput style={[styles.input, styles.textArea]} multiline={true} numberOfLines={4} onChangeText={text => setMessage(text)} />
        </View>
        <View style={styles.sendButton}>
          <Pressable onPress={() => navigation.navigate("Home")}>
          
            <Text style={styles.sendButtonText}  onPress={add} > Send</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default ContactUs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-start',
    padding: 16,
  },
  contactUsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 18,
  },
  
  contactInfoContainer: {
    backgroundColor: '#EDD8CD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
    borderRadius: 10,
    width: '100%'
  },
  contactInfoText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#998184'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  labelText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  input: {
    flex: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#998184',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 8,
    width:182,
    height: 54,
  },
  sendButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
