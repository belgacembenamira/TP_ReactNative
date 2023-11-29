/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/11/2023 - 11:08:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Question = ({ question, onAnswer }) => {
  return (
    <View style={styles.questionContainer}>
      <ToastManager />
      <Text style={styles.questionText}>{question}</Text>
      <TouchableOpacity onPress={() => onAnswer(true)} style={styles.buttonCorrect}>
        <Text>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onAnswer(false)} style={styles.buttonIncorrect}>
        <Text>Incorrect</Text>
      </TouchableOpacity>
    </View>
  );
};

const Quiz = () => {
  const questions = [
    { id: 1, text: 'React Native est un framework de développement mobile.', correct: true },
    { id: 2, text: 'JavaScript est un langage de programmation.', correct: true },
    { id: 3, text: 'Le café est une boisson chaude.', correct: true },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Fin du quiz, affichez le score
      alert(`Votre score : ${score}/${questions.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Question
        question={questions[currentQuestion].text}
        onAnswer={handleAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonCorrect: {
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
  },
  buttonIncorrect: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 10,
  },
});

export default Quiz;
