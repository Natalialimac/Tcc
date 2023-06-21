import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";

const questions = [
  { question: 'Quanto é 7 + 5?', options: ['10', '11', '12'], correctAnswer: '12' },
  { question: 'Quanto é 10 - 2?', options: ['6', '7', '8'], correctAnswer: '8' },
  { question: 'Quanto é 3 x 4?', options: ['9', '10', '12'], correctAnswer: '12' },
  { question: 'Quanto é 18 ÷ 3?', options: ['4', '6', '8'], correctAnswer: '6' },
  { question: 'Quanto é 9 + 6?', options: ['13', '14', '15'], correctAnswer: '15' },
  { question: 'Quanto é 5 - 1?', options: ['2', '3', '4'], correctAnswer: '4' },
  { question: 'Quanto é 2 x 7?', options: ['12', '13', '14'], correctAnswer: '14' },
  { question: 'Quanto é 15 ÷ 5?', options: ['2', '3', '4'], correctAnswer: '3' },
  { question: 'Quanto é 11 + 9?', options: ['18', '19', '20'], correctAnswer: '20' },
  { question: 'Quanto é 16 - 8?', options: ['6', '7', '8'], correctAnswer: '8' },
  { question: 'Quanto é 2 + 3?', options: ['4', '5', '6'], correctAnswer: '5' },
  { question: 'Quanto é 10 - 5?', options: ['3', '4', '5'], correctAnswer: '5' },
  { question: 'Quanto é 4 x 3?', options: ['9', '10', '12'], correctAnswer: '12' },
  { question: 'Quanto é 18 ÷ 6?', options: ['2', '3', '4'], correctAnswer: '3' },
  { question: 'Quanto é 7 + 7?', options: ['12', '13', '14'], correctAnswer: '14' },
  { question: 'Quanto é 9 - 3?', options: ['4', '5', '6'], correctAnswer: '6' },
  { question: 'Quanto é 3 x 5?', options: ['13', '15', '17'], correctAnswer: '15' },
  { question: 'Quanto é 20 ÷ 5?', options: ['2', '4', '5'], correctAnswer: '4' },
  { question: 'Quanto é 8 + 6?', options: ['12', '13', '14'], correctAnswer: '14' },
  { question: 'Quanto é 15 - 7?', options: ['7', '8', '9'], correctAnswer: '8' },
];


const Easy = ({navigation}) => {
 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState('');

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      setAnswerFeedback('Parabéns! Você acertou!');
    } else {
      setAnswerFeedback('Ops! Você errou!');
    }

    if (currentQuestion + 1 === questions.length) {
      let level = '';
    
      if (correctAnswers >= 8) {
        navigation.navigate("Hard")
      } else if (correctAnswers >= 5) {
        navigation.navigate("Medium")
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
        <Image source={require('../../../assets/happyTony.png')} style={styles.tonyStyle}/>
        
        <View style={styles.balloon}>
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
        </View>
        
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        {answerFeedback !== '' && <Text style={styles.feedbackText}>{answerFeedback}</Text>}
      </View>
    );
  }

  return null;
};

export default Easy;
