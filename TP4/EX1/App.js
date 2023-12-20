/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 11:06:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CommandeForm from './components/CommandeForm';
export default function App() {
  return (
    <View style={styles.container}>
      <CommandeForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
