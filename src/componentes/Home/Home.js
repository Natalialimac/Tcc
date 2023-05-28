import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';

import styles from './styles';

const Home = () => {
  const handleTextToSpeech = (text) => {
    Speech.speak(text, {
      language: 'pt-BR', // Defina o idioma desejado
      pitch: 1, // Ajuste o tom da voz (opcional)
      rate: 1, // Ajuste a velocidade da voz (opcional)
    });
  };

  return (
    <View style={styles.container}>
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
