import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Speech from 'expo-speech';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

const Home = ({ navigation }) => {
  const handleTextToSpeech = (text) => {
    Speech.speak(text, { language: 'pt-BR' });
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
          style={[styles.button, styles.button2, { backgroundColor: '#72c3fb' }]}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>Clique para saber como jogar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button2, { backgroundColor: '#ff4040' }]}
          onPress={() => navigation.navigate("Store")}
        >
          <Text style={styles.buttonText}>Loja</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTextToSpeech('Olá amiguinho, vamos nos divertir? Clique no botão amarelo para começar o jogo. Clique no botão azul para saber como joga e clique no botão vermelho para ir as lojas')}
          style={styles.audioIcon}
        >
          <FontAwesome5 name="volume-up" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
