// Product Done 
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { Searchbar } from "react-native-paper";

import { db } from "./Config";
import { getDocs, collection } from "firebase/firestore";

// npm install react-native-paper

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

export default function Products({ navigation }) {

  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [id, setId] = useState()

  useEffect(() => {
    readAll();
  }, []);

  const readAll = async () => {
    const docs = await getDocs(collection(db, "products"));
    let temp = [];
    docs.forEach(async (doc) => {
      let product = doc.data();
      setId(doc.id)
      temp.push(product);
      setData(temp);
    });
    console.log(data);
    setAllData(temp);
  };

  const handleSearch = (value) => {
    setSearch(value);
    if (value.length === 0) {
      setData(allData);
    }
    const filteredData = allData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length === 0) {
      setData([]);
    } else {
      setData(filteredData);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View>

</View>
        <View style={styles.topImageContainer}>
            <Image source={require('../assets/Images/productheader.png')} style={styles.topImage} />
        </View>
        <ScrollView>
            <Searchbar
                placeholder="Search"
                onChangeText={handleSearch}
                value={search}
                autoCorrect={false}
                style={{
                    backgroundColor: '#D9D9D9',
                    borderRadius: 10,
                    paddingHorizontal: 5,
                    height: 50,
                    width: "90%",
                    fontSize: 16,
                    color: '#333333',
                    margin: 20
                }}
            />
            <View style={styles.rowContainer}>
                {data.map((item, index) => {
                    const path = images.find((img) => img.name === item.image);
                    const icon = path ? path.path : null;
                    console.log('packages from products',item.packages);
                    return (
                        <View key={index} style={styles.squareContainer}>
                            <Image source={icon} style={styles.image} />
                            <Text style={styles.imageName}>{item.name}</Text>
                            <Pressable
                                onPress={() => navigation.navigate({
                                    name: 'Packages', params: {
                                        packageList: item.packages, 
                                        name: item.name, 
                                        image: item.image, 
                                        pId: id,                                                        
                                        imgDetails: item.imgDetails, 
                                        extraPack : item.extraPack,
                                    }
                                })}
                                style={styles.button}>
                                <Text style={styles.buttonText}>View Packaging</Text>
                            </Pressable>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    </SafeAreaView>
);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImageContainer: {
    width: '100%',
    height: windowHeight * 0.25,
  },
  topImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  searchBox: {
    width: '100%',
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  searchText: {
    fontSize: 16,
  },
  rowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 50,
    flexWrap: 'wrap',
  },
  squareContainer: {
    backgroundColor: '#F7EBED',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#998184',
    shadowColor: '#998184',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    aspectRatio: 1,
    width: 160,
    margin: 6
  },
  image: {
    width: '60%',
    height: '70%',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  imageName: {
    fontSize: 14,
    marginBottom: 3,

  },
  button: {
    backgroundColor: '#998184',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
});
