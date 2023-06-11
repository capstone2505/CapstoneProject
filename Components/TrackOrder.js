import React, { useState } from 'react';
import { View, Text, StyleSheet, Image , SafeAreaView , Pressable} from 'react-native';
import Constants from 'expo-constants';

const TrackOrder = () => {
  const [orderStatus, setOrderStatus] = useState('Completed');

  const renderStep = (status, label, imageSource) => {
    const stepStyles = [styles.step];
    const circleStyles = [styles.circle];
    const tickStyles = [styles.tick];


    if (orderStatus === status) {
      circleStyles.push(styles.completed);
      tickStyles.push(styles.show);
    }

    return (
      
      <View style={stepStyles} key={status}>
        <Image style={styles.track1} source={imageSource} />
        <Text>{label}</Text>
        <View style={tickStyles}>
          <Text>&#10003;</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
       <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Pressable  onPress={() => navigation.navigate("Home")}>
      <Text style={styles.x}>{"X"}</Text>
                </Pressable>
                {/* <Text style={{ color: 'Black', marginTop: 10, fontSize: 30 ,textAlign: 'center', }}> Track Order </Text> */}
                <Image style={styles.track} source={require('../assets/Images/Track1.png')} />


      </View>
      </SafeAreaView>
      
      <View>
      {renderStep('Completed', 'Completed', require('../assets/Images/Ordered.png'))}
      {renderStep('OnTheWay', 'On the way', require('../assets/Images/onTheway.png'))}
      {renderStep('Delivered', 'Delivered', require('../assets/Images/Delivered.png'))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginTop:80,
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
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  show: {
    backgroundColor: 'green',
  },
  track1: {
    width: 90,
    height: 95,
    marginRight: 35,
    marginLeft: 60,

  },
  x: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
},
track: {
  marginTop: 10,
    width: '100%',
    height: 150,
    marginBottom: -60,
},
});

export default TrackOrder;
