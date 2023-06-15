// Track oreder Done 
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';


const TrackOrder = ({ navigation }) => {
  const [orderStatus, setOrderStatus] = useState('Completed');

  const renderStep = (status, label, imageSource, index) => {
    const stepStyles = [styles.step];
    const circleStyles = [styles.circle];
    const tickStyles = [styles.tick];
    const dotStyles = [styles.dot];
    
    if (orderStatus === status) {
      circleStyles.push(styles.completed);
      tickStyles.push(styles.show);
    }
    if (index !== 0) {
      dotStyles.push(styles.dotPink);
    }

    return (
      <SafeAreaView>
        <View style={stepStyles} key={status}>
          <Image style={styles.track1} source={imageSource} />
          <Text>{label}</Text>
          <View style={tickStyles}>
            <Text>&#10003;</Text>
          </View>
        </View>
      </SafeAreaView>

    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.track} source={require('../assets/Images/Track1.png')} />
          <Text style={{ color: 'black', marginTop: 5, fontSize: 20 }}> Track Order </Text>
        </View>
      </View>

      <View>
        {renderStep('Completed', 'Completed', require('../assets/Images/Ordered.png'), 0)}
        {renderStep('OnTheWay', 'On the way', require('../assets/Images/onTheway.png'), 1)}
        {renderStep('Delivered', 'Delivered', require('../assets/Images/Delivered.png'), 2)}
      </View>

      <View style={{ marginBottom: 5, marginTop: 5, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8, marginTop: 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.navigate("Home2")}>
            <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Done</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 50,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
  },
  completed: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  tick: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  show: {
    backgroundColor: 'pink',
  },
  track1: {
    width: 100,
    height: 95,
    marginRight: 35,
    marginLeft: 60,

  },
  x: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  dot: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  track: {
    marginTop: 15,
    width: '100%',
    height: 150,
    marginBottom: -60,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginRight: 5,
  },
  dotPink: {
    backgroundColor: 'pink',
  },
});

export default TrackOrder;
