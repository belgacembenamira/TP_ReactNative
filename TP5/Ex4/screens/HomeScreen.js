/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 14:21:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const bounceValue = new Animated.Value(1);

  const handleButtonPress = () => {
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 1.2, duration: 100, easing: Easing.linear, useNativeDriver: true }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start(() => {
      navigation.navigate('ArticleDetails', { articleTitle: 'Sample Article' });
    });
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
        <Button
          title="Go to Article Details"
          onPress={handleButtonPress}
          icon={() => <FontAwesome name="arrow-left" size={20} color="black" />}
        />
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
