import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

import {
    BackgroundImageDefault,
    GameButton,
    ButtonText,
    ButtonsContainer,
    ImageButtonContainer,
} from './styles';

const styles = StyleSheet.create({
    icon: {
        width: 150,
        height: 150,
    },
    NameImage: {
        width: 150,
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    linkStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const Home: React.FC = () => {
    return (
        //@ts-ignore
        <BackgroundImageDefault source={require('../../assets/home_cloud.jpg')}>
            <Image style={styles.icon} source={require('../../assets/icon.png')} />
            <ButtonsContainer>
                <GameButton>
                    <Link to={{
                        screen: 'InstructionScreen',
                        params: {
                            explanationText: 'Nomeie as figuras por extenso o mais rápido que você conseguir!',
                            nextScreen: 'FiguresGame',
                            buttomText: 'Começar',
                        }
                    }} style={styles.linkStyle}>
                        <ImageButtonContainer>
                            <Image style={styles.NameImage} source={require('../../assets/NomearFiguras.png')} />
                            <ButtonText>FIGURAS</ButtonText>
                        </ImageButtonContainer>
                    </Link>
                </GameButton>
                <GameButton>
                    <Link to={{
                        screen: 'InstructionScreen',
                        params: {
                            explanationText: 'Dê nome as palavras o mais rapido que você conseguir!',
                            nextScreen: 'SpeakGame',
                            buttomText: 'Começar',
                        }
                    }} style={styles.linkStyle}>
                        <ImageButtonContainer>
                            <Image resizeMode='cover' style={styles.NameImage} source={require('../../assets/letters.jpg')} />
                            <ButtonText>PALAVRAS</ButtonText>
                        </ImageButtonContainer>
                    </Link>
                </GameButton>
            </ButtonsContainer>
        </BackgroundImageDefault>
    );
};

export default Home;
