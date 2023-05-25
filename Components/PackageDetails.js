//Farah Aboudia 60093383
import {
  StyleSheet, Text, View, TouchableOpacity, Image, ScrollView,TextInput
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
// import { TextInput } from 'react-native-gesture-handler';

const PackageDetails = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Image source={require("../assets/icon.png")} style={styles.image} />

        <View style={{ 
    //           shadowColor: '#c0c0c0',
    // shadowOpacity: 0.9,
    // shadowOffset: {
    //   height: 2,
    //   width: 2,
    // },
    // shadowRadius: 8,
    // elevation: 6,
          marginTop: 10, width: 330, backgroundColor: '#F7EBED', borderRadius: 10, alignSelf: 'center', padding: 5 , justifyContent: 'space-between'}}>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 6, borderRadius: 20, backgroundColor: '#D3B3B8', width: 150, paddingLeft: 10 }}>Package 1</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'red' }}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={handleQuantityDecrease}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={handleQuantityIncrease}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={{ width: 220 }}>
              <Text style={{ margin: 6, paddingTop: 10 }}>25 Person</Text>
              <Text style={{ margin: 6 }}>50 Cup</Text>
            </View>
            <View style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#D9D9D9',
              padding: 8,
              marginBottom: 7
            }}>
              <Text>5000 </Text>
              <Text>QR</Text>
            </View>
          </View>

        </View>

        <View style={{ marginTop: 10, width: 330, alignSelf: 'center', padding: 5 }}>
          <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>Catering Menu Include</Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}>Cold Selection </Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}> Hot Selection </Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}>Hot Sahlab </Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}>Triple Q </Text>
        </View>

        <View style={{ width: 330, alignSelf: 'center', padding: 5 }}>
          <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>Extra Order</Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}>Cold Selection </Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}> Hot Selection </Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}>Hot Sahlab </Text>
          <Text style={{ paddingLeft: 10, margin: 3 }}>Triple Q </Text>
        </View>

        <View style={{ marginBottom: 30, width: 330, alignSelf: 'center', padding: 5 }}>
          <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>Any Special Request??</Text>
          <TextInput style={styles.textInput} placeholder="Type here..."
                autoFocus
                multiline />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text> Total Amount </Text>
            <Text> 3000QR </Text>
          </View>
          <View style={{ marginBottom: 30, marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Add to Cart </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView>
  )
}

export default PackageDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 330,
    height: 290,
    resizeMode: 'contain',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    margin: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
    // backgroundColor: 'pink',
    padding: 2,
    borderRadius: 30,
    width: 125
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
    backgroundColor: 'pink'
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#888',
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,
  },
  addToCartButton: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10
  },
  textInput: {
    fontSize: 15,
    borderColor: 'gray',
    marginBottom: '3%', 
    borderRadius: 10,
    borderStyle: 'dashed',
    height: 100,
    borderWidth: 2,
    margin: 8,
  },
})