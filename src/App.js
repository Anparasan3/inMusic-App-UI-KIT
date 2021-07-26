
import React, { Component, useEffect, useState} from 'react';
import styled,{ ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme,GlobalStyle } from "./theme";
import Content from './Content/Content';
import Player  from './Player/Player';
import Left    from './Left/Left'; 

window.anpu = "hello world!";

function AdjustWindowSize(){
    const[currentScreenSize, setCurrentScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setCurrentScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    },[]);
    return currentScreenSize;
}

export default function App(props){
    const width = AdjustWindowSize();
    const [theme, setTheme] = useState("light");
    const [content, setContent] = useState("Videos");
    const [searchTerm, setSearchTerm] = useState("");
    const [topListSearchTerm, setTopListSearchTerm] = useState("");
    return(
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Left 
                theme={theme} 
                content={content} setContent={setContent}
                searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                width={width}
            />
            <Content
                theme={theme} setTheme={setTheme}
                content={content} 
                searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                topListSearchTerm={topListSearchTerm} setTopListSearchTerm={setTopListSearchTerm}
                width={width}
            />
            <Player theme={theme} width={width}/>
        </ThemeProvider>
    );
}
