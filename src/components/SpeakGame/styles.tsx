import styled from 'styled-components/native';

export const SpeakGameContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DisplayedWord = styled.Text`
    padding: 10px 30px;
    border-bottom-color: #09338f;
    border-bottom-width: 3px;
    color: white;
    text-transform: uppercase;
    border-radius: 10px;
    font-size: 32px;
    margin-bottom: 40px;
`;

export const MicrophoneButton = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid #09338f;
`;
