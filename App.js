import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './Navigation/TabNavigation';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Products from './Components/products';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs'
import EditProfile from './Components/EditProfile'
import Offers from './Components/Offers'
import Packages from './Components/Packages'
import PackageDetails from './Components/PackageDetails'
import MyCart from './Components/MyCart'
import ConfirmOrder from './Components/ConfirmOrder'
import PaymentDetails from './Components/PaymentDetails'
import OrderedPlaced from './Components/OrderedPlaced'
import TrackOrder from './Components/TrackOrder'

// import Try from './Components/Try'
//installation for nav - npm install @react-navigation/native
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Offers" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={TabNavigation} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Products' component={Products} />
          <Stack.Screen name='ContactUs' component={ContactUs} />
          <Stack.Screen name='AboutUs' component={AboutUs} />
          <Stack.Screen name='EditProfile' component={EditProfile} />
          <Stack.Screen name='Offers' component={Offers} />
          <Stack.Screen name='Packages' component={Packages} />
          <Stack.Screen name='PackageDetails' component={PackageDetails} />
          <Stack.Screen name='MyCart' component={MyCart} />
          <Stack.Screen name='ConfirmOrder' component={ConfirmOrder} />
          <Stack.Screen name='PaymentDetails' component={PaymentDetails} />
          <Stack.Screen name='OrderedPlaced' component={OrderedPlaced} />
          <Stack.Screen name='TrackOrder' component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
