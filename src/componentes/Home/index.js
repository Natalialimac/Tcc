import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo2.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("About")}
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
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>Loja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;