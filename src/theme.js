import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    //body:'#fff',  //white
    fontColor:'#000',  //black color
    ContentBackground: '#fff',
    LeftBackground: '#EFF0F5',
    PlayerBackground: '#F9FAFC'
}
export const darkTheme = {
    //body:'#000',  
    fontColor:'#FFFFFF', 
    ContentBackground: '#0E121A',
    LeftBackground: '#181C25',
    PlayerBackground: '#202530'
}
export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
    }
`;