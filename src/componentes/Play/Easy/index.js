import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import * as Animatable from 'react-native-animatable';

const questions = [
  {
    images: [
      {
        source: require('../../../assets/buttons/4_macas.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/uva.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/3_limoes.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/2_macas.png'),
        isCorrect: false
      }
    ],
    question: 'Toque na bolinha onde aparecem @4 maçãs.',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number16.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number18.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number10.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @6 + 10?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number18.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number15.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number13.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number14.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é @10 + 4?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number9.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number7.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: true
      }
    ],
    question: 'Quantas @rodas@ tem uma bicicleta?',
    questionImage: require('../../../assets/questionImages/bicicleta.png')
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number9.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number7.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é @3 + 8?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number19.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number12.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number17.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @8 + 4?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/fingers1.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/fingers7.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/fingers5.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/fingers3.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @7 - 8?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number11.png'),
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
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: true
      }
    ],
    question: 'Quanto é @9 - 3?',
    questionImage: null
  },
  {
    images: [
      {
        source: require('../../../assets/buttons/number6.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number5.png'),
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number2.png'),
        isCorrect: false
      }
    ],
    question: 'Quanto é @7 - 2?',
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
        isCorrect: true
      },
      {
        source: require('../../../assets/buttons/number8.png'),
        isCorrect: false
      },
      {
        source: require('../../../assets/buttons/number4.png'),
        isCorrect: false
      }
    ],
    question: 'Quantas @pétalas@ tem a flor?',
    questionImage: require('../../../assets/buttons/flower.png')
  }
  // Adicione outras perguntas com imagens e respostas corretas correspondentes
];


const Easy = ({navigation}) => {
 
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
        navigation.navigate("Hard")
      } else if (correctAnswers >= 4) {
        navigation.navigate("Medium")
      } else {
        level = 'Nível não alcançado';
      }
    }
    
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];

    //Formata a dica em vermelho identificando palavras que começam com @
    const CustomText = (props) => {
      const arr = props.text.split(' ');
       const reducer = (acc, cur, index) => {
         let previousVal = acc[acc.length - 1];
         if (
           previousVal &&
           previousVal.startsWith('@') &&
           !previousVal.endsWith('@')
         ) {
           acc[acc.length - 1] = previousVal + ' ' + cur;
         } else {
           acc.push(cur);
         }
         return acc;
       };
     
       const text = arr.reduce(reducer, []);
     
       return (
         <Text>
           {text.map((text) => {
             if (text.startsWith('@')) {
               return (
                 <Text style={{color: '#FF0000' }}>
                   {text.replaceAll('@', '')}{' '}
                 </Text>
               );
             }
             return `${text} `;
           })}
         </Text>
       );
     };

     const QuestionHasImage = ()=>{
      if (question.questionImage != null){
        return <Image source={question.questionImage} style={styles.questionImage}></Image>
      }else{
        return null;
      }
     }
     const imagesContainerStyle = question.questionImage == null ? styles.imagesContainer : styles.imagesContainerAlt;
    return (
      <View style={styles.container}>
         <Animatable.View animation="fadeIn" duration={3000}>
          <Image source={require('../../../assets/happyTony.png')} style={styles.tonyStyle}/>
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
          <Text style={styles.questionText}><CustomText text= {question.question}/></Text>
          </Balloon>
          </Animatable.View>
        </View>
        
        <View>
          <QuestionHasImage/>
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

export default Easy;
