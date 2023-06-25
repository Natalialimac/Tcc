import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const ChildInfoScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNext = () => {
    if (name.trim() === '' || age.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const parsedAge = parseInt(age, 10);

    if (parsedAge <= 0 || parsedAge > 15) {
      alert('A idade deve estar entre 1 e 15 anos.');
      return;
    }

    navigation.navigate('WelcomeScreen', {
      name: name,
      age: parsedAge
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.tigerText}>Olá amiguinho! Ops, {name}</Text>

      <LottieView
        source={require('../../assets/tiger.json')}
        autoPlay
        loop={true}
        style={styles.animation}
      />

      <Text style={styles.label}>Nome da criança:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da criança"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ChildInfoScreen;
