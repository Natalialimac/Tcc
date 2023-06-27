import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import * as Animatable from 'react-native-animatable';
import CustomText from '../../CustomText';
import * as Speech from 'expo-speech';
import LottieView from 'lottie-react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const questions = [
  {
    images: [
      {
        source: require('../../../assets/buttons/number10.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      }
    ],
    question: 'Se eu tiver @20 lápis@ e @der 10 lápis@ para minha amiga, quantos lápis sobram?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      }
    ],
    question: 'Eu tinha @7 bonecas@ e @dei 1@ para Ana, com quantas bonecas eu fiquei?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number10.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number9.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: true
      }
    ],
    question: 'Qual é o @dobro de 4?',
    questionImage: null
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
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: false
      }
    ],
    question: 'Qual é a @metade de 12?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number13.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number14.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number15.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number17.png'),
        isCorrect: false
      }
    ],
    question: 'Pedro tinha @5 jujubas@ e @ganhou mais 10@ de sua mãe. Quantas jujubas Pedro tem agora?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/symbol_x.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/symbol_equals.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/symbol_m.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/symbol_div.png'),
        isCorrect: true
      }
    ],
    question: 'Qual é o símbolo da @divisão?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @10 ÷ 2?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number3.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é @9 ÷ 3?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number15.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number13.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number19.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number16.png'),
        isCorrect: false
      }
    ],
    question: 'Se você tem @7 carrinhos@ e @ganha mais 8,@ com quantos carrinhos você fica?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number3.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: true
      }
    ],
    question: 'Quantos @lados@ tem um quadrado?',
    questionImage: require('../../../assets/questionImages/square.png')
  },
];

const Medium = ({ navigation, route }) => {
  const { previousCorrectAnswers, previousIsCorrect, name } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState('');

  var countOk = correctAnswers + previousCorrectAnswers;

  const handleTextToSpeech = (text) => {
    const sanitizedText = text.replace(/@/g, '');
    Speech.speak(sanitizedText, { language: 'pt-BR' });
  };

  const handleLastFeedback = () => {
    if (currentQuestion == 0) {
      if (previousIsCorrect) {
        navigation.navigate("FeedbackYes", { name });
      } else {
        navigation.navigate("FeedbackNo", { name });
      }
    }
  }

  useEffect(() => {
    handleLastFeedback();

  })

  const handleAnswer = (isCorrect) => {
    //não é a última
    if (currentQuestion + 1 < questions.length) {
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
        navigation.navigate("FeedbackYes", { name });
      } else {
        navigation.navigate("FeedbackNo", { name });
      }
      setCurrentQuestion(currentQuestion + 1);
    }

    // é a última
    if (currentQuestion + 1 === questions.length) {
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
        countOk = countOk + 1;
      }
      let level = '';

      if (correctAnswers >= 6) {
        navigation.navigate("Hard", { previousCorrectAnswers: countOk, previousIsCorrect: isCorrect, name: name });

      } else {
        setCurrentQuestion(0);
        //navigation.navigate("Medium", { previousCorrectAnswers: correctAnswers, previousIsCorrect: isCorrect, name: name });
      }
    }


  };

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    const QuestionHasImage = () => {
      if (question.questionImage != null) {
        return <Image source={question.questionImage} style={styles.questionImage}></Image>
      } else {
        return null;
      }
    }
    const imagesContainerStyle = question.questionImage == null ? styles.imagesContainer : styles.imagesContainerAlt;

    return (
      <View style={styles.container}>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{countOk}</Text>
          <LottieView source={require('../../../assets/star.json')} style={styles.lottieAnimation} autoPlay loop />
        </View>

        <View style={styles.tonyBaloonContainer}>
          <View style={styles.balloon}>
            <Animatable.View>
              <Balloon
                borderColor="#2E86C1"
                backgroundColor="#D6EAF8"
                width={"85%"}
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

        <View style={styles.questionImageContainer}>
          <QuestionHasImage />
        </View>

        <View style={imagesContainerStyle}>
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

        {answerFeedback !== '' && (
          <Animatable.View>
            <Text style={styles.feedbackText}>{answerFeedback}</Text>
          </Animatable.View>
        )}
      </View>
    );
  }

  return null;
};

export default Medium;
