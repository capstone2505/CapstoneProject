// Offers Done 
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";

import { db } from "./Config";
import { getDocs, collection } from "firebase/firestore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Offers({ navigation }) {
  const images = [
    { name: "pows.png", path: require("../assets/Images/pows.png") },
    { name: "charger.png", path: require("../assets/Images/charger.png") },
    { name: "exit55.png", path: require("../assets/Images/exit55.png") },
    { name: "salt.png", path: require("../assets/Images/salt.png") },
  ];

  const offers = [
    { id: 1, persentage: 15, name: "Paws", image: "pows.png", moreThan: 2300 },
    {
      id: 2,
      persentage: 20,
      name: "Charger",
      image: "charger.png",
      moreThan: 3000,
    },
    {
      id: 3,
      persentage: 10,
      name: "Exit 55",
      image: "exit55.png",
      moreThan: 2000,
    },
    {
      id: 4,
      persentage: 5,
      name: "SALT",
      image: "salt.png",
      moreThan: 2500,
    },
  ];

  const [data, setData] = useState([]);
  const [id, setId] = useState();

  const readAll = async () => {
    const docs = await getDocs(collection(db, "products"));
    let temp = [];
    docs.forEach(async (doc) => {
      let product = doc.data();
      setId(doc.id);
      temp.push(product);
      setData(temp);
    });
    console.log("data");
    console.log(data);
  };

  console.log("data, ,,,,,,");

  useEffect(() => {
    readAll();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/Images/offers.png")}
          style={styles.topImage}
        />
      </View>

      <ScrollView>
        <View style={styles.offerContainer}>
          {offers.map((x, i) => {
            const path = images.find((img) => img.name === x.image);
            const icon = path ? path.path : null;
            const product = data.filter((item) => item.name === x.name);
            const m = product ? product : null;
        
            return (
              <View key={i} style={styles.offerItem}>
                <View style={styles.imageContainer}>
                  <Image source={icon} style={styles.offerImage} />
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.discountText}>
                    {x.persentage}% discount
                  </Text>
                  <Text style={styles.orderText}>Ordering More Than</Text>
                  <Text style={styles.priceText}>{x.moreThan} QR</Text>
                  {product.map((x, index) => {
                    return (
                      <View key={index} style={styles.button}>
                        <Pressable
                          onPress={() =>
                            navigation.navigate({
                              name: "Packages",
                              params: {
                                packageList: x.packages,
                                name: x.name,
                                image: x.image,
                                pId: id,
                                imgDetails: x.imgDetails,
                                extraPack: x.extraPack,
                                discount: x.persentage
                              },
                            })
                          }
                        >
                          <Text style={styles.buttonText}>Click Here</Text>
                        </Pressable>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topImageContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  topImage: {
    width: windowWidth,
    height: 200,
    resizeMode: "cover",
  },
  offerContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  offerItem: {
    flexDirection: "row",
    width: windowWidth,
    borderRadius: 10,
    // marginBottom: 5,
    backgroundColor: "#fff",
    elevation: 4,
    padding: 8,
  },
  imageContainer: {
    flex: 1,
    marginLeft: 30,
  },
  offerImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    //marginLeft: 20,
    justifyContent: "center",
    marginRight: 40,
    marginTop: 10,
  },
  discountText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  orderText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  priceText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    borderStyle: "dashed",
    backgroundColor: "#fff",
  },
  buttonText: {
    textAlign: "center",
  },
});
