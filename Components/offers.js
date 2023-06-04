import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Dimensions ,Pressable} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Offers({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Home2')}>
              <Text style={{ color: '#231154', textAlign: "center", fontWeight: 'bold' ,marginRight:320}}> ← Home </Text>
         </Pressable>
        <View style={styles.topImageContainer}>
          <Image source={require('../assets/Images/offers.png')} style={styles.topImage} />
        </View>

        <ScrollView>
       
        <View style={styles.offerContainer}>
         
          <View style={styles.offerItem}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/Images/pows.png')} style={styles.offerImage} />
            </View>
           
           
            
            
            <View style={styles.detailsContainer}>
              <Text style={styles.discountText}>15% discount</Text>
              <Text style={styles.orderText}>Ordering More</Text>
              <Text style={styles.priceText}>2300 QR</Text>
              <View style={styles.button}>
              <Pressable  onPress={() => navigation.navigate("Packages")}>
                <Text style={styles.buttonText}>Click Here</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.offerItem}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/Images/charger.png')} style={styles.offerImage} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.discountText}>20% discount</Text>
              <Text style={styles.orderText}>Ordering More</Text>
              <Text style={styles.priceText}>3000 QR</Text>
              <View style={styles.button}>
              <Pressable  onPress={() => navigation.navigate("Packages")}>
                <Text style={styles.buttonText}>Click Here</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.offerItem}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/Images/exit55.png')} style={styles.offerImage} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.discountText}>10% discount</Text>
              <Text style={styles.orderText}>Ordering More</Text>
              <Text style={styles.priceText}>2000 QR</Text>
              <View style={styles.button}>
              <Pressable  onPress={() => navigation.navigate("Packages")}>
                <Text style={styles.buttonText}>Click Here</Text>
                </Pressable>
              </View>
            </View>

          </View>
          <View style={styles.offerItem}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/Images/rose.png')} style={styles.offerImage} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.discountText}>5% discount</Text>
              <Text style={styles.orderText}>Order More</Text>
              <Text style={styles.priceText}>2500 QR</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Click Here</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Repeat the code for other offer items */}
        </View>
      </ScrollView>
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
  topImageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  topImage: {
    width: windowWidth,
    height: 200,
    resizeMode: 'cover',
  },
  offerContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  offerItem: {
    flexDirection: 'row',
    width: windowWidth,
    borderRadius: 10,
    // marginBottom: 5,
    backgroundColor: '#fff',
    elevation: 4,
    padding: 8,
    
    
  },
  imageContainer: {
    flex: 1,
    marginLeft:30
  },
  offerImage: {
    width: 130,
    height: 130,
    borderRadius: 10,

  },
  detailsContainer: {
    flex: 1,
    //marginLeft: 20,
    justifyContent: 'center',
    marginRight:40,
    marginTop:10

  },
  discountText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  orderText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  priceText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'dashed',
    backgroundColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
  },
});
