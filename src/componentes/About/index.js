import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const About = () => {
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
    </View>
  );
};

export default About;
