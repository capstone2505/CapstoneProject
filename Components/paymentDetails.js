import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Switch, SafeAreaView } from 'react-native';

export default function PaymentDetails() {
  const [saveCardDetails, setSaveCardDetails] = useState(false);

  const handleSaveCardDetailsToggle = () => {
    setSaveCardDetails(!saveCardDetails);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', }}>
      <Text style={styles.title}>Card Payment</Text>

      <View style={{ margin: 15, width: 400 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 5 }}>Summary Payment</Text>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
          <View style={[{ width: 320, margin: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Text style={{ fontSize: 15 }}>Sub-Total</Text>
            <Text style={{ fontSize: 15 }}>5000QR</Text>
          </View>
        </View>
        <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
            <Text style={{ margin: 5, fontSize: 15 }}>Discount</Text>
            <Text style={{ margin: 5, fontSize: 15 }}>0%</Text>
          </View>
        </View>
        <View style={[{ marginBottom: 3, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#d3d3d3', width: 350, marginLeft: 10 }]}>
          <View style={[{ width: 320, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }]}>
            <Text style={{ margin: 5, fontSize: 15 }}>Total Amount</Text>
            <Text style={{ margin: 5, fontSize: 15 }}>5000QR</Text>
          </View>
        </View>
      </View>

      <View style={{ margin: 15, width: 400, marginTop: 0 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 5 }}>Card Details</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput style={styles.input} placeholder="Card Number" />
          <Text style={styles.label}>Card expiry date</Text>
          <View style={styles.expiryContainer}>
            <TextInput style={[styles.input, styles.expiryInput]} placeholder="MM" />
            <TextInput style={[styles.input, styles.expiryInput]} placeholder="YY" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.label}>Card Verification Value</Text>
              <TextInput style={styles.input} placeholder="CVV" />
            </View>
            <View>
              <Image style={{ width: 250, height: 100, alignSelf: 'center' }} source={require("../assets/Images2/CVV.png")}></Image>
            </View>

          </View>

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
      </View>

      <View style={{ marginBottom: 30, marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Pay Now </Text>
              </View>
            </TouchableOpacity>
          </View>

    </SafeAreaView>
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
    marginLeft: 15,
    width: 370,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    padding: 9,
    margin: 5
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
    width: 320,
    marginTop: 10
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
