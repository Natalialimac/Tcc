import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import * as Animatable from 'react-native-animatable';

// 10 questões
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
    question: 'Quanto é 4 + 4 ?'
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
    question: 'Oi amiguinho, clique no símbolo da divisão'
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
    question: 'Quanto é 4 - 3 ?'
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
    question: 'Quanto é 4 - 2 ?'
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
    question: 'Quanto é 4 - 2 ?'
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
    question: 'Quanto é 4 - 2 ?'
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
    question: 'Quanto é 4 - 2 ?'
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
    question: 'Quanto é 4 - 2 ?'
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
    question: 'Quanto é 4 - 2 ?'
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
    question: 'Quanto é 4 - 2 ?'
  },
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

  useEffect(() => {
    if (currentQuestion < questions.length) {
    }
  }, [currentQuestion]);

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    const imagesContainerStyle = currentQuestion % 2 === 0 ? styles.imagesContainer : styles.imagesContainerAlt;

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

        <View style={imagesContainerStyle}>
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
