
import React, { Component, useState, useRef } from 'react';
import styled,{ ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme,GlobalStyle } from "./theme";
import Content from './Content/Content';
import Player  from './Player/Player';
import Left    from './Left/Left'; 


export default function App(props){
    const [theme, setTheme] = useState("dark");
    const currentTheme = theme === "dark" ? "dark" : "light";


    return(
        <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Left theme={currentTheme}/>
            <Content theme={currentTheme} setTheme={setTheme}/>
            <Player theme={currentTheme} />
        </ThemeProvider>
    );
}
