// Last update of my cart 06/10/2023

import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, Pressable, } from 'react-native'
import React, { useEffect, useState } from 'react'

//DB work
import { auth, db } from './Config';
import { getDocs, collection, query, where, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import Ionicons from 'react-native-vector-icons/Ionicons'
const MyCart = ({ navigation, route }) => {

    let userId = auth?.currentUser?.email;
    console.log(userId);


    const [cartData, setCartData] = useState([]);

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

    useEffect(() => {
        saveData();
        // discountamount();
    }, []);

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

    const [subAmount, setSubAmount] = useState();

    useEffect(() => {
        if (cartData.length > 0) {
            let amount = 0;
            cartData.forEach((item) => {
                item.cartItem.forEach((x) => {
                    amount += x.quantity * x.price;
                });
            });
            setSubAmount(amount);
            console.log("Sub-Amount:", amount);
        }
    }, [cartData]);

    const [cartDataUpdated, setCartDataUpdated] = useState(false);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const docRef = doc(db, "cart", userId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setCartData([data]);
                } else {
                    // If the cart doesn't exist, create an empty cart
                    const newCartData = { cartItem: [], amount: 0, status: "" };
                    await setDoc(docRef, newCartData);
                    setCartData([newCartData]);
                }
                readCart();
                setCartDataUpdated(true);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };
        fetchCartData();
    }, [userId]);

    useEffect(() => {
        if (cartDataUpdated) {
            // Code to handle the updated cart data
            // This will run whenever the cartData state is updated
            console.log("New cart data:", cartData);
        }
    }, [cartDataUpdated, cartData]);


    const [cart, setCart] = useState();

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
                    updatedItems[existingItemIndex].quantity = route.params.quantity;
                } else {
                    // Item doesn't exist, add it to the cart
                    updatedItems.push({
                        packageId: route.params.id,
                        details: route.params.details,
                        imgDetails: route.params.imgDetails,
                        price: route.params.price,
                        extraPack: route.params.extraPack,
                        name: route.params.name,
                        cup: route.params.cup,
                        total: route.params.total,
                        quantity: route.params.quantity,
                        compName: route.params.compName,
                        request: route.params.request
                    });
                    updatedItems = [
                        ...updatedItems,
                        {
                            packageId: route.params.id,
                            details: route.params.details,
                            imgDetails: route.params.imgDetails,
                            price: route.params.price,
                            extraPack: route.params.extraPack,
                            name: route.params.name,
                            cup: route.params.cup,
                            total: route.params.total,
                            quantity: route.params.quantity,
                            compName: route.params.compName,
                            request: route.params.request
                        },
                    ];
                }
                await updateDoc(docRef, { cartItem: updatedItems });
                setCart(updatedItems);
                updateCartTotal();
            } else {
                const newItem = {
                    packageId: route.params.id,
                    details: route.params.details || "",
                    imgDetails: route.params.imgDetails || "",
                    price: route.params.price || 0,
                    extraPack: route.params.extraPack || "",
                    name: route.params.name || "",
                    cup: route.params.cup || "",
                    total: subAmount || 0,
                    quantity: route.params.quantity || 0,
                    compName: route.params.compName || "",
                    request: route.params.request || ""
                };
                await setDoc(docRef, {
                    cartItem: [newItem],
                    total: route.params.total,
                    status: "unpaid",
                });
                setCart([
                    {
                        packageId: route.params.id,
                        details: route.params.itemDetils,
                        imgDetails: route.params.itemImgDetails,
                        price: route.params.itemPrice,
                        extraPack: route.params.itemExtraPack,
                        name: route.params.itemName,
                        cup: route.params.itemCup,
                        total: subAmount,
                        quantity: route.params.quantity,
                        compName: route.params.compName,
                        request: route.params.request
                    },
                ]);
                updateCartTotal();
            }
            console.log("Data submitted");
        } catch (error) {
            console.log(error.message);
        }
    };

    console.log("cart");
    console.log(cart);

    const deleteRes = async (rId, itemId) => {
        try {
            const cartRef = doc(db, "cart", rId);
            const cartSnap = await getDoc(cartRef);

            if (cartSnap.exists()) {
                const cartData = cartSnap.data();
                const updatedItems = cartData.cartItem.filter(
                    (item, index) => index !== itemId
                );
                const updatedCartData = { ...cartData, cartItem: updatedItems };

                await setDoc(cartRef, updatedCartData);

                // Update the cartData state with the updated cart items
                setCartData([updatedCartData]);
                updateCartTotal();

                // Delete the item document from the cartItem subcollection
                const itemDocRef = doc(collection(db, "cart", rId, "cartItem"), itemId);
                await deleteDoc(itemDocRef);
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    // quantity
    const [quantity, setQuantity] = useState();

    const handleQuantityIncrease = async (userId, cartItemId) => {
        console.log("jhnjkhljkhjkhjkhkhjk");
        setQuantity(route.params.quantity + 1);
        updateQuantityInDB(userId, cartItemId, route.params.quantity + 1);
    };

    const handleQuantityDecrease = async (userId, cartItemId) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateQuantityInDB(userId, cartItemId, route.params.quantity - 1);
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
            console.error("Error updating quantity:", error);
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
            console.error("Error updating amount:", error);
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

    const [discountTotal, setDiscountTotal] = useState();
    const [discountValue, setDiscountValue] = useState();

    const discountamount = () => {
        let itemName = route.params.compName;
        let itemTotal = route.params.total;
        if (itemName == "Charger" && itemTotal >= 3000) {
            console.log("yesss charger");
            const discount = itemTotal * 0.2;
            const discountedTotal = itemTotal - discount;
            setDiscountTotal(discountedTotal);
            setDiscountValue("20");
            // console.log(discountedTotal);
        } else if (itemName == "Paws" && itemTotal >= 2300) {
            const discount = itemTotal * 0.15;
            const discountedTotal = itemTotal - discount;
            setDiscountTotal(discountedTotal);
            // console.log(discountedTotal);
            setDiscountValue("15");
            console.log("noooo1 paws");
        } else if (itemName == "Exit 55" && itemTotal >= 2000) {
            const discount = itemTotal * 0.1;
            const discountedTotal = itemTotal - discount;
            setDiscountTotal(discountedTotal);
            // console.log(discountedTotal);
            setDiscountValue("10");
            // console.log("noooo2 exit55");
        } else if (itemName == "SALT" && itemTotal >= 2500) {
            const discount = itemTotal * 0.05;
            const discountedTotal = itemTotal - discount;
            setDiscountTotal(discountedTotal);
            console.log(discountedTotal);
            setDiscountValue("5");
            console.log("noooo3 salt");
        } else {
            setDiscountValue("0");
            setDiscountTotal(subAmount)
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', marginTop: 10 }}>
            <ScrollView>
                {
                    cartData.map((item, i) =>
                        <View key={i} style={[styles.txt, { marginBottom: 5, backgroundColor: '#f5f5f5', width: 410, marginLeft: 10, marginRight: 20, borderWidt: 1 }]}>
                            {
                                item.cartItem.map((x, index) => {
                                    const path = images.find((img) => img.name === x.imgDetails);
                                    const icon = path ? path.path : null;
                                    return (
                                        <View key={index} style={{ backgroundColor: 'lightgrey', flexDirection: 'row' }}>

                                            <View style={{ width: 205 }}>
                                                <Text style={styles.quantityTitle}>Package {x.packageId}</Text>

                                                <Image style={{ width: 100, height: 100, borderRadius: 20, borderWidth: 1, margin: 10 }} source={icon} />
                                                <View style={[styles.quantityContainer, { margin: 3, alignItems: 'center', }]}>
                                                    <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityDecrease(userId, i)}>
                                                        <View>
                                                            <Text style={styles.quantityButtonText}>-</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.quantity}>{x.quantity}</Text>
                                                    <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityIncrease(userId, i)}>
                                                        <Text style={styles.quantityButtonText}>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ width: 160 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}>Price: </Text>
                                                    <Text style={{ color: 'black', margin: 10, fontSize: 15 }}> {x.price} QR </Text>
                                                </View>
                                                <View style={{ marginTop: 10, width: 370, alignSelf: 'center', padding: 5 }}>
                                                <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}>Details: </Text>
                                                    {x.details.map((x, i) => {
                                                        return (<Text key={i} style={{ paddingLeft: 10, margin: 3, fontSize: 12 }}>{x}</Text>)
                                                    })}
                                                </View>
                                                <View style={{ marginTop: 10, width: 370, alignSelf: 'center', padding: 5 }}>
                                                <Text style={{ fontWeight: 'bold', color: 'black', margin: 10, fontSize: 15 }}>Request: </Text>
                                                <Text style={{ color: 'black', margin: 10, fontSize: 15 }}>  {x.request}  </Text>

                                               
                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() => deleteRes(userId, i)} style={{ backgroundColor: 'green', width: 30 }}>
                                                <Text style={{ color: 'black', margin: 5, fontSize: 30 }} >
                                                    <Ionicons name='trash' color={'black'} size={20} />
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                }


                <View style={{ margin: 15, width: 400 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5, marginLeft: 5 }}>
                        Summary Payment
                    </Text>
                    <View style={[{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15 }]} >
                        <View
                            style={[
                                {
                                    width: 320,
                                    margin: 3,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                },
                            ]}
                        >
                            <Text style={{ fontSize: 15 }}>Sub-Total</Text>
                            <Text style={{ fontSize: 15 }}>{subAmount}QR</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            {
                                marginBottom: 3,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            },
                        ]}
                    >
                        <View
                            style={[
                                {
                                    width: 320,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginLeft: 15,
                                },
                            ]}
                        >
                            <Text style={{ margin: 5, fontSize: 15 }}>Discount</Text>
                            {/* <Text style={{ margin: 5, fontSize: 15 }}>{discountValue}%</Text> */}
                            {discountValue ? (
                                <Text style={{ margin: 3 }}>{discountValue} %</Text>
                            ) : (
                                <Text style={{ margin: 3 }}>0 %</Text>
                            )}
                        </View>
                    </View>
                    <View
                        style={[
                            {
                                marginBottom: 3,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderTopWidth: 1,
                                borderColor: "#d3d3d3",
                                width: 350,
                                marginLeft: 10,
                            },
                        ]}
                    >
                        <View
                            style={[
                                {
                                    width: 320,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginLeft: 15,
                                },
                            ]}
                        >
                            <Text style={{ margin: 5, fontSize: 15 }}>Total Amount</Text>
                            {discountValue ? (
                                <Text style={{ margin: 3 }}>{subAmount} QR</Text>
                            ) : (
                                <Text style={{ margin: 3 }}>{discountTotal} QR</Text>
                            )}
                            {/* <Text style={{ margin: 5, fontSize: 15 }}>{discountTotal}QR</Text> */}
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 150, height: 50, borderRadius: 8, padding: 8 }}>
                    <Pressable onPress={() => navigation.navigate("Packages")}>
                            <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Add More </Text>
                        </Pressable>
                    </View>

                    <View style={{ marginTop: 30, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 150, height: 50, borderRadius: 8, padding: 8 }}>
                        <Pressable
                            onPress={() =>
                                navigation.navigate({
                                    name: "Checkout",
                                    params: {
                                        subAmount: subAmount,
                                        discountTotal: discountTotal,
                                        discountValue: discountValue,
                                    },
                                })
                            }
                        >
                            <Text style={{ color: "white", marginTop: 5, fontSize: 20 }}>
                                {" "}
                                Checkout{" "}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyCart;

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
        backgroundColor: "pink",
        marginBottom: 30,
    },
    txt: {
        width: 350,
        padding: 10,
        borderRadius: 8,
        margin: 6,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
        width: 90,
        height: 30,
        backgroundColor: "white",
        marginLeft: 10
    },
    quantityButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#888",
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'rosybrown'
    },
    quantity: {
        fontSize: 15,
        fontWeight: "bold",
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