import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import ItemDetails from '../Components/ItemDetails';
import products  from '../Components/products'
import MyCart from '../Components/MyCart'
import Home from '../Components/Home'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfirmOrder from '../Components/ConfirmOrder';
const Tab = createBottomTabNavigator();





export default function TabNavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Login" component={Login} options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="SignUp" component={SignUp} options={{
          tabBarLabel: 'SignUp',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="draw" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="MyCart" component={MyCart} options={{
          tabBarLabel: 'MyCart',
          tabBarIcon: ({ color, size }) => (
            <Zocial name="cart" color={color} size={size} />
          ),
        }} />
        
         <Tab.Screen name="products" component={products} options={{
          tabBarLabel: 'products',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={size} />
          ),
        }} />

      
        <Tab.Screen name="ItemDetails" component={ItemDetails} options={{
          tabBarLabel: 'ItemDetails',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={size} />
          ),
        }} />

       
  
  
        {/* <Tab.Screen name="Try" component={Try} /> */}
      </Tab.Navigator>
    )
  }
  
  const styles = StyleSheet.create({})