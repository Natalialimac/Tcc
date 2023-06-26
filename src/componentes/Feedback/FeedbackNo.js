import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const FeedbackNo = ({ navigation, route }) => {
  const { name } = route.params;

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/celebrationsNo.json')}
        style={styles.animation}
        loop={true}
      />
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
