import * as React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView , Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';


// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function OrderedPlaced({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Pressable  onPress={() => navigation.navigate("Home")}>
      <Text style={styles.x}>{"X"}</Text>
                </Pressable>
       
      </View>
      {/* <View style={styles.content}> */}
        <Image style={styles.thankYou} source={require('../assets/Images/ThankYou.png')} />
        {/* <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Order</Text>
        </TouchableOpacity> */}
      {/* </View> */}
      <View style={{ marginBottom: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8 }}>
            
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable  onPress={() => navigation.navigate("TrackOrder")}>
                <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Track Order </Text>
                </Pressable>
              </View>
            
          </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      alignItems: 'flex-start',
      padding: 16,
  
    },
    x: {
        fontSize: 50,
        fontWeight: 'bold',
        alignItems: "right",
    },
    thankYou: {
      marginTop: 50,
        width: '100%',
        height: 500,
        marginBottom: 30,
    },
    trackButton: {
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        width: "40%",
        backgroundColor: "#B38481",
    },
    trackButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      alignItems: 'center',
    },
});