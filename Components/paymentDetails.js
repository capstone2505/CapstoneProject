import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Switch } from 'react-native';

export default function PaymentDetails() {
  const [saveCardDetails, setSaveCardDetails] = useState(false);

  const handleSaveCardDetailsToggle = () => {
    setSaveCardDetails(!saveCardDetails);
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <Text style={styles.title}>Card Payment</Text>
      <View style={styles.content}>
        <View style={styles.space} />
        <Text style={styles.boldTextLarge}>Summary Payment</Text>
        <View style={styles.paymentDetails}>
          <Text style={styles.subtitle}>Sub-total: 5000 QR</Text>
          <Text style={styles.subtitle}>Discount: 0%</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitle}>Total Amount: 5000 QR</Text>
        </View>
        <Text style={styles.boldTextLarge}>Card Details</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput style={styles.input} placeholder="Card Number" />
          <Text style={styles.label}>Card expiry date</Text>
          <View style={styles.expiryContainer}>
            <TextInput style={[styles.input, styles.expiryInput]} placeholder="MM" />
            <TextInput style={[styles.input, styles.expiryInput]} placeholder="YY" />
          </View>
          <Text style={styles.label}>Card Verification Value</Text>
          <TextInput style={styles.input} placeholder="CVV" />
          <View style={styles.checkboxContainer}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={saveCardDetails ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleSaveCardDetailsToggle}
              value={saveCardDetails}
            />
            <Text style={styles.checkboxText}>For faster and more secure checkout save your card details</Text>
          </View>
        </View>
        <View style={styles.space} />
        <View style={styles.imageContainer}>
          {/* <Image source={require('../assets/Images2/payment.png')} style={styles.image} resizeMode="contain" /> */}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Pay now</Text>
        </TouchableOpacity>
        <View style={styles.space} />
      </View>
      <View style={styles.space} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  space: {
    height: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25
  },
  content: {
    flex: 1,
  },
  boldTextLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentDetails: {
    marginTop: 10,
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  cardDetails: {
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  expiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    width: '45%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#998184',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
