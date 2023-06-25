import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const FeedbackNo = ({ navigation }) => {
  useEffect(() => {
    this.animation.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../../assets/celebrationsNo.json')}
        style={styles.animation}
        loop={true}
      />
      <Animatable.View animation="fadeIn" duration={5000}>

        <Text style={styles.title}>Olá, amiguinho! Você está sendo muito incrível. Porém, desta vez você errou.</Text>
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
