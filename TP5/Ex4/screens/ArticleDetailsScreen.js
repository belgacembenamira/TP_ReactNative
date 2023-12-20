/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 14:21:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// screens/ArticleDetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ArticleDetailsScreen = ({ route, navigation }) => {
  const { articleTitle } = route.params;

  return (
    <View>
      <Text>Article Details Screen</Text>
      <Text>Title: {articleTitle}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ArticleDetailsScreen;
