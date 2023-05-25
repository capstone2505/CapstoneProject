import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './Navigation/TabNavigation';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import ConfirmOrder from './Components/ConfirmOrder';
// import Try from './Components/Try'
//installation for nav - npm install @react-navigation/native
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={TabNavigation} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='ConfirmOrder' component={ConfirmOrder} />
        {/* <Stack.Screen name='Try' component={Try} /> */}
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
