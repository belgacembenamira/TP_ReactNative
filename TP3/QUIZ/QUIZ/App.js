/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/11/2023 - 09:00:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from './component/Quiz';

export default function App() {
  return (
    <View style={styles.container}>
   
      <StatusBar style="auto" />
      <Quiz/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
