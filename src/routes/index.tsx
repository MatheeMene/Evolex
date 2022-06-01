import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import PublicNavigator from './public/publicNavigator';
import PrivateNavigator from './private/privateNavigator';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="aaa" component={PublicNavigator} />
            <Stack.Screen
                name="PrivateNavigator"
                component={PrivateNavigator}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
