import styled from 'styled-components/native';

interface StyleProps {
    isCorrect: boolean;
    isFocused: boolean;
}

export const FiguresGameContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const NextFigureButtom = styled.TouchableOpacity<StyleProps>`
    width: 300px;
    height: 50px;
    background-color: ${props => props.isCorrect ? '#2ee775' : '#09338f'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${props => props.isFocused ? '30px' : '80px'};
    border-radius: 30px;
    opacity: ${props => props.isCorrect ? 1 : .5};
`;
