import styled,{ ThemeProvider } from 'styled-components';

export const Content = styled.div`
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.ContentBackground};
    position: absolute;
    left: 20.73%;
    right: -0.07%;
    top: 0%;
    bottom: 11.56%;
`;