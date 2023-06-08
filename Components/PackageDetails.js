import {
  StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, Pressable
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { CheckBox } from 'react-native-elements';
import { auth, db } from './Config';
import { addDoc, getDoc, getDocs, ref, where, collection, doc, query, setDoc } from "firebase/firestore";

// import { TextInput } from 'react-native-gesture-handler';

const PackageDetails = ({ navigation, route }) => {



  const images = [
    { name: 'chargermode.png', path: require("../assets/Images/chargermode.png") },
    { name: 'pawsbooth.png', path: require("../assets/Images/pawsbooth.png") },
    { name: 'hounbooth.png', path: require("../assets/Images/hounbooth.png") },
    { name: 'exit55table.png', path: require("../assets/Images/exit55table.png") },
    { name: 'saltbooth.png', path: require("../assets/Images/saltbooth.png") },
    { name: 'origin.png', path: require("../assets/Images/origin.png") },
    { name: 'cheatBurgerStory.png', path: require("../assets/Images/cheatBurgerStory.png") },
    { name: 'rosemarybooth.png', path: require("../assets/Images/rosemarybooth.png") },
    { name: 'exit55table.png', path: require("../assets/Images/exit55table.png") },
  ]

  const path = images.find((img) => img.name === route.params.imgDetails);
  const icon = path ? path.path : null;

  const [quantity, setQuantity] = useState(1);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [detailsPackage, setDetails] = useState(route.params.details.split(','));
  const [extra, setExtra] = useState(route.params.extraPack)
  const [totalAmount, setTotalAmount] = useState(quantity * route.params.price);

  // const [selectedExtra, setSelectedExtra] = useState(null);

  // const handleCheck = (extra) => {
  //   setSelectedExtra(extra);
  // };


  const [selectedExtras, setSelectedExtras] = useState([]);

  const handleCheck = (extra) => {
    if (selectedExtras.includes(extra)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== extra));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
    const extraPrice = selectedExtras.includes(extra) ? 0 : extra.price;
    const extrasTotal = selectedExtras.reduce((total, item) => total + item.price, 0);
    // setTotalAmount(quantity * route.params.price + extraPrice);
    extraPrice == 0 ? setTotalAmount(totalAmount - extra.price) : setTotalAmount(totalAmount + extraPrice)

  };

  // const handleCheck = (extra) => {
  //   if (selectedExtras.includes(extra)) {
  //     setSelectedExtras([...selectedExtras, extra]);

  //     setSelectedExtras(selectedExtras.filter((item) => item !== extra));
  //     alert("yes")
  //   } else {
  //     setSelectedExtras([...selectedExtras, extra]);
  //     setSelectedExtras(selectedExtras.filter((item) => item !== extra))
  //     alert("no")

  //   }

  //   const extrasTotal = selectedExtras.reduce((total, item) => total + item.price, 0);
  //   const amount = (route.params.price + extrasTotal) * quantity;
  //   setTotalAmount(amount);
  //   alert(amount)

  // };


  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
    setTotalAmount((quantity + 1) * route.params.price);
  };
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalAmount((quantity - 1) * route.params.price);
    }
  };

  //   const add = async () => {
  //     const docRef = await addDoc(collection(db, "request"), {
  //         detailRequest : detailRequest
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //     handleRegister()
  //     console.log("hii from detail request")
  // };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Image source={icon} style={styles.image} />

        {/* {
                        data.map((x, i) => {
                            return (
                                <View key={i} style={[styles.card, styles.shadowProp]}>
                                    <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, width: 150, alignSelf: 'left' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 8 }}> Package {x.id} </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: 220 }}>
                                            <Text style={{ margin: 3, paddingTop: 10 }}>{x.name} </Text>
                                            {x.cup ? <Text style={{ margin: 3 }}>{x.cup} Cup</Text> : null}

                                            <Pressable onPress={() => navigation.navigate({
                                                name: 'PackageDetails', params: {
                                                    details: x.details, name: x.name, imgDetails: x.imgDetails, cup: x.cup , id: x.id
                                                }
                                            })}>
                                                <Text style={{ color: '#D3B3B8', fontWeight: 'bold', margin: 3 }}>
                                                    Read more ...

                                                </Text>
                                            </Pressable>
                                        </View>
                                        <View style={{
                                            width: 90,
                                            height: 70,
                                            borderRadius: 60,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#D9D9D9',
                                            padding: 8,
                                            marginBottom: 20,
                                        }}>
                                            <Text style={{ fontWeight: 'bold' }}>{x.price} </Text>
                                            <Text style={{ fontWeight: 'bold' }}>QR</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })} */}


        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, width: 200 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 8 }}> Package {route.params.id} </Text>
            </View>
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 6, borderRadius: 70, backgroundColor: '#D3B3B8', width: 150, paddingLeft: 10 }}>Package {route.params.id}</Text> */}
            <View style={{ width: 170, flexDirection: 'row', justifyContent: 'space-between' }}>
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

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 220 }}>
              <Text style={{ margin: 3, paddingTop: 10 , fontSize: 18 }}>{route.params.name} </Text>
              {route.params.cup ? <Text style={{ margin: 6,  fontSize: 18  }}>{route.params.cup} Cup</Text> : null}
            </View>
            <View style={{
              width: 90,
              height: 70,
              borderRadius: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#D9D9D9',
              padding: 8,
              marginBottom: 20,
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{route.params.price} </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>QR</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10, width: 330, alignSelf: 'center', padding: 5 }}>
          <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>Catering Menu Include</Text>
          {detailsPackage.map((x, i) => {
            return (<Text style={{ paddingLeft: 10, margin: 3 , fontSize: 18 }}>{x}</Text>)
          })}
          {/* // <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>{route.params.details}</Text>
          // <Text style={{ paddingLeft: 10, margin: 3 }}>Cold Selection </Text>
          // <Text style={{ paddingLeft: 10, margin: 3 }}> Hot Selection </Text>
          // <Text style={{ paddingLeft: 10, margin: 3 }}>Hot Sahlab </Text>
          // <Text style={{ paddingLeft: 10, margin: 3 }}>Triple Q </Text> */}
        </View>

        <View style={{ width: 330, alignSelf: 'center', padding: 5 }}>

          {/* {extra ? <Text style={{ margin: 3 }}>{extra} blaa</Text> : null} */}
          {extra ?
            <View>
              <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>Extra Order</Text>
              {extra.map((x, i) => {
                return (

                  <View key={i} style={[styles.cardExtra]}>
                    <View style={{ width: 100 }}>
                      <Text style={{ fontSize: 18, marginTop: 15 }} >{x.extra}</Text>
                      <Text>{x.price} QR</Text>
                    </View>
                    <View style={{ width: 50 }} >
                      <CheckBox
                        checked={selectedExtras.includes(x)}
                        // checked={() => handleCheck(x)}

                        onPress={() => handleCheck(x)}
                        // onValueChange={() => handleCheck(x)}
                        style={{ color: 'pink' }}
                      />
                    </View>
                  </View>)
              })}
            </View>
            : null}
          {/* <View style={[styles.card, styles.shadowProp]}>
            <Text style={{ fontSize: 15, marginTop: 15 }}>Cold Selection</Text>
            <CheckBox
              checked={checked2}
              onPress={handleCheck2}
            />
          </View> */}

          {/* Cold Selection */}
          {/* <View style={[styles.card, styles.shadowProp]}>
            <Text style={{ fontSize: 15, marginTop: 15 }}>Cold Selection </Text>
            <CheckBox
              checked={checked3}
              onPress={handleCheck3}
            />
          </View> */}
        </View>

        <View style={{ marginBottom: 30, width: 330, alignSelf: 'center', padding: 5 }}>
          <Text style={{ fontWeight: 'bold', margin: 6, fontSize: 20 }}>Any Special Request??</Text>
          <TextInput style={styles.textInput} placeholder="Type here..."
            autoFocus
            multiline />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{fontSize: 18 }}> Total Amount </Text>
            <Text style={{fontSize: 18  }}>{totalAmount} QR</Text>
          </View>
          <View style={{ marginBottom: 30, marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable onPress={() => navigation.navigate("MyCart")}>
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
    width: 300,
    height: 300,
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
  cardExtra: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F7EBED',
    opacity: 0.95,
    paddingLeft: 10,
    width: 300,
    height: 50,
    margin: 6
  },
  // shadowPropExtra: {
  //   shadowColor: '#3e529b',
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 1,
  //   shadowRadius: 8,
  // },
  card: {
    backgroundColor: '#F7EBED',
    opacity: 0.95,
    borderRadius: 20,
    width: 370,
    margin: 10,
    marginLeft: 25,
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: 'lightgray',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },

})