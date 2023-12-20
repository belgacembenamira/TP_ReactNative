/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 12:54:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { View, Text } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View>
      <Text>Détails de l'Article</Text>
      <Text>ID: {article.id}</Text>
      <Text>Titre: {article.title}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default ArticleDetailScreen;
