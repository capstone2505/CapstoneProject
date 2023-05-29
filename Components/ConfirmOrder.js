//Farah Aboudia 60093383
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper';
//npm install react-native-paper
//https://callstack.github.io/react-native-paper/3.0/radio-button.html

const ConfirmOrder = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Conform Order</Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address</Text>
            <View style={[styles.txt, { marginBottom: 10 }]}>
                <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> City </Text>
                <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> City </Text>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Date & Time</Text>
            <View style={[styles.txt, { marginBottom: 10 }]}>
                <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> DD/MM/YYYY </Text>
                <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Time(h) </Text>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Order Details</Text>
            <View style={[styles.txt, { marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f5f5f5' }]}>
                <View>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Details </Text>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> 3000 QR </Text>
                </View>
                <View style={{ backgroundColor: 'red', height: 60, width: 60 }}><Text>000000</Text></View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Summary Payment</Text>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={[{ width: 320, margin: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Sub-Total</Text>
                    <Text style={{ color: 'black', fontSize: 20 }}>5000QR</Text>
                </View>
            </View>
            <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>Discount</Text>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>0%</Text>
                </View>
            </View>
            <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#d3d3d3' }]}>
                <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', }]}>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>Total Amount</Text>
                    <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>5000QR</Text>
                </View>
            </View>

            <Text style={{ marginTop: 20 ,fontSize: 20, fontWeight: 'bold' }}>Payment Method</Text>
            <View>
                <View style={[{ width: 320, flexDirection: 'row', }]}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{ marginTop: 9, fontSize: 20 }}>Cash </Text>
                </View>
                <View style={[{ width: 320, flexDirection: 'row', }]}>

                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{ marginTop: 9, fontSize: 20 }}>Credit </Text>
                </View>
            </View>

            <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 350, height: 50, borderRadius: 8, padding: 8 }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white' , marginTop: 5, fontSize: 20}}> Go to Payment </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ConfirmOrder

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
        // backgroundColor: '#F7EBED',
    },
})