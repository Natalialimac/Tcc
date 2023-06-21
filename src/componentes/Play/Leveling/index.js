import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import * as Animatable from 'react-native-animatable';

//10 questões
const questions = [
  {
    images: [
      {
        source: require('../../../assets/number1.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/number8.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/number2.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é 4 + 4 ?'
  },
  {
    images: [
      {
        source: require('../../../assets/number1.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/number2.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é 4 - 3 ?'
  },
  {
    images: [
      {
        source: require('../../../assets/number1.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/number2.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é 4 - 2 ?'
  },
  // Adicione outras perguntas com imagens e respostas corretas correspondentes
];

const Leveling = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState('');

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setAnswerFeedback('Parabéns! Você acertou!');
    } else {
      setAnswerFeedback('Ops! Você errou!');
    }

    if (currentQuestion + 1 === questions.length) {
      let level = '';

      if (correctAnswers >= 8) {
        navigation.navigate("Hard");
      } else if (correctAnswers >= 5) {
        navigation.navigate("Medium");
      } else if (correctAnswers >= 2) {
        navigation.navigate("Easy");
      } else {
        level = 'Nível não alcançado';
      }
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];

    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeIn" duration={3000}>
          <Image source={require('../../../assets/happyTony.png')} style={styles.tonyStyle} />
        </Animatable.View>

        <View style={styles.balloon}>
          <Animatable.View animation="fadeIn" duration={5000}>
            <Balloon
              borderColor="#2E86C1"
              backgroundColor="#D6EAF8"
              borderWidth={2}
              borderRadius={20}
              triangleSize={15}
              triangleDirection='bottom'
              triangleOffset='23%'
            >
              <Text style={styles.questionText}>{question.question}</Text>
            </Balloon>
          </Animatable.View>
        </View>

        <View style={styles.imagesContainer}>
          {question.images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageButton}
              onPress={() => handleAnswer(image.isCorrect)}
            >
              <Animatable.View animation="bounceIn" duration={2000}>
                <Image source={image.source} style={styles.image} />
              </Animatable.View>
            </TouchableOpacity>
          ))}
        </View>

        {answerFeedback !== '' && (
          <Animatable.View animation="fadeIn" duration={2000}>
            <Text style={styles.feedbackText}>{answerFeedback}</Text>
          </Animatable.View>
        )}
      </View>
    );
  }

  return null;
};

export default Leveling;
