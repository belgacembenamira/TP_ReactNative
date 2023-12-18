/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 18/12/2023 - 22:42:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// components/Question.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Question = ({ questionData, onAnswer }) => {
  const { question, correctAnswer } = questionData;

  return (
    <View>
      <Text>{question}</Text>
      <Button title="Correct" onPress={() => onAnswer(true)} />
      <Button title="Incorrect" onPress={() => onAnswer(false)} />
    </View>
  );
};

export default Question;

