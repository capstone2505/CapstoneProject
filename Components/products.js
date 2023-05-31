import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';

import { Searchbar } from 'react-native-paper';

// npm install react-native-paper
export default function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/Images2/productheader.jpeg')} style={styles.topImage} />
      </View>
      <ScrollView>

        {/* Search box */}
<<<<<<< HEAD
        <Searchbar
          placeholder="Search"
          // onChangeText={handleSearch}
          // value={search}
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
=======
>>>>>>> parent of 77847598 (make changes in products)

        {/* First row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 1</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 2</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Second row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 3</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 4</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Third row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 5</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 6</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Fourth row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 7</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('../assets/Images2/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 8</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Additional rows go here */}
      </ScrollView>
      <StatusBar style="auto" />
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
    flexDirection: 'row',
    marginBottom: 15,
  },
  squareContainer: {
    flex: 1,
    backgroundColor: '#F7EBED',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#998184',
    shadowColor: '#998184',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    aspectRatio: 1,
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
