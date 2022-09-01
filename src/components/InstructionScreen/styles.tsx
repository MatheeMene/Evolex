import styled from 'styled-components/native';

interface StyleProps {
    buttomColor?: boolean;
}

export const InstructionContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ExplanationText = styled.Text`
    width: 200px;
    text-align: center;
    color: white;
    font-size: 17px;
    margin: 30px 0 50px 0;
`;

export const StartGameButton = styled.TouchableOpacity<StyleProps>`
    background-color: ${props => props.buttomColor ? '#50df5c' : '#09338f'};
    padding: 12px 100px;
    border-radius: 20px;
`;
