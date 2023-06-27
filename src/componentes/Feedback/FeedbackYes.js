import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const FeedbackYes = ({ navigation, route }) => {
    const { name } = route.params;

    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current.play();
    }, []);

    const handleTextToSpeech = (text) => {
        Speech.speak(text, { language: 'pt-BR' });
    };

    return (
        <View style={styles.container}>
            <LottieView
                ref={animationRef}
                source={require('../../assets/celebrations.json')}
                style={styles.animation}
                loop={true}
            />
            <TouchableOpacity
                onPress={() => handleTextToSpeech('Parabéns! Você foi incrível! Vamos continuar?')}
                style={styles.audioIcon}
            >
                <FontAwesome5 name="volume-up" size={24} color="white" />
            </TouchableOpacity>
            <Animatable.View>
                <Text style={styles.title}>Parabéns!</Text>
                <Text style={styles.message}>Muito bem {name}, você foi incrível! Vamos continuar.</Text>
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

export default FeedbackYes;
