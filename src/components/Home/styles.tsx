import styled from 'styled-components/native';

export const BackgroundImageDefault = styled.ImageBackground`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const GameButton = styled.TouchableOpacity`
    background-color: white;
    border-width: 8px;
    border-color: #09338f;
    border-radius: 20px;
    margin: 0 15px;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    text-align: center;
    background-color: #09338f;
    color: white;
`;

export const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ImageButtonContainer = styled.View`
    display: flex;
    flex-direction: column;
`;
