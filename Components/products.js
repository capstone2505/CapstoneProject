import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar } from "react-native-paper";

export default function products() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topImageContainer}>
          <Image source={require('./assets/productheader.jpeg')} style={styles.topImage} />
        </View>

        {/* Search box */}
        {/* <View style={styles.searchBox}>
          <Text style={styles.searchText}>Search</Text>
        </View> */}

        <View style={{ flexDirection: 'row', margin: 6, justifyContent: 'center', padding: 10, alignItems: 'space-between' }}>
          <Searchbar
            placeholder="Search"
            onChangeText={handleSearch}
            value={search}
            autoCorrect={false}
            style={{
              backgroundColor: '#F9F5EB',
              borderRadius: 10,
              paddingHorizontal: 5,
              height: 50,
              width: "90%",
              fontSize: 16,
              color: '#333333',
            }}
          />
          <FontAwesome name='sort' size={40} style={{ margin: 6 }} color={'#F9F5EB'}
            onPress={() => setModalVisible(true)} />
        </View>

        {/* First row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 1</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 2</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Second row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 3</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 4</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Third row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 5</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 6</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Fourth row */}
        <View style={styles.rowContainer}>
          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
            <Text style={styles.imageName}>Image 7</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Packaging</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.squareContainer}>
            <Image source={require('./assets/p.jpeg')} style={styles.image} />
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
  },
  buttonText: {
    fontSize: 10,
    color: 'white',
  },
});
