import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AboutUs() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullAboutText, setShowFullAboutText] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleAboutText = () => {
    setShowFullAboutText(!showFullAboutText);
  };

  const descriptionText = `Catering 360 is a connecting point between restaurants and customers, serving customer appetite with quality items and timely services...     So, it will solve the shortage of catering services in one application. it is easy to order and manage to your event across our app.`;

  const aboutText = `At Catering 360, what sets us apart from other catering services is providing a truly comprehensive experience. We don't just provide food; we provide a complete catering solution that includes menu planning, food preparation, delivery, setup, and cleanup. This means that you can sit back and relax, knowing that everything is taken care of from start to finish.`;

  return (
    
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.circleImage}
            source={require('./assets/about11.jpeg')}
          />
          <View />
        </View>
        <Text style={styles.aboutUsText}>ABOUT US</Text>
        <Text
          style={[
            styles.descriptionText,
            showFullDescription ? styles.fullDescription : styles.previewDescription,
          ]}
        >
          {descriptionText}
        </Text>
        {!showFullDescription && (
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.seeMoreText}>See more...</Text>
          </TouchableOpacity>
        )}
        {showFullDescription && (
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.seeMoreText}>See less</Text>
          </TouchableOpacity>
        )}
        <Image
          style={styles.rectangleImage}
          source={require('./assets/about2.jpeg')}
        />
        <Text
          style={[
            styles.aboutText,
            showFullAboutText ? styles.fullAboutText : styles.previewAboutText,
          ]}
        >
          {aboutText}
        </Text>
        {!showFullAboutText && (
          <TouchableOpacity onPress={toggleAboutText}>
            <Text style={styles.seeMoreText}>See more...</Text>
          </TouchableOpacity>
        )}
        {showFullAboutText && (
          <TouchableOpacity onPress={toggleAboutText}>
            <Text style={styles.seeMoreText}>See less</Text>
          </TouchableOpacity>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F7EBED',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  aboutUsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  backgroundContainer: {
    marginBottom: 16,
  },
  circleImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  fullDescription: {
    maxHeight: '100%',
  },
  previewDescription: {
    maxHeight: 60,
  },
  seeMoreText: {
    color: '#403637',
    textDecorationLine: 'underline',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  rectangleImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  fullAboutText: {
    maxHeight: '100%',
  },
  previewAboutText: {
    maxHeight: 60,
  },
});