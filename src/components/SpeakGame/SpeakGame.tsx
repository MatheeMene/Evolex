import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import Voice from '@react-native-community/voice';

import Icon from 'react-native-vector-icons/FontAwesome';
import Words from './words.json';

import { BackgroundImageDefault } from '../Home/styles';
import {
    SpeakGameContainer,
    DisplayedWord,
    MicrophoneButton,
    NextWordButton,
    WrongAnswer,
} from './styles';

const styles = StyleSheet.create({
    shadowProp: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    incorrectWord: {
        fontSize: 14,
        width: 200,
        color: 'white',
        textAlign: 'center',
        letterSpacing: 3,
        textTransform: 'uppercase',
    },
});

interface SpeakGameProps {
    navigation: {
        navigate: Function;
    }
}

const SpeakGame: React.FC<SpeakGameProps> = ({ navigation }) => {
    const [wordToShow, setWordToShow] = useState<string>();
    const [result, setResult] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [wordCounter, setWordCounter] = useState<number>(0);
    const [wrongWord, setWrongWord] = useState<boolean>(false);

    const { words } = Words;

    const onSpeechStartHandler = (event: any) => {
        console.log("start handler==>>>", event);
    };

    const onSpeechEndHandler = (event: any) => {
        setLoading(false);
        console.log("stop handler", event);
    };

    const onSpeechResultsHandler = (event: any) => {
        let text = event.value[0];
        setResult(text);
        console.log("speech result handler", event);
        if (result !== wordToShow) setWrongWord(true);
    };

    const startRecording = async () => {
        setLoading(true)
        try {
            await Voice.start('pt-BR')
        } catch (error) {
            console.log("error raised", error)
        };
    };

    const handleNextWord = () => {
        if (wordCounter === 2) {
            navigation.navigate({
                name: 'InstructionScreen',
                params: {
                    icon: 'cloud-done',
                    explanationText: 'Parabéns, você concluiu todas as etapas, continue aperfeiçoando!',
                    nextScreen: 'Home',
                },
            });
            return;
        }
        setIsCorrect(false);
        setWordCounter((prevState: number) => prevState + 1);
    };

    useEffect(() => {
        setWordToShow(words[wordCounter])
    }, [wordCounter]);

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, []);

    useEffect(() => {
        if (result === wordToShow) {
            setIsCorrect(true);
            setWrongWord(false);
        }
    }, [result]);

    return (
        //@ts-ignore
        <BackgroundImageDefault source={require('../../assets/home_cloud.jpg')}>
            <WrongAnswer wrongWord={wrongWord}>
                <Text
                    style={styles.incorrectWord}>Palavra incorreta. Tente Novamente!</Text></WrongAnswer>
            <SpeakGameContainer>
                <DisplayedWord isCorrect={isCorrect} style={styles.shadowProp}>{wordToShow}</DisplayedWord>
                <MicrophoneButton disabled={isCorrect} isCorrect={isCorrect} onPress={startRecording}>
                    {isLoading ? <ActivityIndicator size='large' color='#2153be' /> : <Icon name='microphone' size={34} color={isCorrect ? '#2ee775' : '#09338f'} />}
                </MicrophoneButton>
            </SpeakGameContainer>
            <NextWordButton
                disabled={!isCorrect}
                isCorrect={isCorrect}
                onPress={handleNextWord}>
                <Text style={{ fontSize: 18, color: 'white', textTransform: 'uppercase', letterSpacing: 2 }}>Avançar</Text>
            </NextWordButton>
        </BackgroundImageDefault>
    );
};

export default SpeakGame;
