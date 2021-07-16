import './Style/Content.css'
import searchicon        from './Sources/icons/SearchIconLight.png';
import dark_searchicon   from './Sources/icons/SearchIconDark.png';
import settingsicon      from './Sources/icons/SettingsIconLight.png';
import dark_settingsicon from './Sources/icons/SettingsIconDark.png';
import bellicon          from './Sources/icons/NotificationIconLight.png';
import dark_bellicon     from './Sources/icons/NotificationIconDark.png'
import lightmode from './Sources/icons/ModeIconLight.png';
import darkmode from './Sources/icons/ModeIconDark.png';
import data from './data.json';
import ReactPlayer from "react-player";
import styled,{ ThemeProvider } from 'styled-components';
import React, { Component, useState } from 'react';

const Content = styled.div`
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.ContentBackground};
    position: absolute;
    left: 20.73%;
    right: -0.07%;
    top: 0%;
    bottom: 11.56%;
`;

export default function Rigthbox(props){
    const themeToggler = () => {
        props.setTheme(props.theme === "dark" ? "light" : "dark");
    }
    //console.log(props.theme);
    return(
    <Content>
        <div>
            <div className="Topmenu">
                <table className="topMenuTable">
                    <tr>
                        <td className="rightIcon"><img src={props.theme === "light" ? searchicon : dark_searchicon} className="searchicon" /></td>
                        <td className="topSearchBar"><input type="text" className="searchBoxStyle" placeholder="Search for artists songs and albums" /></td>
                        <td className="topEmpty">{/* <button className="button" onClick={() => themeToggler() }>C</button> */}</td>
                        <td className="rightIcon"><img src={props.theme === "light" ? lightmode : darkmode} onClick={() => themeToggler()} className="button" /></td>
                        <td className="rightIcon"><img src={props.theme === "light" ? settingsicon : dark_settingsicon} className="settingsicon" /></td>
                        <td className="rightIcon"><img src={props.theme === "light" ? bellicon : dark_bellicon} className="bellicon" /></td>
                    </tr>
                </table>
            </div>


            <div class="featuredVideos">
                <div className="topcontent">
                    <table>
                        <tr>
                            <td className="topcontentTable1Td"> <h3>Featured Videos</h3> </td>
                            <td className="topcontentTable2Td"> {/*<img src={threeDot}className="threeDot" />*/} <h2 className="threeDot">...</h2></td> 
                        </tr>
                    </table>
                </div>
                <div className="overflow">
                    <div className="grid-container">    
                        {
                        data.FeaturedVideos.map((skill) => {
                        return(
                            <div className="grid-item">
                                <table>
                                    <tr><td><ReactPlayer controls width='100%' height='auto' url={skill.url} /></td></tr>
                                    <tr><td>{skill.details}</td></tr>
                                </table>
                            </div>
                        );
                        })
                        }
                    </div>
                </div>
            </div>
            
            
            <div className="popularartists">
                <div className="thirdTable">
                    <table className="totalTableSpace">
                        <tr>
                            <td className="popularArtistsTable1Td"> <h3>Popular Artists</h3> </td>
                            <td className="popularArtistsTable2Td"> Show more </td>
                        </tr>
                    </table>
                </div>
                <div className="overflow2">
                    <table className="totalTableSpace2">
                        {
                        data.PopularArtists.map((skill) => {
                        return(
                            <tr>
                                <td className="insideTable1"> <img src={skill.Dp} className="profile" alt="" /> </td>
                                <td className="insideTable2">
                                    <div> {skill.Name} </div>
                                    <div className="lighttext"> {skill.Followers} </div>
                                </td>
                                <td className="insideTable3"> <h2>...</h2> </td>
                            </tr>
                        );
                        })
                        }
                    </table>
                </div>
            </div>
        </div>
    </Content>
    );
}










                        {/* <div className="grid-item">
                            <img src={backgroundimg1} className="background" />
                            Girls Like You<br/>
                            Melina Lange,2019                      
                        </div>
                        <div className="grid-item">
                            <img src={backgroundimg2} className="background" />
                            Brave For You<br/>
                            William Petersen,1978
                        </div>
                        <div className="grid-item">
                            <img src={backgroundimg3} className="background" />
                            Shut up, kiss Me<br/>
                            Mikkel Poulsen,2016
                        </div>
                        <div className="grid-item"> 
                            <img src={backgroundimg4} className="background" />
                            Beause The Night<br/>
                            John Madsen,2019
                        </div> */}