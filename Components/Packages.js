import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView , Pressable} from 'react-native'



export default function Packages({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

                <Text style={{marginTop: 30,  fontSize: 30, fontWeight: 'bold' , textAlign:'center', alignItems: 'center'}}> Charger Packages</Text>
                <View style={{ backgroundColor: 'white', width: 500, height: 1500, alignContent: 'center', marginTop: 10 }}>
                    <Image style={{ width: 180, height: 180, borderRadius: 20, marginLeft: 120 }} source={require('../assets/Images2/charger.webp')} />
                    <ScrollView>

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
                    </View>


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
})