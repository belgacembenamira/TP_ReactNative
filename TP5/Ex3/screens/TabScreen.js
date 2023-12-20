/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 13:44:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// screens/TabScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tab Content</Text>
      <Text style={styles.subheading}>Add more content for the tab screen as needed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: 'gray',
  },
});

export default TabScreen;
