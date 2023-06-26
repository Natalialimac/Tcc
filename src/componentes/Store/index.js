import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, Dimensions } from 'react-native';
import * as Speech from 'expo-speech';
import LottieView from 'lottie-react-native';
import styles from './styles';

const Store = ({ navigation, route }) => {
  //const { correctAnswers: previousCorrectAnswers } = route.params;
  const previousCorrectAnswers = 5;
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play();
  }, []);

  const unlockAvatar = () => {
    // Lógica para desbloquear o avatar
  };

  const unlockGlasses = () => {
    // Lógica para desbloquear os óculos
  };

  const speakText = (text) => {
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

      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity onPress={unlockAvatar}>
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

        <TouchableOpacity onPress={unlockGlasses}>
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

        <TouchableOpacity onPress={() => speakText('Clique para desbloquear o avatar')}>
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
