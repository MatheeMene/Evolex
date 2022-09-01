import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { BackgroundImageDefault } from '../Home/styles';
import { InstructionContainer, ExplanationText, StartGameButton } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface InstructionsScreenProps {
    route: {
        params: {
            explanationText: string;
            nextScreen: string;
            icon?: string;
        }
    };
    navigation: {
        navigate: Function
    },
};

const styles = StyleSheet.create({
    airplaneImage: {
        width: 230,
        height: 150,
        borderRadius: 80,
    }
});

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ route, navigation }) => {
    const { params: { nextScreen, icon } } = route;

    return (
        //@ts-ignore
        <BackgroundImageDefault source={require('../../assets/home_cloud.jpg')}>
            <InstructionContainer>
                {icon
                    ? <Icon name={icon} size={150} color='#50df5c' />
                    : <Image source={require('../../assets/airplane.webp')} style={styles.airplaneImage} />
                }
                <ExplanationText>{route.params.explanationText}</ExplanationText>
                {/*//@ts-ignore */}
                <StartGameButton buttomColor={icon} onPress={() => {
                    navigation.navigate({
                        name: nextScreen,
                    });
                }}><Text style={{ fontSize: 18, color: 'white' }}>Começar</Text></StartGameButton>
            </InstructionContainer>
        </BackgroundImageDefault>
    );
};

export default InstructionsScreen;
