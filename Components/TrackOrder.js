import React from 'react';
import { StatusBar, StyleSheet, View, Image, SafeAreaView } from 'react-native';


export default function TrackOrder() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.home} source={require('../assets/Images2/home.png')} />
      </View>
      <View style={styles.content}>
        <Image style={styles.track1} source={require('../assets/Images2/Track1.png')} />
      </View>
       {/* <View style={styles.content}>
        <Image style={styles.ordered} source={require('./assets/images2/Ordered.png')} />
      </View>
      <View style={styles.content}>
        <Image style={styles.onTheway} source={require('./assets/images2/onTheway.png')} />
      </View>
      <View style={styles.content}>
        <Image style={styles.delivered} source={require('./assets/images2/Delivered.png')} />
      </View> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-start',
    padding: 16,
  },
  home: {
    width: '15%',
    height: 50,
    marginBottom: 10,
  },
  track1: {
    width: '40%',
    height: 100,
    marginBottom: 5,
  },
  ordered: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  onTheway: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  delivered: {
    width: '104%',
    height: 200,
    marginBottom: 10,
  },
});