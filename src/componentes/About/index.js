import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../../assets/about.png')} style={styles.image} />
        <Text style={styles.title}>Sobre o jogo:</Text>
        <Text style={styles.instructions}>1. Inicialmente precisamos da informação da idade e nome da criança;</Text>
        <Text style={styles.instructions}>2. Após a fase de cadastro temos a tela de nivelação de habilidades: dez questões misturadas de fácil a difícil com assuntos da matemática básica;</Text>
        <Text style={styles.instructions}>3. Existem três níveis, após o nivelamento: básico, médio e avançado;</Text>
        <Text style={styles.instructions}>4. Cada nível é composto de 20, 30 e 40 perguntas, respectivamente;</Text>
        <Text style={styles.instructions}>5. Após a conclusão das fases do jogo temos algumas perguntas bônus com assuntos mais avançados da matemática;</Text>
      </View>
    </View>
  );
};

export default About;
