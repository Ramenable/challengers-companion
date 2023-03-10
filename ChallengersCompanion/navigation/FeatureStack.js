import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CMStartScreen from '../screens/ChampionMatching/CMStartScreen';
import CMTemplate from '../screens/ChampionMatching/CMCardTemplate';

const Stack = createNativeStackNavigator();

const FeatureStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CMStartScreen" component={CMStartScreen} />
      <Stack.Screen name="CMQ1" component={CMTemplate} />
    </Stack.Navigator>
  );
};

export default FeatureStack;