//Farah Aboudia 60093383
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyCart = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' ,backgroundColor:'white'}}>
            {/* <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'left', marginBottom: 90 ,}}>My Cart</Text> */}
            <View style={[styles.txt, { marginBottom: 30, flexDirection: 'row', backgroundColor: '#f5f5f5' ,width:410,marginLeft:10,marginRight:20,height:200}]}>
                <View style={{ backgroundColor: 'darkgrey', height: 100, width: 100 }}><Text></Text></View>
                <View>
                               <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 6, borderRadius: 20,width: 150, paddingLeft: 10 }}>Package Title</Text>
                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}> Order Details </Text>
                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}> 3000 QR </Text>
        
                    <View style={{flexDirection:'row',marginLeft:160}}>
                        <TouchableOpacity style={styles.quantityButton} >
                        <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}></Text>
                           <TouchableOpacity  >
                        <Text>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quantityButton} >
                        <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 'bold',marginBottom:5 ,marginLeft:5}}>Summary Payment</Text>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between',marginLeft:15 }]}>
                <View style={[{ width: 320, margin: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Sub-Total</Text>
                    <Text style={{ color: 'black', fontSize: 20 }}>5000QR</Text>
                </View>
            </View>
            <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between',marginLeft:15 }]}>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>Discount</Text>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>0%</Text>
                </View>
            </View>
            <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#d3d3d3' }]}>
                <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', marginLeft:15}]}>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>Total Amount</Text>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>5000QR</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 150, height: 50, borderRadius: 8, padding: 8 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}>Add More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 150, height: 50, borderRadius: 8, padding: 8 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Checkout </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MyCart

const styles = StyleSheet.create({
    imgProfile: {
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'pink',
        marginBottom: 30
    },
    txt: {
        width: 350,
        padding: 10,
        borderRadius: 8,
        margin: 6,
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
})