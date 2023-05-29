import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Products from '../Components/products';
import MyCart from '../Components/MyCart'
import Home from '../Components/Home'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp';
import Profile from '../Components/EditProfile';
import AboutUs from '../Components/AboutUs';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfirmOrder from '../Components/ConfirmOrder';
import PackageDetails from '../Components/PackageDetails';
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

      <Tab.Screen name="Products" component={Products} options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-grid" color={color} size={size} />
        ),
      }} />

      <Tab.Screen name="MyCart" component={MyCart} options={{
        tabBarLabel: 'MyCart',
        tabBarIcon: ({ color, size }) => (
          <Zocial name="cart" color={color} size={size} />
        ),
      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="AboutUs" component={AboutUs} options={{
        tabBarLabel: 'AboutUs',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="comment-edit" color={color} size={size} />
        ),
      }} />

      {/* <Tab.Screen name="Try" component={Try} /> */}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})