
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { auth, db } from './Config';
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";
//npm install react-native-paper
//https://callstack.github.io/react-native-paper/3.0/radio-button.html

const ConfirmOrder = ({ navigation, route }) => {
    const [checked, setChecked] = React.useState('first');
    const [dataC, setDataC] = useState([])

    const discountValue = route.params.discountValue
    const discountTotal = route.params.discountTotal
    const subAmount = route.params.subAmount

    useEffect(() => {
        checkCardData();
    }, [userId]);

    let userId = auth?.currentUser?.email;
    console.log(userId);

    const checkCardData = async () => {
        console.log("fetching from checkout");
        const docRef = doc(db, 'checkout', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setDataC(data)
        }
        else {
            console.log("Error");
        }
    }
    console.log("fgsdfgfsdgsfgdgf");
    console.log(dataC)

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Confirm Order</Text>
            {
                <>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address</Text>
                    <View style={[styles.txt, { marginBottom: 10 }]}>
                        <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> City: {dataC.city} </Text>
                        <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Building Number: {dataC.buildingNumber} </Text>
                        <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Street Name: {dataC.streetName} </Text>
                        <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> street Number: {dataC.streetNumber} </Text>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Date & Time</Text>
                    <View style={[styles.txt, { marginBottom: 10 }]}>
                        <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Date:  {dataC.datestring} </Text>
                        <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Time:  {dataC.timestring} </Text>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Order Details</Text>
                    <View style={[styles.txt, { marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f5f5f5' }]}>
                        <View>
                            <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> Details </Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 20 }}> 3000 QR </Text>
                        </View>
                        <View style={{ height: 60, width: 60 }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 20 }} source={require('../assets/Images/charger.png')} />
                        </View>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Summary Payment</Text>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={[{ width: 320, margin: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <Text style={{ color: 'black', fontSize: 20 }}>Sub-Total</Text>
                            <Text style={{ color: 'black', fontSize: 20 }}>{subAmount}QR</Text>
                        </View>
                    </View>
                    <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>Discount</Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>{discountValue}%</Text>
                        </View>
                    </View>
                    <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#d3d3d3' }]}>
                        <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', }]}>
                            <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>Total Amount</Text>
                            <Text style={{ color: 'black', margin: 2, fontSize: 20 }}>{discountTotal}QR</Text>
                        </View>
                    </View>
                </>
            }

            <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>Payment Method</Text>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Pressable onPress={() => navigation.navigate(checked === 'first' ? 'OrderedPlaced' : 'PaymentDetails')}> */}
                    <Pressable onPress={() => {
                        const screenName = checked === 'first' ? 'OrderedPlaced' : 'PaymentDetails';
                        const params = checked === 'first' ? {} : {  discountValue: discountValue,
                            discountTotal: discountTotal,
                            subAmount: subAmount };
                        navigation.navigate(screenName, params);
                    }}>
                        <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}>
                            {checked === 'first' ? 'Place Order' : 'Go to Payment'}
                        </Text>
                    </Pressable>
                </View>
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