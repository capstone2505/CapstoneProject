// Done 
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
import Profile from './Components/profile'
import offers from './Components/offers'
import Packages from './Components/Packages'
import PackageDetails from './Components/PackageDetails'
import MyCart from './Components/MyCart'
import ConfirmOrder from './Components/ConfirmOrder'
import PaymentDetails from './Components/paymentDetails'
import OrderedPlaced from './Components/OrderedPlaced'
import TrackOrder from './Components/TrackOrder'
import Checkout from './Components/Checkout';
import Home2 from './Components/Home2';
import TabNavigation2 from './Navigation/TabNavigation2';




//installation for nav - npm install @react-navigation/native
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={TabNavigation} />
        <Stack.Screen name='Home2' component={TabNavigation2} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true }}/>
        <Stack.Screen name='Products' component={Products} options={{ headerShown: true }} />
        <Stack.Screen name='ContactUs' component={ContactUs} />
        <Stack.Screen name='AboutUs' component={AboutUs} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: true }} />
        <Stack.Screen name='Offers' component={offers} options={{ headerShown: true }} />
        <Stack.Screen name='Packages' component={Packages} options={{ headerShown: true }} />
        <Stack.Screen name='PackageDetails' component={PackageDetails} options={{ headerShown: true }} />
        <Stack.Screen name='MyCart' component={MyCart} options={{ headerShown: true }} />
        <Stack.Screen name='ConfirmOrder' component={ConfirmOrder} options={{ headerShown: true }} />
        <Stack.Screen name='PaymentDetails' component={PaymentDetails} options={{ headerShown: true }} />
        <Stack.Screen name='OrderedPlaced' component={OrderedPlaced} />
        <Stack.Screen name='TrackOrder' component={TrackOrder} options={{ headerShown: true }}/>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: true }} />
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

