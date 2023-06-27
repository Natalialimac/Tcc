import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const WelcomeScreen = ({ navigation, route }) => {
  const { name, age } = route.params;

  const handleStart = () => {
    navigation.navigate('Leveling', { name });
  };

  const handleTextToSpeech = (text) => {
    Speech.speak(text, { language: 'pt-BR' });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleTextToSpeech(`Bem-vindo(a)! ${name}, vi que você tem ${age} aninhos! Tudo bem com você? Vamos nos divertir aprendendo? Clique nesse botão amarelo!`)}
        style={styles.audioIcon}
      >
        <FontAwesome5 name="volume-up" size={24} color="white" />
      </TouchableOpacity>
      <LottieView
        source={require('../../assets/animal.json')}
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.title}>Bem-vindo(a)! {name}, vi que você tem {age} aninhos! Tudo bem com você?</Text>
      <Text style={styles.subtitle}>Vamos nos divertir aprendendo? Clique nesse botão amarelo </Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
