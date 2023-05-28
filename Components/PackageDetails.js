import {
  StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput ,Pressable
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { CheckBox } from 'react-native-elements';
// import { TextInput } from 'react-native-gesture-handler';

const PackageDetails = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(1);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheck1 = () => {
    setChecked1(!checked1);
    if (checked1) {
      // Do something when checkbox 1 is checked
      console.log('Checkbox 1 was checked');
    } else {
      // Do something when checkbox 1 is unchecked
      console.log('Checkbox 1 was unchecked');
    }
  };

  const handleCheck2 = () => {
    setChecked2(!checked2);
    if (checked2) {
      // Do something when checkbox 2 is checked
      console.log('Checkbox 2 was checked');
    } else {
      // Do something when checkbox 2 is unchecked
      console.log('Checkbox 2 was unchecked');
    }
  };

  const handleCheck3 = () => {
    setChecked3(!checked3);
    if (checked3) {
      // Do something when checkbox 3 is checked
      console.log('Checkbox 3 was checked');
    } else {
      // Do something when checkbox 3 is unchecked
      console.log('Checkbox 3 was unchecked');
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
          marginTop: 10, width: 330, backgroundColor: '#F7EBED', borderRadius: 30, alignSelf: 'center', padding: 5, justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 6, borderRadius: 70, backgroundColor: '#D3B3B8', width: 150, paddingLeft: 10 }}>Package 1</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
          <View style={[styles.card, styles.shadowProp]}>
            <View style={{width: 100}}>
              <Text style={{ fontSize: 15, marginTop: 15 }} >Hazel  </Text>
            </View>
            <View style={{width: 50}} >
              <CheckBox
                checked={checked1}
                onPress={handleCheck1}
                style={{ color: 'pink' }}
              />
            </View>


          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <Text style={{ fontSize: 15, marginTop: 15 }}>Cold Selection</Text>
            <CheckBox
              checked={checked2}
              onPress={handleCheck2}
            />
          </View>

          {/* Cold Selection */}
          <View style={[styles.card, styles.shadowProp]}>
            <Text style={{ fontSize: 15, marginTop: 15 }}>Cold Selection </Text>
            <CheckBox
              checked={checked3}
              onPress={handleCheck3}
            />
          </View>
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
            
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable  onPress={() => navigation.navigate("MyCart")}>
                <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Add to Cart </Text>
                </Pressable>
              </View>
            
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
    // padding: 20,r
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 200,
    height: 150,
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
    paddingLeft: 35,
    borderRadius: 30,
    width: 125
  },
  quantityButton: {
    // borderWidth: 1,
    // borderColor: '#888',
    // borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
    // backgroundColor: 'pink'
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
    borderRadius: 1,
    borderStyle: 'dashed',
    height: 100,
    borderWidth: 2,
    margin: 8,
  },
  card: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F7EBED',
    opacity: 0.95,
    paddingLeft: 10,
    width: 300,
    height: 50,
    margin: 6
  },
  shadowProp: {
    shadowColor: '#3e529b',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },


})