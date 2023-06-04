import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
// import { useState, useEffect } from 'react'
import { db } from "./Config";
import { getDocs, collection } from "firebase/firestore";

const images = [
    { name: 'charger.png', path: require("../assets/Images/charger.png") },
    { name: 'cheatBurger.png', path: require("../assets/Images/cheatBurger.png") },
    { name: 'salt.png', path: require("../assets/Images/salt.png") },
    { name: 'rose.png', path: require("../assets/Images/rose.png") },
    { name: 'pows.png', path: require("../assets/Images/pows.png") },
    { name: 'origin.png', path: require("../assets/Images/origin.png") },
    { name: 'pows.png', path: require("../assets/Images/pows.png") },
    { name: 'honu.png', path: require("../assets/Images/honu.png") },
    { name: 'exit55.png', path: require("../assets/Images/exit55.png") },
]

export default function Packages({ navigation, route }) {
    // const [allData, setAllData] = useState([]);
    const [data, setData] = useState(route.params.package);
    console.log('Data');
    console.log(data);

    const [search, setSearch] = useState("");

    useEffect(() => {
        readAll();
    }, []);

    const readAll = async () => {
        const docs = await getDocs(collection(db, "products"));
        let temp = [];
        docs.forEach(async (doc) => {
            let product = doc.data();
            temp.push(product);
            setData(temp);
        });
        console.log(data);
    };

    const path = images.find((img) => img.name === route.params.image);
    const icon = path ? path.path : null;

    return (
        <SafeAreaView style={styles.container}>

            <Text style={[styles.packagename]}> {route.params.name} Packages</Text>
            <View style={[styles.packageview]}>
                <Image style={{ width: 180, height: 180, borderRadius: 20, marginLeft: 120 }} source={icon} />

                {/* <Image style={{ width: 180, height: 180, borderRadius: 20, marginLeft: 120 }} source={require(route.params.image)} /> */}
                {data.map((item, index) => {
                    return (
                        //     <View key={index} style={styles.squareContainer}>
                        // <Image source={icon} style={styles.image} />
                        //         <Text style={styles.imageName}>{item.name}</Text>
                        //         <Pressable onPress={() => navigation.navigate("Packages")} style={styles.button}>
                        //             <Text style={styles.buttonText}>View Packaging</Text>
                        //         </Pressable> 
                        //     </View>
                    //    { item.map(()) => {

                    
                        <View key={index} style={[styles.card, styles.shadowProp]}>
                            <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, alignSelf: 'left', width: 150 }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 8 }}>Package </Text>
                                {console.log(item[index])}

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 220 }}>
                                    <Text style={{ margin: 3, paddingTop: 10 }}>25 Person</Text>
                                    <Text style={{ margin: 3 }}>50 Cup</Text>
                                    <Pressable onPress={() => navigation.navigate("PackageDetails")}>
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
                                    <Text style={{ fontWeight: 'bold' }}>5000 </Text>
                                    <Text style={{ fontWeight: 'bold' }}>QR</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
                <ScrollView>
{/* 
                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, alignSelf: 'left', width: 150 }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 8 }}>Package 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 220 }}>
                                <Text style={{ margin: 3, paddingTop: 10 }}>25 Person</Text>
                                <Text style={{ margin: 3 }}>50 Cup</Text>
                                <Pressable onPress={() => navigation.navigate("PackageDetails")}>
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
                                <Text style={{ fontWeight: 'bold' }}>5000 </Text>
                                <Text style={{ fontWeight: 'bold' }}>QR</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, alignSelf: 'left', width: 150 }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 8 }}>Package 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 220 }}>
                                <Text style={{ margin: 3, paddingTop: 10 }}>50 Person</Text>
                                <Text style={{ margin: 3 }}>100 Cup</Text>
                                <Pressable onPress={() => navigation.navigate("PackageDetails")}>
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
                                <Text style={{ fontWeight: 'bold' }}>3500 </Text>
                                <Text style={{ fontWeight: 'bold' }}>QR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, alignSelf: 'left', width: 150 }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 8 }}>Package 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 220 }}>
                                <Text style={{ margin: 3, paddingTop: 10 }}>75 Person</Text>
                                <Text style={{ margin: 3 }}>150 Cup</Text>
                                <Pressable onPress={() => navigation.navigate("PackageDetails")}>
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
                                <Text style={{ fontWeight: 'bold' }}>4500 </Text>
                                <Text style={{ fontWeight: 'bold' }}>QR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={{ backgroundColor: '#D3B3B8', borderRadius: 20, alignSelf: 'left', width: 150 }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 8 }}>Package 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 220 }}>
                                <Text style={{ margin: 3, paddingTop: 10 }}>100 Person</Text>
                                <Text style={{ margin: 3 }}>200 Cup</Text>
                                <Pressable onPress={() => navigation.navigate("PackageDetails")}>
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
                                <Text style={{ fontWeight: 'bold' }}>6000 </Text>
                                <Text style={{ fontWeight: 'bold' }}>QR</Text>
                            </View>
                        </View>
                    </View> */}


                </ScrollView>
            </View>


        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    card: {
        backgroundColor: '#F7EBED',
        opacity: 0.95,
        borderRadius: 20,
        width: 380,
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
    image: {
        width: 180,
        height: 180,
        borderRadius: 20,
        marginLeft: 120
    },
    packagename: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    packageview: {
        backgroundColor: 'white',
        width: 500,
        height: 1500,
        alignContent: 'center',
        marginTop: 10
    }
})