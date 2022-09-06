import React, { useEffect, useState, useRef } from 'react';
import { Image, StyleSheet, Text, TextInput } from 'react-native';
import { LinearProgress } from 'react-native-elements';

import { BackgroundImageDefault } from '../Home/styles';
import { FiguresGameContainer, NextFigureButtom } from './styles';
import { FiguresData } from './figures';

const styles = (isCorrect: boolean) => StyleSheet.create({
    input: {
        height: 50,
        width: 250,
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'white',
        borderColor: isCorrect ? '#2ee775' : '#09338f',
    },
});

interface FiguresGameProps {
    navigation: {
        navigate: Function;
    }
}

const FiguresGame: React.FC<FiguresGameProps> = ({ navigation }) => {
    const [figuresCounter, setFiguresCounter] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [linearProgress, setLinearProgress] = useState<number>(0);

    const { paths, names, width } = FiguresData;

    const handleNextFigure = () => {
        if (figuresCounter === 2) {
            navigation.navigate({
                name: 'InstructionScreen',
                params: {
                    icon: 'cloud-done',
                    explanationText: 'Parabéns, você acertou todas as figuras, continue aperfeiçoando!',
                    nextScreen: 'Home',
                    buttomText: 'Concluir',
                },
            });
            return;
        }
        setIsCorrect(false);
        setFiguresCounter((prevState: number) => prevState + 1);
        setInputValue('');
        setLinearProgress((prevState: number) => prevState + .33);
    }

    useEffect(() => {
        if (names[figuresCounter] === inputValue) setIsCorrect(true);
        else setIsCorrect(false);
    }, [inputValue]);

    return (
        //@ts-ignore
        <BackgroundImageDefault source={require('../../assets/home_cloud.jpg')}>
            <LinearProgress
                variant='determinate'
                color='#09338f'
                value={linearProgress}
                style={{ position: 'absolute', width: '60%', top: isFocused ? 95 : 200 }}
            />
            <FiguresGameContainer>
                <Image
                    resizeMode='center'
                    style={{ width: width[figuresCounter], height: 250 }}
                    source={paths[figuresCounter]}
                />
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={inputValue}
                    style={styles(isCorrect).input}
                    placeholder="Digite o nome da figura"
                    onChangeText={(textFigure: string) => setInputValue(textFigure)}
                />
            </FiguresGameContainer>
            <NextFigureButtom
                isFocused={isFocused}
                disabled={!isCorrect}
                isCorrect={isCorrect}
                onPress={handleNextFigure}>
                <Text style={{ textTransform: 'uppercase', color: 'white', letterSpacing: 2 }}>Avançar</Text>
            </NextFigureButtom>
        </BackgroundImageDefault>
    );
};

export default FiguresGame;
