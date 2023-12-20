/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 13:45:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import TabScreen from './screens/TabScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#007BFF', // Set your desired active tab color
          inactiveTintColor: 'gray', // Set your desired inactive tab color
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home', // Customize the tab label
            // Add other tab options if needed
          }}
        />
        <Tab.Screen
          name="TabScreen"
          component={TabScreen}
          options={{
            tabBarLabel: 'Tab', // Customize the tab label
            // Add other tab options if needed
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
