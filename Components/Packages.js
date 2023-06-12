import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
// import { useState, useEffect } from 'react'
import { db } from "./Config";
import { getDocs, collection } from "firebase/firestore";


export default function Packages({ navigation, route }) {

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

    const [data, setData] = useState(route.params.packageList);
    console.log(data);

    const path = images.find((img) => img.name === route.params.image);
    const icon = path ? path.path : null;


    const [img, setImg] = useState(route.params.imgDetails) 
    const [extra, setExtra] = useState(route.params.extraPack) 
    const [compName , setCompName] = useState(route.params.name)
    console.log(compName ,'package');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={[styles.packagename]}> {route.params.name} Packages</Text>
                <View style={[styles.packageview]}>
                    <Image style={{ width: 180, height: 180, borderRadius: 20, marginLeft: 120 }} source={icon} />
                    {
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
                                                    details: x.details, 
                                                    name: x.name, 
                                                    imgDetails: img , 
                                                    cup: x.cup , 
                                                    price: x.price,
                                                    id: x.id,
                                                    extraPack: extra,
                                                    compName: compName
                                                    
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
                        })}
                </View>
            </ScrollView>

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
        alignContent: 'center',
        marginTop: 10,
        
    }
})