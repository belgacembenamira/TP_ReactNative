/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 13:43:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const articles = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' },
  // Add more articles as needed
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ArticleDetails', { article: item })}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return <FlatList data={articles} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />;
};

export default HomeScreen;
