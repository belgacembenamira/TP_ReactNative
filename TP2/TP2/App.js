/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 00:27:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from './components/Ex2/CustomButton';

const App = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage(''); 
  };

  return (
    <View style={styles.container}>
      <CustomButton onClick={handleButtonClick} />
      <View style={styles.messageContainer}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  messageContainer: {
    marginTop: 20,
  },
});

export default App;
