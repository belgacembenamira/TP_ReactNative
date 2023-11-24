/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 00:32:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = ({ onClick, onReset, onSubtract }) => {
  const [clickCount, setClickCount] = useState(0);

  const handlePress = () => {
    setClickCount(clickCount + 1);
    onClick && onClick(); 
  };

  const handleReset = () => {
    setClickCount(0);
    onReset && onReset();
  };

  const handleSubtract = () => {
    setClickCount(Math.max(0, clickCount - 1));
    onSubtract && onSubtract();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.buttonText}>{`Clics : ${clickCount}`}</Text>
      </TouchableOpacity>
      <View style={styles.additionalButtons}>
        <TouchableOpacity style={styles.subButton} onPress={handleSubtract}>
        <Text style={styles.subButtonText}>Moins</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db', // Couleur bleue
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
  },
  additionalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subButton: {
    flex: 1,
    backgroundColor: '#e74c3c', // Couleur rouge
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  subButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#95a5a6', // Couleur gris
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
