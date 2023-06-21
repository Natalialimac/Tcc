import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";

const questions = [
  { question: 'Quanto é 15 + 27?', options: ['32', '41', '42'], correctAnswer: '42' },
  { question: 'Quanto é 18 - 9?', options: ['7', '8', '9'], correctAnswer: '9' },
  { question: 'Quanto é 5 x 8?', options: ['32', '36', '40'], correctAnswer: '40' },
  { question: 'Quanto é 48 ÷ 6?', options: ['6', '7', '8'], correctAnswer: '8' },
  { question: 'Quanto é 16 + 25?', options: ['38', '41', '47'], correctAnswer: '41' },
  { question: 'Quanto é 27 - 14?', options: ['11', '13', '15'], correctAnswer: '13' },
  { question: 'Quanto é 6 x 9?', options: ['48', '50', '54'], correctAnswer: '54' },
  { question: 'Quanto é 72 ÷ 8?', options: ['7', '8', '9'], correctAnswer: '9' },
  { question: 'Quanto é 23 + 37?', options: ['58', '60', '64'], correctAnswer: '60' },
  { question: 'Quanto é 42 - 19?', options: ['21', '23', '25'], correctAnswer: '23' },
  { question: 'Quanto é 4 x 12?', options: ['42', '44', '48'], correctAnswer: '48' },
  { question: 'Quanto é 96 ÷ 8?', options: ['10', '12', '14'], correctAnswer: '12' },
  { question: 'Quanto é 35 + 29?', options: ['59', '63', '64'], correctAnswer: '64' },
  { question: 'Quanto é 53 - 29?', options: ['22', '24', '26'], correctAnswer: '24' },
  { question: 'Quanto é 7 x 11?', options: ['74', '77', '81'], correctAnswer: '77' },
  { question: 'Quanto é 88 ÷ 4?', options: ['20', '22', '24'], correctAnswer: '22' },
  { question: 'Quanto é 18 + 45?', options: ['60', '63', '67'], correctAnswer: '63' },
  { question: 'Quanto é 57 - 32?', options: ['22', '23', '25'], correctAnswer: '25' },
  { question: 'Quanto é 6 x 8?', options: ['42', '46', '48'], correctAnswer: '48' },
  { question: 'Quanto é 72 ÷ 9?', options: ['7', '8', '9'], correctAnswer: '8' },
  { question: 'Quanto é 39 + 46?', options: ['73', '80', '85'], correctAnswer: '85' },
  { question: 'Quanto é 61 - 37?', options: ['22', '24', '26'], correctAnswer: '24' },
  { question: 'Quanto é 8 x 9?', options: ['64', '72', '81'], correctAnswer: '72' },
  { question: 'Quanto é 96 ÷ 12?', options: ['7', '8', '9'], correctAnswer: '8' },
  { question: 'Quanto é 28 + 45?', options: ['63', '67', '73'], correctAnswer: '73' },
  { question: 'Quanto é 78 - 45?', options: ['22', '33', '37'], correctAnswer: '33' },
  { question: 'Quanto é 5 x 13?', options: ['55', '60', '65'], correctAnswer: '65' },
  { question: 'Quanto é 78 ÷ 6?', options: ['10', '12', '13'], correctAnswer: '13' },
  { question: 'Quanto é 41 + 58?', options: ['89', '99', '101'], correctAnswer: '99' },
  { question: 'Quanto é 83 - 55?', options: ['22', '26', '28'], correctAnswer: '28' },
];

const Medium = ({navigation}) => {
 
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
    
      if (correctAnswers == 8) {
        navigation.navigate("Hard")
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

export default Medium;
