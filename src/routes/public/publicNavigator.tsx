import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from '../../pages/public/Login';
// import Register from '../../screens/public/Register';

const Stack = createStackNavigator();

const PublicNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default PublicNavigator;
