/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/11/2023 - 10:38:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input); // Utilisation de eval() pour évaluer l'expression
      setResult(`Résultat : ${calculatedResult}`);
    } catch (error) {
      setResult('Erreur de calcul');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre calcul"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity onPress={handleCalculate} style={styles.calculateButton}>
        <Text>Calculer</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  calculateButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CalculatorApp;
