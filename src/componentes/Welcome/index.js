import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const WelcomeScreen = ({ navigation, route }) => {
  const { name, age } = route.params;

  const handleStart = () => {
    navigation.navigate('Leveling');
  };

  return (
    <View style={styles.container}>
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
