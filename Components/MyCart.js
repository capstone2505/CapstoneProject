//Farah Aboudia 60093383
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyCart = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor : 'white'}}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 20 }}>My Cart</Text>
                <View style={[styles.txt, { marginBottom: 5, flexDirection: 'row', backgroundColor: '#f5f5f5', width: 390, marginLeft: 10, marginRight: 20 }]}>
                    <Image style={{ width: 100, height: 100, borderRadius: 20, }} source={require('../assets/Images/charger.png')} />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 2, borderRadius: 20, width: 150, paddingLeft: 10, marginTop: 3 }}>Package 1</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>1</Text>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                        </View>
                        <Text style={{ color: 'black', margin: 10, fontSize: 15 }}> 3000 QR </Text>
                    </View>
                </View>

                <View style={[styles.txt, { marginBottom: 5, flexDirection: 'row', backgroundColor: '#f5f5f5', width: 390, marginLeft: 10, marginRight: 20 }]}>
                    <Image style={{ width: 100, height: 100, borderRadius: 20, }} source={require('../assets/Images2/charger.webp')} />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 2, borderRadius: 20, width: 150, paddingLeft: 10, marginTop: 3 }}>Package 1</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>1</Text>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                        </View>
                        <Text style={{ color: 'black', margin: 10, fontSize: 15 }}> 3000 QR </Text>
                    </View>
                </View>

                <View style={[styles.txt, { marginBottom: 5, flexDirection: 'row', backgroundColor: '#f5f5f5', width: 390, marginLeft: 10, marginRight: 20 }]}>
                    <Image style={{ width: 100, height: 100, borderRadius: 20, }} source={require('../assets/Images2/charger.webp')} />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', marginBottom: 5, padding: 2, borderRadius: 20, width: 150, paddingLeft: 10, marginTop: 3 }}>Package 1</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>1</Text>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 12 }}> Order Details </Text>
                        </View>
                        <Text style={{ color: 'black', margin: 10, fontSize: 15 }}> 3000 QR </Text>
                    </View>
                </View>

                <View style={{ margin: 15, width: 400 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 5 }}>Summary Payment</Text>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
                        <View style={[{ width: 320, margin: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <Text style={{ fontSize: 15 }}>Sub-Total</Text>
                            <Text style={{ fontSize: 15 }}>5000QR</Text>
                        </View>
                    </View>
                    <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
                            <Text style={{ margin: 5, fontSize: 15 }}>Discount</Text>
                            <Text style={{ margin: 5, fontSize: 15 }}>0%</Text>
                        </View>
                    </View>
                    <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#d3d3d3', width: 350, marginLeft: 10 }]}>
                        <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
                            <Text style={{ margin: 5, fontSize: 15 }}>Total Amount</Text>
                            <Text style={{ margin: 5, fontSize: 15 }}>5000QR</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 170, height: 50, borderRadius: 8, padding: 8, margin: 15 }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', marginTop: 5, fontSize: 18 }}>Add More</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 170, height: 50, borderRadius: 8, padding: 8, margin: 15 }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', marginTop: 5, fontSize: 18 }}> Checkout </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

export default MyCart

const styles = StyleSheet.create({
    txt: {
        width: 350,
        padding: 10,
        borderRadius: 8,
        margin: 6,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        width: 90,
        backgroundColor: 'white',
    },
    quantityButton: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#888',
    },
    quantity: {
        fontSize: 15,
        fontWeight: 'bold',
    },
})