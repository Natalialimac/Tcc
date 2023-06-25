import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const FeedbackYes = ({ navigation }) => {
    useEffect(() => {
        this.animation.play();
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../../assets/celebrations.json')}
                style={styles.animation}
                loop={true}
            />
            <Animatable.View animation="fadeIn" duration={5000}>

                <Text style={styles.title}>Parabéns!</Text>
                <Text style={styles.message}>Muito bem, você foi incrível! Vamos continuar.</Text>
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
