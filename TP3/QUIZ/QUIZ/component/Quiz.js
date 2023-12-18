/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 18/12/2023 - 22:43:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// components/Quiz.js
import React, { useState } from 'react';
import { View } from 'react-native';
import Question from './Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    const questionsData = [
        {
          question: 'JavaScript est principalement utilisé pour le développement web côté client.',
          correctAnswer: true,
        },
        {
          question: 'SQL est un acronyme qui désigne un langage de requête utilisé pour interagir avec des bases de données.',
          correctAnswer: true,
        },
        {
          question: 'HTTPS est une méthode de sécurité utilisée pour empêcher les attaques de type injection SQL.',
          correctAnswer: false,
        },
        // Ajoutez plus de questions selon vos besoins
      ];
      

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // End of the quiz, show the score
      showScore();
    }
  };

  const showScore = () => {
    toast.success(`Quiz completed! Your score is ${score}/${questionsData.length}`);
  };

  return (
    <View>
      <Question
        questionData={questionsData[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      <ToastContainer />
    </View>
  );
};

export default Quiz;
