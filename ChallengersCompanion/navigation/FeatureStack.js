import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CMStartScreen from '../screens/ChampionMatching/CMStartScreen';
import CMTemplate from '../screens/ChampionMatching/CMCardTemplate';
import CMResult from '../screens/ChampionMatching/CMResult';
import ExternalGuideScreen from '../screens/ExternalGuideScreen';

const Stack = createNativeStackNavigator();

const FeatureStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CMStartScreen" component={CMStartScreen} />
      <Stack.Screen name="CMCardTemplate" component={CMTemplate} />
      <Stack.Screen name='CMResult' component={CMResult} />
      <Stack.Screen name='ExternalGuideScreen' component={ExternalGuideScreen} />
    </Stack.Navigator>
  );
};

export default FeatureStack;