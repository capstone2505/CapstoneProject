import { View, Text ,Image,SafeAreaView, TextInput} from 'react-native'
import React from 'react'


const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor:'white',width:500,height:1200}}>
    <View>
      
      <Image style={{width:400,height:200,borderRadius:30}} source={require("../assets/Images2/choose.png")}></Image>
    </View>
    <View>
      <Text style={{fontSize:25}}> Create account</Text>
    </View>
    <View>
      <TextInput placeholder='Your Name' style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:20}}></TextInput>
      <TextInput placeholder='Contact Number'style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:20}} ></TextInput>
      <TextInput placeholder='Email Address'style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:20}}></TextInput>
      <TextInput placeholder='Password'style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:20}}></TextInput>
      
      
    </View>
    
    </SafeAreaView>
  )
}

export default SignUp