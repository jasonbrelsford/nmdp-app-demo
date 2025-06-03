import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import FeedScreen from './src/screens/FeedScreen';
import MatchProbabilityScreen from './src/screens/MatchProbabilityScreen';
import EducationScreen from './src/screens/EducationScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Feed" 
          component={FeedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MatchProbability" 
          component={MatchProbabilityScreen}
          options={{ title: 'Your Match Probability' }}
        />
        <Stack.Screen 
          name="Education" 
          component={EducationScreen}
          options={{ title: 'Learn More' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'Your Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}