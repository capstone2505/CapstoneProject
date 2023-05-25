import React from 'react';
import { StatusBar, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TrackOrder() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <MaterialCommunityIcons name="home" color={'red'} size={50} />
      </View>
      {/* <View style={styles.content}>
        <Image style={styles.track} source={require('../assets/Images2/Track.png')} />
      </View> */}
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
    width: '100%',
    height: 200,
    marginBottom: 18,
  },
  track: {
    width: '100%',
    height: 600,
    marginBottom: 18,
  },
  sendButton: {
    backgroundColor: '#998184',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 8,
    width:182,
    height: 54,
  },
  sendButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});