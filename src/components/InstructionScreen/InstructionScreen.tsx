import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { BackgroundImageDefault } from '../Home/styles';
import { InstructionContainer, ExplanationText, StartGameButton } from './styles';

interface InstructionsScreenProps {
    route: {
        params: {
            explanationText: string;
            nextScreen: string;
        }
    };
    navigation: {
        navigate: Function
    }
};

const styles = StyleSheet.create({
    airplaneImage: {
        width: 230,
        height: 150,
        borderRadius: 80,
        marginBottom: 40,
    }
});

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ route, navigation }) => {
    const { params: { nextScreen } } = route;

    return (
        //@ts-ignore
        <BackgroundImageDefault source={require('../../assets/home_cloud.jpg')}>
            <InstructionContainer>
                <Image source={require('../../assets/airplane.webp')} style={styles.airplaneImage} />
                <ExplanationText>{route.params.explanationText}</ExplanationText>
                <StartGameButton onPress={() => {
                    navigation.navigate({
                        name: nextScreen,
                    });
                }}><Text style={{ fontSize: 18, color: 'white' }}>Começar</Text></StartGameButton>
            </InstructionContainer>
        </BackgroundImageDefault>
    );
};

export default InstructionsScreen;