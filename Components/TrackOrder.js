import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Image, SafeAreaView, Text , Pressable} from 'react-native';

const TrackOrder = () => {
  const steps = [
    { id: 1, title: 'Ordered', image: require('../assets/Images/Ordered.png') },
    { id: 2, title: 'On the Way', image: require('../assets/Images/onTheway.png') },
    { id: 3, title: 'Delivered', image: require('../assets/Images/Delivered.png') },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
      <Pressable  onPress={() => navigation.navigate("Home")}>
      <Text style={styles.x}><Image source={require('../assets/Images/home.png')}/></Text>
                </Pressable>
      </View>
      <View style={styles.content}>
        {steps.map((step, index) => (
          <View key={step.id} style={styles.stepContainer}>
            <Image style={styles.stepImage} source={step.image} />
            <Text style={[styles.stepTitle, currentStep === index && styles.currentStepTitle]}>
              {step.title}
            </Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-start',
    padding: 8,
  },
  home: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
  },
  stepImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    color: '#999',
  },
  currentStepTitle: {
    color: '#000',
  },
});

export default TrackOrder;