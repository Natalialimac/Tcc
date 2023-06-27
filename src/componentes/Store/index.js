import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, Dimensions } from 'react-native';
import * as Speech from 'expo-speech';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

const Store = ({ navigation, route }) => {
  //const { correctAnswers: previousCorrectAnswers } = route.params;
  const previousCorrectAnswers = 5;
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play();
  }, []);

  const handleTextToSpeech = (text) => {
    Speech.speak(text, { language: 'pt-BR' });
  };

  const itemImageWidth = Dimensions.get('window').width * 0.6;

  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{previousCorrectAnswers}</Text>
        <LottieView source={require('../../assets/star.json')} style={styles.lottieAnimation} autoPlay loop />
      </View>
      <Text style={styles.storeTitle}>Loja</Text>

      <TouchableOpacity
        onPress={() => handleTextToSpeech('Olá amiguinho, Clique nos itens para desbloquear. Lembrando que precisam ter uma quantidade de pontos!')}
        style={styles.audioIcon}
      >
        <FontAwesome5 name="volume-up" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity>
          <View style={styles.itemContainer}>
            <LottieView
              source={require('../../assets/avatar2.json')}
              autoPlay
              loop
              style={[styles.itemImage, { width: itemImageWidth }]}
              ref={animationRef}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Desbloquear Chapéu</Text>
              <Text style={styles.itemStars}>Requer 100 estrelas</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemContainer}>
            <LottieView
              source={require('../../assets/avatar3.json')}
              autoPlay
              loop
              style={[styles.itemImage, { width: itemImageWidth }]}
              ref={animationRef}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Desbloquear Camisa</Text>
              <Text style={styles.itemStars}>Requer 200 estrelas</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemContainer}>
            <LottieView
              source={require('../../assets/avatar4.json')}
              autoPlay
              loop
              style={[styles.itemImage, { width: itemImageWidth }]}
              ref={animationRef}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}> Desbloquear Avatar</Text>
              <Text style={styles.itemStars}>Requer 50 estrelas</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Store;
