import React from 'react';
import {View,ScrollView,Text,StyleSheet,Image} from 'react-native'



export default function Packages() {
    return (
        <ScrollView>
        <View style={{backgroundColor:'white', width:500,height:1500}}>
            <Text style={{margin:30,fontSize:30 ,fontWeight:'bold'
            }}> Charger Packages</Text>
            <Image style={{width:180,height:180,borderRadius:20,marginLeft:120}} source={require('../assets/Images2/charger.webp')} />

            <View  style={[styles.card, styles.shadowProp]}>
                <View >
                    <View style={{backgroundColor:'#D3B3B8',borderRadius:20,width:150,height:30,margin:5}}>
                    <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:40,marginTop:2.5}}>Package 1</Text>
                    </View>
                <View style={{width:100,marginRight:220}}>
                <Text> 25 Person</Text>
                <Text>50 Cups </Text>
                <Text style={{color:'#D3B3B8',borderBottomWidth:1,borderBottomColor:'grey',fontWeight:'bold'}}>Read more ...</Text>
                </View>
                
                <Text style={{marginLeft:250,backgroundColor:'#D9D9D9',borderRadius:20,width:80,height:40,padding:10}}> 2500 QR 

                    </Text>
                
                </View>
                
            </View>
            <View  style={[styles.card, styles.shadowProp]}>
                <View >
                    <View style={{backgroundColor:'#D3B3B8',borderRadius:20,width:150,height:30,margin:5}}>
                    <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:40,marginTop:2.5}}>Package 2</Text>
                    </View>
                <View style={{width:100,marginRight:220}}>
                <Text> 50 Person</Text>
                <Text>100 Cups </Text>
                <Text style={{color:'#D3B3B8',borderBottomWidth:1,borderBottomColor:'grey',fontWeight:'bold'}}>Read more ...</Text>
                </View>
                    <Text style={{marginLeft:250,backgroundColor:'#D9D9D9',borderRadius:20,width:80,height:40,padding:10}}> 3500 QR 
                    </Text>
                </View>
                
            </View>
            <View  style={[styles.card, styles.shadowProp]}>
                <View >
                    <View style={{backgroundColor:'#D3B3B8',borderRadius:20,width:150,height:30,margin:5}}>
                    <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:40,marginTop:2.5}}>Package 3</Text>
                    </View>
                <View style={{width:100,marginRight:220}}>
                <Text> 75 Person</Text>
                <Text>150 Cups </Text>
                <Text style={{color:'#D3B3B8',borderBottomWidth:1,borderBottomColor:'grey',fontWeight:'bold'}}>Read more ...</Text>
                </View>
                    <Text style={{marginLeft:250,backgroundColor:'#D9D9D9',borderRadius:20,width:80,height:40,padding:10}}> 4500 QR 
                    </Text>
                </View>
                
            </View>
            <View  style={[styles.card, styles.shadowProp]}>
                <View >
                    <View style={{backgroundColor:'#D3B3B8',borderRadius:20,width:150,height:30,margin:5}}>
                    <Text style={{fontWeight:'bold',alignItems:'center',marginLeft:40,marginTop:2.5}}>Package 4</Text>
                    </View>
                <View style={{width:100,marginRight:220}}>
                <Text> 100 Person</Text>
                <Text>200 Cups </Text>
                <Text style={{color:'#D3B3B8',borderBottomWidth:1,borderBottomColor:'grey',fontWeight:'bold'}}>Read more ...</Text>
                </View>
                    <Text style={{marginLeft:250,backgroundColor:'#D9D9D9',borderRadius:20,width:80,height:40,padding:10}}> 6000 QR 
                    </Text>
                </View>
                
            </View>
            
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#F7EBED',
        opacity: 0.95,
        borderRadius: 20,
        padding: 10,
        width: 350,
        height: 170,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
       // borderWidth:2,
    },
    shadowProp: {
        shadowColor: '#3e529b',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },



})