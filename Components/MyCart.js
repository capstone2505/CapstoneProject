// Last update of my cart 06/10/2023

import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, Pressable, Dimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'

//DB work
import { auth, db } from './Config';
import { getDocs, collection, query, where, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const windowWidth = Dimensions.get("window").width;

const MyCart = ({ navigation, route }) => {


    let userId = auth?.currentUser?.email;
    console.log(userId);

    const packageList = route.params.packageList
    const [cartData, setCartData] = useState([]);

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

    useEffect(() => {
        saveData();
    }, [])

    const readCart = async () => {
        try {
            const docRef = doc(db, 'cart', userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setCartData([data]);
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error reading cart:', error);
        }
    };

    const [subAmount, setSubAmount] = useState(0);

    useEffect(() => {
        if (cartData.length > 0) {
            let amount = 0;
            cartData.forEach((item) => {
                item.cartItem.forEach((x) => {
                    amount += x.quantity * x.price;
                });
            });
            setSubAmount(amount);
            console.log('Sub-Amount:', amount);
        }
    }, [cartData])

    const [cartDataUpdated, setCartDataUpdated] = useState(false);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const docRef = doc(db, 'cart', userId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setCartData([data]);
                } else {
                    // If the cart doesn't exist, create an empty cart
                    const newCartData = { cartItem: [], amount: 0, status: '' };
                    await setDoc(docRef, newCartData);
                    setCartData([newCartData]);
                }
                readCart()
                setCartDataUpdated(true);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();

    }, [userId])


    useEffect(() => {
        if (cartDataUpdated) {
            // Code to handle the updated cart data
            // This will run whenever the cartData state is updated
            console.log('New cart data:', cartData);
        }
    }, [cartDataUpdated, cartData])

    const itemId = route.params.id;
    const itemDetils = route.params.details;
    const itemImgDetails = route.params.imgDetails;
    const itemExtraPack = route.params.extraPack;
    const itemPrice = route.params.price;
    const itemName = route.params.name;
    const itemCup = route.params.cup;
    const total = route.params.total;
    const itemQuantity = route.params.quantity;
    const compName = route.params.compName;
    const discountVal = route.params.discount

    const [cart, setCart] = useState()

    const saveData = async () => {
        try {
            const docRef = doc(db, "cart", userId);
            const cartSnap = await getDoc(docRef);

            if (cartSnap.exists()) {
                const existingItems = cartSnap.data().cartItem || [];
                let updatedItems = [...existingItems];

                // Check if the item already exists in the cart
                const existingItemIndex = existingItems.findIndex(
                    (item) => item.packageId === itemId
                );
                if (existingItemIndex !== -1) {
                    // Item already exists, update its quantity
                    updatedItems[existingItemIndex].quantity = itemQuantity;
                } else {
                    // Item doesn't exist, add it to the cart
                    updatedItems.push({
                        packageId: itemId,
                        details: itemDetils,
                        imgDetails: itemImgDetails,
                        price: itemPrice,
                        extraPack: itemExtraPack,
                        name: itemName,
                        cup: itemCup,
                        total: subAmount,
                        quantity: quantity,
                        compName: compName
                    });
                }
                await updateDoc(docRef, { cartItem: updatedItems });
                setCart(updatedItems);
                updateCartTotal();
            } else {
                const newItem = {
                    packageId: itemId,
                    details: itemDetils || "",
                    imgDetails: itemImgDetails || "",
                    price: itemPrice || 0,
                    extraPack: itemExtraPack || "",
                    name: itemName || "",
                    cup: itemCup || "",
                    total: subAmount || 0,
                    quantity: quantity || 0,
                    compName: compName || ""
                };
                await setDoc(docRef, {
                    cartItem: [newItem],
                    total: total,
                    status: 'unpaid'
                });
                setCart([
                    {
                        packageId: itemId,
                        details: itemDetils,
                        imgDetails: itemImgDetails,
                        price: itemPrice,
                        extraPack: itemExtraPack,
                        name: itemName,
                        cup: itemCup,
                        total: subAmount,
                        quantity: quantity,
                        compName: compName
                    }
                ]);
                updateCartTotal();
            }
            console.log('Data submitted');
        } catch (error) {
            console.log(error.message);
        }
    };

    console.log("cart");
    console.log(cart);

    const deleteRes = async (rId, itemId) => {
        try {
            const cartRef = doc(db, 'cart', rId);
            const cartSnap = await getDoc(cartRef);

            if (cartSnap.exists()) {
                const cartData = cartSnap.data();
                const updatedItems = cartData.cartItem.filter((item, index) => index !== itemId);
                const updatedCartData = { ...cartData, cartItem: updatedItems };

                await setDoc(cartRef, updatedCartData);

                // Update the cartData state with the updated cart items
                setCartData([updatedCartData]);

                // Calculate the updated subtotal
                // let amount = 0;
                // updatedItems.forEach((x) => {
                //     amount += x.quantity * x.price;
                // });
                // setSubAmount(amount);
                updateCartTotal();

                // Delete the item document from the cartItem subcollection
                const itemDocRef = doc(collection(db, 'cart', rId, 'cartItem'), itemId);
                await deleteDoc(itemDocRef);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    // quantity
    const [quantity, setQuantity] = useState(route.params.quantity);

    const handleQuantityIncrease = async (userId, cartItemId) => {
        console.log("jhnjkhljkhjkhjkhkhjk");
        setQuantity(quantity + 1);
        updateQuantityInDB(userId, cartItemId, quantity + 1);
    };

    const handleQuantityDecrease = async (userId, cartItemId) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateQuantityInDB(userId, cartItemId, quantity - 1);
        }
    };

    const updateQuantityInDB = async (userId, cartItemId, newQuantity) => {
        try {
            const cartRef = doc(db, "cart", userId);
            const cartSnap = await getDoc(cartRef);

            if (cartSnap.exists()) {
                const cartData = cartSnap.data();
                const updatedItems = cartData.cartItem.map((item, index) => {
                    if (index === cartItemId) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                const updatedCartData = { ...cartData, cartItem: updatedItems };

                await setDoc(cartRef, updatedCartData);

                // Update the cartData state with the updated cart items
                setCartData([updatedCartData]);

                // Calculate the updated subtotal
                let amount = 0;
                updatedItems.forEach((x) => {
                    amount += x.quantity * x.price;
                });
                setSubAmount(amount);
                updateCartTotal();
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const updateAmountInDB = async (userId, newAmount) => {
        try {
            const cartRef = doc(db, "cart", userId);
            const cartSnap = await getDoc(cartRef);

            if (cartSnap.exists()) {
                const cartData = cartSnap.data();
                const updatedCartData = { ...cartData, amount: newAmount }; // Update the amount field in the cartData
                await setDoc(cartRef, updatedCartData);
                // Update the cartData state with the updated cart amount
                setCartData([updatedCartData]);
                setSubAmount(newAmount);
                readCart(); // Refresh the cart data after updating the amount
            }
        } catch (error) {
            console.error('Error updating amount:', error);
        }
    };

    const updateCartTotal = () => {
        // Calculate the total amount for all cart items
        let totalAmount = 0;
        cartData[0].cartItem.forEach((item) => {
            totalAmount += item.quantity * item.price;
        });
        updateAmountInDB(userId, totalAmount); // Call updateAmountInDB to update the cart amount
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {
                    cartData.map((item, i) =>
                        <View key={i} style={{ margin: 10 }}>
                            {
                                item.cartItem.map((x, index) => {
                                    const path = images.find((img) => img.name === x.imgDetails);
                                    const icon = path ? path.path : null;
                                    console.log(icon);
                                    // <View style={[styles.txt, { marginBottom: 5, flexDirection: 'row', backgroundColor: '#f5f5f5', width: 390, marginLeft: 10, marginRight: 20 }]}>
                                    // <Image style={{ width: 100, height: 100, borderRadius: 20, }} source={require('../assets/Images2/charger.webp')} />
                                    // <View>                                             backgroundColor: '#D9D9D9',

                                    return (
                                        <View key={index} style={[styles.productItem, { backgroundColor: '#D9D9D9', width: 370 }]}>
                                            <View style={{}}>
                                                <Image style={{ width: 100, height: 100, borderRadius: 20, borderWidth: 1 }} source={icon} />
                                            </View>
                                            <View style={{ width: 230 }}>
                                                <View style={{ flexDirection: 'row', marginLeft: 5, height: 30 }}>
                                                    <Text style={styles.quantityTitle}>Package {x.packageId}</Text>
                                                    <View style={styles.quantityContainer}>
                                                        <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityDecrease(userId, i)}>
                                                            <Text style={styles.quantityButtonText}>-</Text>
                                                        </TouchableOpacity>
                                                        <Text style={styles.quantity}>{x.quantity}</Text>
                                                        <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityIncrease(userId, i)}>
                                                            <Text style={styles.quantityButtonText}>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <Text style={{ color: 'black', fontSize: 15, paddingLeft: 10, }}> {x.price} QR </Text>
                                            </View>
                                            <View style={{ width: 25, margin: 3 }}>
                                                <TouchableOpacity onPress={() => deleteRes(userId, i)} style={{ backgroundColor: 'red' }}>
                                                    <Text style={{ color: 'black', fontSize: 20, height: 30 }}>  X </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>

                    )
                }

                <View style={{ margin: 15, width: 400 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 5 }}>Summary Payment</Text>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
                        <View style={[{ width: 320, margin: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <Text style={{ fontSize: 15 }}>Sub-Total</Text>
                            <Text style={{ fontSize: 15 }}>{subAmount}QR</Text>
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
                            <Text style={{ margin: 5, fontSize: 15 }}>{subAmount}QR</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 150, height: 50, borderRadius: 8, padding: 8 }}>
                        <Pressable onPress={() => navigation.navigate({
                            name: 'Packages', params: {
                                packageList: packageList
                            }
                        })}>                            
                        <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Add More </Text>
                        </Pressable>
                    </View>

                    <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 150, height: 50, borderRadius: 8, padding: 8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Pressable onPress={() => navigation.navigate({
                                name: 'Checkout', params: {
                                    total: subAmount,
                                }
                            })}>
                                <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Checkout </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
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
    quantityTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
        padding: 2,
        borderRadius: 20,
        width: 150,
        paddingLeft: 10,
        marginTop: 3
    },
    productItem: {
        flexDirection: "row",
        // width: 300,
        borderRadius: 10,
        // marginBottom: 5,
        backgroundColor: "green",
        elevation: 4,
        padding: 8,
        // flex:'wrap'
    },
})

