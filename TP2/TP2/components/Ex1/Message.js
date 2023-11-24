/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 00:01:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Message = () => {
  return <Text style={styles.text}>Bonjour, monde !</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 24,
  },
});

export default Message;
