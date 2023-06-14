// Conifrm order Done 
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, ScrollView } from 'react-native'
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
        readCart();
    }, [userId]);
    const images = [
        {
            name: "chargermode.png",
            path: require("../assets/Images/chargermode.png"),
        },
        { name: "pawsbooth.png", path: require("../assets/Images/pawsbooth.png") },
        { name: "hounbooth.png", path: require("../assets/Images/hounbooth.png") },
        {
            name: "exit55table.png",
            path: require("../assets/Images/exit55table.png"),
        },
        { name: "saltbooth.png", path: require("../assets/Images/saltbooth.png") },
        { name: "origin.png", path: require("../assets/Images/origin.png") },
        {
            name: "cheatBurgerStory.png",
            path: require("../assets/Images/cheatBurgerStory.png"),
        },
        {
            name: "rosemarybooth.png",
            path: require("../assets/Images/rosemarybooth.png"),
        },
        {
            name: "exit55table.png",
            path: require("../assets/Images/exit55table.png"),
        },
    ];

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

    const [cartData, setCartData] = useState([])
    const readCart = async () => {
        try {
            const docRef = doc(db, "cart", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setCartData([data]);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error reading cart:", error);
        }
    };

    console.log('Conform Data', cartData);
    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <ScrollView>
                {/* <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Confirm Order</Text> */}
                <Image style={{ width: 490, height: 200, alignItems: 'center' }} source={require("../assets/Images/confirmOrder.png")} />
                {
                    <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Address</Text>
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

                        {
                            cartData.map((item, i) =>
                                <View key={i} style={[styles.txt, { marginBottom: 5, backgroundColor: '#f5f5f5', width: 380, marginLeft: 10, marginRight: 20, borderWidt: 1 }]}>
                                    {
                                        item.cartItem.map((x, index) => {
                                            const path = images.find((img) => img.name === x.imgDetails);
                                            const icon = path ? path.path : null;
                                            return (
                                                <View key={index} style={{ flexDirection: 'row' , borderBottomWidth: 3}}>
                                                    <View style={{ width: 205 }}>
                                                        <Text style={styles.quantityTitle}>Package {x.packageId}</Text>
                                                    </View>
                                                    <View style={{ width: 160 }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}>Price: </Text>
                                                            <Text style={{ color: 'black', margin: 10, fontSize: 15 }}> {x.price} QR </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}> Quantity: </Text>
                                                            <Text style={{ color: 'black', margin: 10, fontSize: 15 }}> {x.quantity} QR </Text>
                                                        </View>
                                                        <View style={{ width: 370, alignSelf: 'center', padding: 5, marginRight: 250 }}>
                                                            <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}>Details: </Text>
                                                            {x.details.map((x, i) => {
                                                                return (<Text key={i} style={{ paddingLeft: 10, margin: 3, fontSize: 12 }}>{x}</Text>)
                                                            })}
                                                        </View>
                                                        {x.request ? <View style={{ marginTop: 10, width: 370, alignSelf: 'center', padding: 5, marginLeft: 202 }}>
                                                            <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}>Request: </Text>
                                                            <Text style={{ color: 'black', margin: 10, fontSize: 15 }}>  {x.request}  </Text>
                                                        </View> : null}
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        }

                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Summary Payment</Text>
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
                    </View>
                }
                <View style={{ margin: 15 }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Payment Method</Text>
                    <View>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}> Select your payment type below </Text>
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
                </View>

                <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 350, height: 50, borderRadius: 8, padding: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={() => {
                            const screenName = checked === 'first' ? 'OrderedPlaced' : 'PaymentDetails';
                            const params = checked === 'first' ? {} : {
                                discountValue: discountValue,
                                discountTotal: discountTotal,
                                subAmount: subAmount
                            };
                            navigation.navigate(screenName, params);
                        }}>
                            <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}>
                                {checked === 'first' ? 'Place Order' : 'Go to Payment'}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
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
    quantityTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 5,
        padding: 2,
        borderRadius: 20,
        width: 150,
        paddingLeft: 10,
        marginTop: 3
    }
})