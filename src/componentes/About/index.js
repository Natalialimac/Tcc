import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';

const About = () => {
  const handleTextToSpeech = (text) => {
    Speech.speak(text, { language: 'pt-BR' });
  };
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <LottieView
          source={require('../../assets/about.json')}
          autoPlay
          loop
          style={styles.image}
        />
        <Text style={styles.title}>Sobre o jogo:</Text>
        <Text style={styles.instructions}>1. Informe o nome e idade;</Text>
        <Text style={styles.instructions}>2. Responda as questões de nivelamento;</Text>
        <Text style={styles.instructions}>3. Logo em seguida se divirta aprendendo e conquiste vários prêmios.</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleTextToSpeech('Sobre o jogo: 1. Informe o nome e idade;2. Responda as questões de nivelamento;3. Logo em seguida se divirta aprendendo e conquiste vários prêmios.')}
        style={styles.audioIcon}
      >
        <FontAwesome5 name="volume-up" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default About;
