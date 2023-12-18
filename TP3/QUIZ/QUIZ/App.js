/**
 * @description      : Application principale avec un design amélioré
 * @author           : belgacem
 * @group            : 
 * @created          : 18/12/2023 - 22:39:44
 * 
 * MODIFICATION LOG
 * - Version         : 1.1.0
 * - Date            : 18/12/2023
 * - Author          : belgacem
 * - Modification    : Amélioration du design
**/

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Quiz from './component/Quiz';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.content}>
        <Quiz />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '80%', // Ajustez selon vos besoins
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
