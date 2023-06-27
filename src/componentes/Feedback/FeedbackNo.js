import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Speech from 'expo-speech';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

const FeedbackNo = ({ navigation, route }) => {
  const { name } = route.params;

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play();
  }, []);

  const handleTextToSpeech = (text) => {
    Speech.speak(text, { language: 'pt-BR' });
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/celebrationsNo.json')}
        style={styles.animation}
        loop={true}
      />
      <TouchableOpacity
        onPress={() => handleTextToSpeech('Você está sendo muito incrível. Porém, desta vez você errou. Fique bem atento às palavras em destaque.')}
        style={styles.audioIcon}
      >
        <FontAwesome5 name="volume-up" size={24} color="white" />
      </TouchableOpacity>
      <Animatable.View>
        <Text style={styles.title}>Olá, {name}! Você está sendo muito incrível. Porém, desta vez você errou.</Text>
        <Text style={styles.message}>Dica: Fique bem atento às palavras em destaque.</Text>
      </Animatable.View>

      <TouchableOpacity
        style={[styles.button, styles.highlightedButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedbackNo;
