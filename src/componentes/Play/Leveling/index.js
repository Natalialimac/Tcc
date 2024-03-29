import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import * as Animatable from 'react-native-animatable';
import CustomText from '../../CustomText';
import LottieView from 'lottie-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const questions = [
  {
    images: [
      {
        source: require('../../../assets/buttons/number1.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @4 + 4 ?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/symbol_div.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/symbol_equals.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/symbol_x.png'),
        isCorrect: false
      }
    ],
    question: 'Oi amiguinho, @clique no símbolo da divisão'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number1.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @4 - 3 ?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number1.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é @4 - 2 ?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number9.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @8 ÷ 2?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/fingers5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/fingers3.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/fingers7.png'),
        isCorrect: true
      }
    ],
    question: 'Qual @número vem depois de 6?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number19.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number16.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @3 × 4 + 4 ?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/fingers1.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/fingers3.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/fingers5.png'),
        isCorrect: false
      }
    ],
    question: 'Clique na mão com o @número 3'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number14.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number19.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @5 × 5 - 6?'
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é @20 ÷ 10 × 2 ?'
  },
];

const Leveling = ({ navigation, route }) => {
  const { name } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState('');

  const handleTextToSpeech = (text) => {
    const sanitizedText = text.replace(/@/g, '');
    Speech.speak(sanitizedText, { language: 'pt-BR' });
  };

  const handleAnswer = (isCorrect) => {
    //não é a última
    if (currentQuestion + 1 < questions.length) {
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
        navigation.navigate("FeedbackYes", { name });
      } else {
        navigation.navigate("FeedbackNo", { name });
      }


    }

    // é a última
    if (currentQuestion + 1 === questions.length) {
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
      }

      let level = '';
      if (correctAnswers >= 8) {
        navigation.navigate("Hard", { previousCorrectAnswers: correctAnswers, previousIsCorrect: isCorrect, name: name });

      } else if (correctAnswers >= 5 && correctAnswers < 8) {
        navigation.navigate("Medium", { previousCorrectAnswers: correctAnswers, previousIsCorrect: isCorrect, name: name });
      } else if (correctAnswers >= 0 && correctAnswers < 5) {
        navigation.navigate("Easy", { previousCorrectAnswers: correctAnswers, previousIsCorrect: isCorrect, name: name });
      } else {
        level = 'Nível não alcançado';
      }
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion < questions.length) {
    }
  }, [currentQuestion]);

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    //const imagesContainerStyle = currentQuestion % 2 === 0 ? styles.imagesContainer : styles.imagesContainerAlt;

    return (
      <View style={styles.container}>
        {/* Componente para exibir a contagem de pontos */}
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{correctAnswers}</Text>
          <LottieView source={require('../../../assets/star.json')} style={styles.lottieAnimation} autoPlay loop />
        </View>
      <View style={styles.tonyBaloonContainer}>
        <View style={styles.balloon}>
          <Animatable.View>
            <Balloon
              borderColor="#2E86C1"
              backgroundColor="#D6EAF8"
              borderWidth={2}
              borderRadius={20}
              triangleSize={15}
              triangleDirection='bottom'
              triangleOffset='23%'
            >
              <TouchableOpacity
                onPress={() => handleTextToSpeech(question.question)}
                style={styles.audioIcon}
              >
                <FontAwesome5 name="volume-up" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.questionText}><CustomText text={question.question} /></Text>
            </Balloon>
          </Animatable.View>
        </View>

        <Animatable.View style={styles.tonyContainer}>
          <Image source={require('../../../assets/happyTony.png')} style={styles.tonyStyle} />
        </Animatable.View>
        </View>
        <View style={styles.imagesContainer}>
          {question.images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageButton}
              onPress={() => handleAnswer(image.isCorrect)}
            >
              <Animatable.View>
                <Image source={image.source} style={styles.image} />
              </Animatable.View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  return null;
};

export default Leveling;
