import styled from 'styled-components/native';

interface StyledProps {
    isCorrect?: boolean;
    wrongWord?: boolean;
}

export const SpeakGameContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WrongAnswer = styled.View<StyledProps>`
    height: 50px;
    width: 250px;
    background-color: #ff8585;
    position: absolute;
    top: 220px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.wrongWord ? 1 : 0};
`;

export const DisplayedWord = styled.Text<StyledProps>`
    padding: 10px 30px;
    border-bottom-color: ${props => props.isCorrect ? '#2ee775' : '#09338f'};
    border-bottom-width: 3px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-radius: 10px;
    font-size: 32px;
    margin-bottom: 40px;
`;

export const MicrophoneButton = styled.TouchableOpacity<StyledProps>`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid ${props => props.isCorrect ? '#2ee775' : '#09338f'};
`;

export const NextWordButton = styled.TouchableOpacity<StyledProps>`
    width: 300px;
    height: 50px;
    background-color: ${props => props.isCorrect ? '#2ee775' : '#09338f'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 80px;
    border-radius: 30px;
    opacity: ${props => props.isCorrect ? 1 : .5};
`;
