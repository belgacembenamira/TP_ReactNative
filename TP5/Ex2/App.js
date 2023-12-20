/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 12:54:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Liste des Articles' }} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} options={{ title: 'Détails de l\'Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
