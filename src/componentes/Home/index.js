import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Speech from 'expo-speech';

import styles from './styles';

const Home = ({ navigation }) => {
  //AJEITAR AUDIO
  const handleTextToSpeech = (text) => {
    Speech.speak(text, {
      language: 'pt-BR',
      pitch: 1,
      rate: 1,
    });
  };
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>T21</Text>
        <Text style={styles.subtitle}>Contando com diversão</Text>
      </View>
      <View style={styles.logoContainer}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/logo.json')}
        style={styles.logo}
        loop={true}
      />
      </View>
     

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChildInfoScreen")}
        >
          <Text style={styles.buttonText}>Clique aqui para começar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>Clique para saber como jogar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={() => navigation.navigate("Store")}
        >
          <Text style={styles.buttonText}>Loja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;