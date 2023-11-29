/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/11/2023 - 10:38:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorApp from './component/handleCalculate';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <CalculatorApp/>
    
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
