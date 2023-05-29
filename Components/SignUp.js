import { View, Text ,Image,SafeAreaView, TextInput,StyleSheet,TouchableOpacity, ScrollView ,Pressable} from 'react-native'
import React from 'react'


const SignUp = ({ navigation }) => {
  return (
    <ScrollView>
    <SafeAreaView style={{backgroundColor:'white',width:500,height:1200}}>
    <View>
      
      <Image style={{width:400,height:200,borderRadius:30}} source={require("../assets/Images2/choose.png")}></Image>
    </View>
    <View>
      <Text style={{fontSize:25,marginLeft:10,marginBottom:10}}> Create account</Text>
    </View>
    <View>
      <Text style={[styles.txtstyle]}>Name</Text>
      <TextInput placeholder='Your Name' style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:25,width:390}}></TextInput>
      <Text style={[styles.txtstyle]}>Contact</Text>
     <TextInput placeholder='+974'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}} ></TextInput>
     <Text style={[styles.txtstyle]}>Email</Text>
      <TextInput placeholder='Email Address'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}}></TextInput>
      <Text style={[styles.txtstyle]}>Password</Text>
      <TextInput placeholder='Password'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}}></TextInput>
      <Text style={[styles.txtstyle]}>Confirm Password</Text>
      <TextInput placeholder='Confirm Password'style={{borderBottomColor:'grey',borderBottomWidth:2,fontSize:20,margin:15,width:390}}></TextInput>
      
    </View>
    <View>
    <Pressable onPress={() => navigation.navigate("Login")}
        
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
          <Text style={{textAlign: 'center', color: 'white',margin:10,width:140,height:30,fontSize:20}}> SIGN UP</Text>
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