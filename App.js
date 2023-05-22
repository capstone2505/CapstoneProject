import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConfirmOrder from './Components/ConfirmOrder';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open </Text>
      <ConfirmOrder />
      <StatusBar style="auto" />
    </View>
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
