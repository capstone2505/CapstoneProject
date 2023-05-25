import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function OrderedPlaced() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.x}>X</Text>
      </View>
      <View>
        <Image style={styles.thankYou} source={require('../assets/Images2/ThankYou.png')} />
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Order</Text>
        </TouchableOpacity>
      </View>
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
    x: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    thankYou: {
        width: '100%',
        height: 200,
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