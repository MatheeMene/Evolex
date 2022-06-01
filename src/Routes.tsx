import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './routes/index';

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Routes;
