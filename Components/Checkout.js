import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'

const Checkout = ({ navigation }) => {
  return (
    <View>
      <Text>Checkout</Text>

      <View style={{ marginBottom: 30, marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8 , marginTop: 100}}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable  onPress={() => navigation.navigate("ConfirmOrder")}>
                <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Add to Cart </Text>
                </Pressable>
              </View>
          </View>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({})