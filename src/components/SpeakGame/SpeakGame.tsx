import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Voice from '@react-native-community/voice';

import Icon from 'react-native-vector-icons/FontAwesome';
import Words from './words.json';

import { BackgroundImageDefault } from '../Home/styles';
import { SpeakGameContainer, DisplayedWord, MicrophoneButton } from './styles';

const styles = StyleSheet.create({
    shadowProp: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
});

const SpeakGame: React.FC = () => {
    const [result, setResult] = useState('');
    const [isLoading, setLoading] = useState(false);

    const { words } = Words;

    const onSpeechStartHandler = (event: any) => {
        console.log("start handler==>>>", event)
    };

    const onSpeechEndHandler = (event: any) => {
        setLoading(false)
        console.log("stop handler", event)
    };

    const onSpeechResultsHandler = (event: any) => {
        let text = event.value[0]
        setResult(text)
        console.log("speech result handler", event)
    };

    const startRecording = async () => {
        setLoading(true)
        try {
            await Voice.start('pt-BR')
        } catch (error) {
            console.log("error raised", error)
        };
    };

    const stopRecording = async () => {
        try {
            await Voice.stop()
        } catch (error) {
            console.log("error raised", error)
        };
    };

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, []);

    useEffect(() => {
        if (result === words[0]) console.log('palavra igual');
    }, [result])

    return (
        //@ts-ignore
        <BackgroundImageDefault source={require('../../assets/home_cloud.jpg')}>
            <SpeakGameContainer>
                <DisplayedWord style={styles.shadowProp}>Desodorante</DisplayedWord>
                <MicrophoneButton onPress={startRecording}>
                    <Icon name='microphone' size={34} color='#09338f' />
                </MicrophoneButton>
            </SpeakGameContainer>
        </BackgroundImageDefault>
    );
};

export default SpeakGame;