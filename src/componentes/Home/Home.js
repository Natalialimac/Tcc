import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import * as Speech from 'expo-speech';

import styles from './styles';

const Home = ({}) => {
  const handleTextToSpeech = (text) => {
    Speech.speak(text, {
      language: 'pt-BR',
      pitch: 1,
      rate: 1,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTextToSpeech('Clique aqui para começar')}
      >
        <Text style={styles.buttonText}>Clique aqui para começar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => handleTextToSpeech('Clique para saber como jogar')}
      >
        <Text style={styles.buttonText}>Clique para saber como jogar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => handleTextToSpeech('Loja')}
      >
        <Text style={styles.buttonText}>Loja</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
