import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//jjjj
import Products from '../Components/products'
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

//DB work
import { auth, db } from '../Components/Config';
import { getDocs, collection, query, where , doc, getDoc } from "firebase/firestore";

// const Tab = createBottomTabNavigator();


// export default function TabNavigation() {

//   return (
//     <Tab.Navigator>
//       {/* Home page  */}
//       <Tab.Screen name="Home" component={Home} options={{
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="home" color={color} size={size} />
//         ),
//       }} />

//       {/* Products page */}
//       <Tab.Screen name="Products" component={Products} options={{
//         tabBarLabel: 'products',
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="ios-grid" color={color} size={size} />
//         ),
//       }} />

//       {/* MyCart page */}
//       <Tab.Screen name="MyCart" component={Login} options={{
//         tabBarLabel: 'MyCart',
//         tabBarIcon: ({ color, size }) => (
//           <Zocial name="cart" color={color} size={size} />
//         ),
//       }} />



//       {/* AboutUs page */}
//       <Tab.Screen name="AboutUs" component={AboutUs} options={{
//         tabBarLabel: 'AboutUs',
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="comment-edit" color={color} size={size} />
//         ),
//       }} />

//       <Tab.Screen name="ContactUs" component={ContactUs} options={{
//         tabBarLabel: 'ContactUs',
//         tabBarIcon: ({ color, size }) => (
//           <MaterialIcons name="quick-contacts-mail" color={color} size={size} />
//         ),
//       }} />



//       {/* <Tab.Screen name="Try" component={Try} /> */}
//     </Tab.Navigator>
//   )
// }

// const styles = StyleSheet.create({})
// import React, { useEffect, useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons, Ionicons, Zocial, MaterialIcons } from '@expo/vector-icons';
// import { auth } from './Config'; // Import your Firebase auth instance
// import Home from './Home';
// import Products from './Products';
// import MyCart from './MyCart';
// import Login from './Login';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid); // Set the user's UID as userId
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe(); // Unsubscribe from the auth state changes when component unmounts
  }, []);

  return (
    <Tab.Navigator>
      {/* Home page */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* Products page */}
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-grid" color={color} size={size} />
          ),
        }}
      />

      {/* MyCart page */}
      {userId ? (
        <Tab.Screen
          name="MyCart"
          component={MyCart}
          options={{
            tabBarLabel: 'My Cart',
            tabBarIcon: ({ color, size }) => (
              <Zocial name="cart" color={color} size={size} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="MyCart"
          component={Login}
          options={{
            tabBarLabel: 'MyCart',
            tabBarIcon: ({ color, size }) => (
              <Zocial name="cart" color={color} size={size} />
            ),
          }}
        />
      )}

      {/* AboutUs page */}
      <Tab.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }}
      />

      {/* ContactUs page */}
      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="quick-contacts-mail" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
