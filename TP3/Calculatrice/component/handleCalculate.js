/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 18/12/2023 - 22:58:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value.toString());
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
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

      <View style={styles.buttonRow}>
        {[1, 2, 3].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleButtonPress(number)}
          >
            <Text>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {[4, 5, 6].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleButtonPress(number)}
          >
            <Text>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {[7, 8, 9].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleButtonPress(number)}
          >
            <Text>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {[0, '+', '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCalculate} style={styles.calculateButton}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>

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
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  calculateButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginLeft: 5,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CalculatorApp;
