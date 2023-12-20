/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 12:53:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const articlesData = [
  { id: '1', title: 'Article 1' },
  { id: '2', title: 'Article 2' },
  { id: '3', title: 'Article 3' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Liste des Articles</Text>
      <FlatList
        data={articlesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="Voir les détails"
              onPress={() => navigation.navigate('ArticleDetail', { article: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
