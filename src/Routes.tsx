import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home/Home';
import SpeakGame from './components/SpeakGame/SpeakGame';
import InstructionScreen from './components/InstructionScreen/InstructionScreen';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
            <Stack.Screen options={{ headerShown: false }} name='SpeakGame' component={SpeakGame} />
            <Stack.Screen options={{ headerShown: false }} name='InstructionScreen' component={InstructionScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
