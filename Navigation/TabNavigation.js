import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//jjjj
import Products  from '../Components/products'
import MyCart from '../Components/MyCart'
import Home from '../Components/Home'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp';
import Profile from '../Components/profile';
import AboutUs from '../Components/AboutUs';
import Packages from '../Components/Packages';
import ContactUs from '../Components/ContactUs';
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfirmOrder from '../Components/ConfirmOrder';
import PackageDetails from '../Components/PackageDetails';


const Tab = createBottomTabNavigator();
// const handlePress = ({ navigation }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   if (isLoggedIn) {
//     navigation.navigate("MyCart");
//   } else {
//     navigation.navigate("Login");
//   }
// };

export default function TabNavigation() {
  
    return (
      <Tab.Navigator>
        {/* Home page  */}
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />

        {/* Products page */}
        <Tab.Screen name="Products" component={Products} options={{
          tabBarLabel: 'products',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-grid" color={color} size={size} />
          ),
        }} />

        {/* MyCart page */}
        <Tab.Screen name="MyCart" component={Login} options={{
          tabBarLabel: 'MyCart',
          tabBarIcon: ({ color, size }) => (
            <Zocial name="cart" color={color} size={size} />
          ),
        }} />

        

        {/* AboutUs page */}
        <Tab.Screen name="AboutUs" component={AboutUs} options={{
          tabBarLabel: 'AboutUs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment-edit" color={color} size={size} />
          ),
        }} />

<Tab.Screen name="ContactUs" component={ContactUs} options={{
          tabBarLabel: 'ContactUs',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="quick-contacts-mail" color={color} size={size} />
          ),
        }} />

  

        {/* <Tab.Screen name="Try" component={Try} /> */}
      </Tab.Navigator>
    )
  }
  
  const styles = StyleSheet.create({})