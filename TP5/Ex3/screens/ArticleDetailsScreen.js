/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 13:43:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// screens/ArticleDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const ArticleDetailsScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View>
      <Text>Article Details</Text>
      <Text>Title: {article.title}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default ArticleDetailsScreen;
