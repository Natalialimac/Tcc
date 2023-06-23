import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Balloon from "react-native-balloon";
import * as Animatable from 'react-native-animatable';

/*const questions = [
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
];*/

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
    question: 'Toque na bolinha onde aparecem @4 @maçãs.',
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
    question: 'Quanto é @6 @+ @10?',
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
    question: 'Quanto é @10 @+ @4?',
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
        source: require('../../../assets/buttons/number11.png'),
        isCorrect: true
      }
    ],
    question: 'Quantas @rodas tem uma bicicleta?',
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
    question: 'Quanto é @3 @+ @8?',
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
        isCorrect: true
      }
    ],
    question: 'Quanto é @8 @+ @4?',
    questionImage: null
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
      } else if (correctAnswers >= 1) {
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

export default Easy;
