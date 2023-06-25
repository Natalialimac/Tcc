import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const questions = [
  { question: 'Quanto é 367 + 529?', options: ['796', '876', '896'], correctAnswer: '896' },
  { question: 'Quanto é 983 - 459?', options: ['524', '524', '524'], correctAnswer: '524' },
  { question: 'Quanto é 27 x 54?', options: ['1458', '1478', '1568'], correctAnswer: '1458' },
  { question: 'Quanto é 641 ÷ 23?', options: ['27', '28', '29'], correctAnswer: '27' },
  { question: 'Quanto é 865 + 329?', options: ['1194', '1196', '1198'], correctAnswer: '1194' },
  { question: 'Quanto é 724 - 384?', options: ['340', '340', '340'], correctAnswer: '340' },
  { question: 'Quanto é 36 x 79?', options: ['2844', '2894', '2964'], correctAnswer: '2844' },
  { question: 'Quanto é 1152 ÷ 16?', options: ['64', '68', '72'], correctAnswer: '72' },
  { question: 'Quanto é 238 + 496?', options: ['724', '734', '744'], correctAnswer: '734' },
  { question: 'Quanto é 689 - 267?', options: ['422', '422', '422'], correctAnswer: '422' },
  { question: 'Quanto é 46 x 78?', options: ['3588', '3588', '3588'], correctAnswer: '3588' },
  { question: 'Quanto é 2104 ÷ 28?', options: ['74', '74', '74'], correctAnswer: '74' },
  { question: 'Quanto é 897 + 642?', options: ['1539', '1559', '1579'], correctAnswer: '1539' },
  { question: 'Quanto é 871 - 354?', options: ['517', '517', '517'], correctAnswer: '517' },
  { question: 'Quanto é 53 x 86?', options: ['4558', '4558', '4558'], correctAnswer: '4558' },
  { question: 'Quanto é 2584 ÷ 19?', options: ['136', '136', '136'], correctAnswer: '136' },
  { question: 'Quanto é 438 + 932?', options: ['1370', '1370', '1370'], correctAnswer: '1370' },
  { question: 'Quanto é 749 - 536?', options: ['213', '213', '213'], correctAnswer: '213' },
  { question: 'Quanto é 49 x 72?', options: ['3528', '3528', '3528'], correctAnswer: '3528' },
  { question: 'Quanto é 2156 ÷ 28?', options: ['77', '77', '77'], correctAnswer: '77' },
  { question: 'Quanto é 638 + 942?', options: ['1580', '1580', '1580'], correctAnswer: '1580' },
  { question: 'Quanto é 593 - 228?', options: ['365', '365', '365'], correctAnswer: '365' },
  { question: 'Quanto é 84 x 91?', options: ['7664', '7664', '7664'], correctAnswer: '7664' },
  { question: 'Quanto é 3142 ÷ 23?', options: ['136', '136', '136'], correctAnswer: '136' },
  { question: 'Quanto é 837 + 1279?', options: ['2116', '2116', '2116'], correctAnswer: '2116' },
  { question: 'Quanto é 957 - 378?', options: ['579', '579', '579'], correctAnswer: '579' },
  { question: 'Quanto é 69 x 98?', options: ['6762', '6762', '6762'], correctAnswer: '6762' },
  { question: 'Quanto é 3925 ÷ 25?', options: ['157', '157', '157'], correctAnswer: '157' },
  { question: 'Quanto é 578 + 1843?', options: ['2421', '2421', '2421'], correctAnswer: '2421' },
  { question: 'Quanto é 763 - 447?', options: ['316', '316', '316'], correctAnswer: '316' },
  { question: 'Quanto é 67 x 77?', options: ['5159', '5159', '5159'], correctAnswer: '5159' },
  { question: 'Quanto é 2676 ÷ 18?', options: ['148', '148', '148'], correctAnswer: '148' },
  { question: 'Quanto é 937 + 1756?', options: ['2693', '2693', '2693'], correctAnswer: '2693' },
  { question: 'Quanto é 1321 - 656?', options: ['665', '665', '665'], correctAnswer: '665' },
  { question: 'Quanto é 87 x 95?', options: ['8265', '8265', '8265'], correctAnswer: '8265' },
  { question: 'Quanto é 4212 ÷ 14?', options: ['301', '301', '301'], correctAnswer: '301' },
  { question: 'Quanto é 872 + 2187?', options: ['3059', '3059', '3059'], correctAnswer: '3059' },
  { question: 'Quanto é 1239 - 872?', options: ['367', '367', '367'], correctAnswer: '367' },
  { question: 'Quanto é 74 x 88?', options: ['6512', '6512', '6512'], correctAnswer: '6512' },
  { question: 'Quanto é 4862 ÷ 17?', options: ['286', '286', '286'], correctAnswer: '286' },
  { question: 'Quanto é 912 + 2436?', options: ['3348', '3348', '3348'], correctAnswer: '3348' },
  { question: 'Quanto é 1945 - 786?', options: ['1159', '1159', '1159'], correctAnswer: '1159' },
];

const Hard = ({ navigation, route }) => {
  const { correctAnswers: previousCorrectAnswers } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState('');

  const countOk = correctAnswers + previousCorrectAnswers;

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      navigation.navigate("FeedbackYes");
    } else {
      navigation.navigate("FeedbackNo");
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
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{countOk}</Text>
          <LottieView source={require('../../../assets/star.json')} style={styles.lottieAnimation} autoPlay loop />
        </View>
        <Animatable.View animation="fadeIn" duration={1000}>
          <Image source={require('../../../assets/happyTony.png')} style={styles.tonyStyle} />
        </Animatable.View>

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

export default Hard;
