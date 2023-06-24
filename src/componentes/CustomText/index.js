import React from 'react';
import { Text } from 'react-native-animatable';

const CustomText = (props) => {
    const arr = props.text.split(' ');
     const reducer = (acc, cur) => {
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

export default CustomText;
