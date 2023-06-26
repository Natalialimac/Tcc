import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import CustomText from '../../CustomText';

const questions = [
  {
    images: [
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number1.png'),
        isCorrect: true
      }
    ],
    question: 'Um cesto tem @6 laranjas@ que devem ser divididas entre @5 pessoas.@ Porém, @1 laranja@ deve permanecer no cesto. Quantas laranjas cada pessoa receberá?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number3.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      }
    ],
    question: 'Ao entrar no carro, o motorista encontrou @4 passageiros.@ Depois, @2 desceram@ e @1 subiu.@ Quantas pessoas ficaram no carro?',
    questionImage: require('../../../assets/questionImages/car.png')
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number3.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: false
      }
    ],
    question: 'Um trem leva @1 hora@ para ir de uma cidade à outra, mas para voltar leva @2 horas.@ Quantas horas leva essa @viagem completa?@',
    questionImage: require('../../../assets/questionImages/train.png')
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number25.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number22.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number27.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number26.png'),
        isCorrect: false
      }
    ],
    question: 'Em um ônibus, viajam @18 passageiros@ e o motorista. Na próxima parada @descem 5@ pessoas, mas outras @13 sobem.@ Quantas pessoas ficaram no ônibus?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number9.png'),
        isCorrect: true
      }
    ],
    question: 'Um carrossel pode levar @24 crianças.@ Se @15 crianças@ já estão no carrossel, quantas ainda podem entrar?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number22.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number20.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number18.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number19.png'),
        isCorrect: false
      }
    ],
    question: 'O irmão de Luana, é @5 anos mais velho@ do que ela. O irmão de Luana tem @25 anos.@ Quantos anos Luana tem?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number30.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number50.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number20.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number40.png'),
        isCorrect: false
      }
    ],
    question: 'Em um muro, uma aranha sobe @5 metros em 10 minutos.@ Quantos metros ela consegue subir em @40 minutos?@',
    questionImage: require('../../../assets/questionImages/spider.png')
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number9.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number7.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number14.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      }
    ],
    question: 'Um casal tem @6 filhos homens@ e @cada filho tem uma irmã.@ Quantas pessoas há nessa família no total?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number15.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number10.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number30.png'),
        isCorrect: false
      }
    ],
    question: 'Luan passou @um terço do mês de abril@ na praia. Quantos dias ele passou lá?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/hours22.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/hours2.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/hours23.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/hours21.png'),
        isCorrect: false
      }
    ],
    question: 'Pedro olhou para seu despertador e disse: \"Daqui a @6 horas@ será @4 horas@ da manhã.\" A que horas Pedro olhou para o despertador?',
    questionImage: null
  },
];

const Hard = ({ navigation, route }) => {
  const { previousCorrectAnswers, previousIsCorrect, name } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState('');

  const countOk = correctAnswers + previousCorrectAnswers;

  const handleLastFeedback= ()=>{
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
    if (currentQuestion + 1 < questions.length){ 
      if(isCorrect){
        setCorrectAnswers(correctAnswers + 1);
        navigation.navigate("FeedbackYes", {name});
      }else{
        navigation.navigate("FeedbackNo", {name});
      }
      setCurrentQuestion(currentQuestion + 1);
    }

    // é a última do último nível, levar para tela diferente? "Obrigado por jogar..."
    if (currentQuestion + 1 === questions.length) { 
      if(isCorrect){
        setCorrectAnswers(correctAnswers +1);
      }
      let level = '';
        navigation.navigate("Home");
      
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
        <Animatable.View>
          <Image source={require('../../../assets/happyTony.png')} style={styles.tonyStyle} />
        </Animatable.View>

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
              <Text style={styles.questionText}><CustomText text={question.question} /></Text>
            </Balloon>
          </Animatable.View>
        </View>

        <View>
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
export default Hard;
