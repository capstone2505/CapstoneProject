import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SelectCountry } from 'react-native-element-dropdown';

import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function App() {

    const local_data = [
        {
            value: '1',
            lable: 'Select City',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
        {
            value: '2',
            lable: 'Country 2',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
        {
            value: '3',
            lable: 'Country 3',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
    ];

    const [country, setCountry] = useState('1');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'red', fontSize: 20 }}>Add Address</Text>
            <TextInput
                placeholder='Street number'
                // value={password}
                // onChangeText={text => setPassword(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Building number'
                // value={password}
                // onChangeText={text => setPassword(text)}
                style={styles.input}
            />
            <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={country}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Select country"
                onChange={e => {
                    setCountry(e.value);
                }}
            />

            <Text style={{ color: 'red', fontSize: 20 }}>Contact Info</Text>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.inputI}
                    placeholder="Example@gmail.com"
                />
                <Entypo style={styles.searchIcon} name="mail" size={20} color="#000" />
            </View>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.inputI}
                    placeholder="Example@gmail.com"
                />
                <FontAwesome style={styles.searchIcon} name="phone" size={20} color="#000" />
            </View>

            <Text style={{ color: 'red', fontSize: 20 }}>Select Event Date and Time</Text>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 18,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 5,
        width: "95%",
        borderColor: 'gray',
        borderWidth: 1,
    },
    dropdown: {
        margin: 16,
        height: 50,
        width: 150,
        backgroundColor: '#EEEEEE',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 5
    },
    searchIcon: {
        padding: 10,
    },
    inputI: {
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});
