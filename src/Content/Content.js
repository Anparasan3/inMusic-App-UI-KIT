import './Style/Content.css'
import data from './data.json';
import ReactPlayer from "react-player";
import React from 'react';
import { Content } from './Style/ContentStyled';
import TopMenu from "./TopMenu";
import PopularArtists from './PopularArtists';

export default function Rigthbox(props){
    console.log(props.width);
    if (props.content === "Podcasts"){
        return(
            <Content>
                <TopMenu 
                    theme={props.theme} setTheme={props.setTheme} 
                    searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}
                    width={props.width}
                />
                <div class="featuredVideos">
                    <div className="topContentBox">
                        <div className="topContentTitle"> Podcasts </div>
                        <div className="topContentOption"> ... </div>  
                    </div>             
                </div>
                <PopularArtists theme={props.theme} setTheme={props.setTheme} width={props.width}/>
            </Content>
        );
    }
    else if(props.content === "Toplists"){
        return(
            <Content>                       
                <TopMenu 
                    theme={props.theme} setTheme={props.setTheme} 
                    searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}
                    width={props.width}
                />
                <div class="featuredVideos">
                    <div className="topContentBox">
                        <div className="topContentTitle"> Top Lists </div>
                        <div className="topContentOption"> ... </div>  
                    </div>
                    <div className="overflow">
                        <div className="grid-container">    
                            {
                            data.Toplists.filter((val)=>{
                                if (props.searchTerm == ""){
                                    return val
                                }
                                else if(val.tittle.toLowerCase().includes(props.searchTerm.toLocaleLowerCase())){
                                    return val
                                }
                            }).map((val) => {
                            return(
                                <div className="grid-item">
                                    <table>
                                        <tr><td><img src={val.image} width='100%' height='auto' className="SongImage"/></td></tr>
                                        <tr><td className="SongsTitle">{val.tittle}</td></tr>
                                        <tr><td className="SongsDescription">{val.description}</td></tr>
                                    </table>
                                </div>
                            );
                            })
                            }
                        </div>
                    </div>
                </div>
                <PopularArtists theme={props.theme} setTheme={props.setTheme} width={props.width}/>    
            </Content>
        );
    }
    else if (props.content === "Discover"){
        return(
            <Content>
                <TopMenu 
                    theme={props.theme} setTheme={props.setTheme} 
                    searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}
                    width={props.width}
                />
                <div class="featuredVideos">
                    <div className="topContentBox">
                        <div className="topContentTitle"> Discover </div>
                        <div className="topContentOption"> ... </div>  
                    </div>                
                </div>
                <PopularArtists theme={props.theme} setTheme={props.setTheme} width={props.width}/>
            </Content>
        );
    }
    else if (props.content === "Favourites"){
        return(
            <Content>
                <TopMenu 
                    theme={props.theme} setTheme={props.setTheme} 
                    searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}
                    width={props.width}
                />
                <div class="featuredVideos">
                    <div className="topContentBox">
                        <div className="topContentTitle"> Favourites </div>
                        <div className="topContentOption"> ... </div>  
                    </div>               
                </div>
                <PopularArtists theme={props.theme} setTheme={props.setTheme} width={props.width}/>
            </Content>
        );
    }
    else if (props.content === "Messages"){
        return(
            <Content>
                <TopMenu 
                    theme={props.theme} setTheme={props.setTheme} 
                    searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}
                    width={props.width}
                />
                <div class="featuredVideos">
                    <div className="topContentBox">
                        <div className="topContentTitle"> Messages </div>
                        <div className="topContentOption"> ... </div>  
                    </div>              
                </div>
                <PopularArtists theme={props.theme} setTheme={props.setTheme} width={props.width}/>
            </Content>
        );
    }
    else{
        return(
            <Content>
                <TopMenu 
                    theme={props.theme} setTheme={props.setTheme} 
                    searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}
                    width={props.width}
                />
                <div class="featuredVideos">
                    <div className="topContentBox">
                        <div className="topContentTitle"> Featured Videos</div>
                        <div className="topContentOption"> ... </div>  
                    </div>
                    <div className="overflow">
                        <div className="grid-container">    
                            {
                            data.FeaturedVideos.filter((val)=>{
                                if (props.searchTerm == ""){
                                    return val
                                }else if(val.title.toLowerCase().includes(props.searchTerm.toLocaleLowerCase())){
                                    return val
                                }
                            }).map((val) => {
                            return(
                                <div className="grid-item">
                                    <table>
                                        <tr><td><ReactPlayer controls width='100%' height='auto' url={val.url} /></td></tr>
                                        <tr><td className="SongsTitle">{val.title}</td></tr>
                                        <tr><td className="SongsDescription">{val.description}</td></tr>
                                    </table>
                                </div>
                            );
                            })
                            }
                        </div>
                    </div>
                </div>
                <PopularArtists theme={props.theme} setTheme={props.setTheme} width={props.width}/>
            </Content>
        );
    }
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





// import './Style/Content.css'
// import searchicon        from './Sources/icons/SearchIconLight.png';
// import dark_searchicon   from './Sources/icons/SearchIconDark.png';
// import settingsicon      from './Sources/icons/SettingsIconLight.png';
// import dark_settingsicon from './Sources/icons/SettingsIconDark.png';
// import bellicon          from './Sources/icons/NotificationIconLight.png';
// import dark_bellicon     from './Sources/icons/NotificationIconDark.png'
// import lightmode from './Sources/icons/ModeIconLight.png';
// import darkmode from './Sources/icons/ModeIconDark.png';
// import data from './data.json';
// import ReactPlayer from "react-player";
// import styled,{ ThemeProvider } from 'styled-components';
// import React, { Component, useState } from 'react';
// import TopMenu from "./TopMenu";

// const Content = styled.div`
//     color: ${(props) => props.theme.fontColor};
//     background-color: ${(props) => props.theme.ContentBackground};
//     position: absolute;
//     left: 20.73%;
//     right: -0.07%;
//     top: 0%;
//     bottom: 11.56%;
// `;

// export default function Rigthbox(props){
//     // const themeToggler = () => {
//     //     props.setTheme(props.theme === "dark" ? "light" : "dark");
//     // }
//     // const [searchTerm, setSearchTerm] = useState("");
//     const [NoOfPopularArtists, setNoOfPopularArtists] = useState(6);
//     var showMore = "show more";
//     const showmore = () => {
//         if(showMore === "show more"){
//             setNoOfPopularArtists(data.PopularArtists.length);
//             document.getElementById("more").innerHTML = "show less"; 
//             showMore = "show less"; 
//         }
//         else if(showMore === "show less"){
//             setNoOfPopularArtists(6);
//             document.getElementById("more").innerHTML = "show more"; 
//             showMore = "show more";
//         }
//     }

//     if (props.content === "first"){
//         console.log("first");
//         return(
//         <Content>
//             <div>
//                 {/* <div className="Topmenu">
//                     <table className="topMenuTable">
//                         <tr>
//                             <td className="rightIcon"><img src={props.theme === "light" ? searchicon : dark_searchicon} className="searchicon" /></td>
//                             <td className="topSearchBar">
//                                 <input 
//                                     type="search"
//                                     className="searchBoxStyle" 
//                                     placeholder="Search for artists songs and albums"
//                                     style= {props.theme == "light" ? {color: "black"} : {color: "white"} }
//                                     onChange={(event)=> {
//                                         setSearchTerm(event.target.value);
//                                     }}
//                                 />
//                             </td>
//                             <td className="topEmpty"></td>
//                             <td className="rightIcon"><img src={props.theme === "light" ? lightmode : darkmode} onClick={() => themeToggler()} className="button" /></td>
//                             <td className="rightIcon"><img src={props.theme === "light" ? settingsicon : dark_settingsicon} className="settingsicon" /></td>
//                             <td className="rightIcon"><img src={props.theme === "light" ? bellicon : dark_bellicon} className="bellicon" /></td>
//                         </tr>
//                     </table>
//                 </div> */}
//                 <TopMenu/>


//                 <div class="featuredVideos">
//                     <div className="topcontent">
//                         <table>
//                             <tr>
//                                 <td className="topcontentTable1Td"> <h3>Featured Videos</h3> </td>
//                                 <td className="topcontentTable2Td"> <h2 className="threeDot">...</h2></td> 
//                             </tr>
//                         </table>
//                     </div>
//                     <div className="overflow">
//                         <div className="grid-container">    
//                             {
//                             data.FeaturedVideos.filter((val)=>{
//                                 if (searchTerm == ""){
//                                     return val
//                                 }else if(val.details.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
//                                     return val
//                                 }
//                             }).map((val, key) => {
//                             return(
//                                 <div className="grid-item">
//                                     <table>
//                                         <tr><td><ReactPlayer controls width='100%' height='auto' url={val.url} /></td></tr>
//                                         <tr><td>{val.details}</td></tr>
//                                     </table>
//                                 </div>
//                             );
//                             })
//                             }
//                         </div>
//                     </div>
//                 </div>

                
//                 <div className="popularartists">
//                     <div className="thirdTable">
//                         <table className="totalTableSpace1">
//                             <tr>
//                                 <td className="popularArtistsTable1Td"> <h3>Popular Artists</h3> </td>
//                                 <td className="popularArtistsTable2Td" onClick={ () => showmore()} id="more">{showMore}</td>
//                             </tr>
//                         </table>
//                     </div>
//                     <div className="overflow2">
//                         <table className="totalTableSpace2">
//                             {
//                             data.PopularArtists.slice(0,NoOfPopularArtists).map((skill) => {
//                             return(
//                                 <tr>
//                                     <td className="insideTable1"> <img src={skill.Dp} className="profile" alt="" /> </td>
//                                     <td className="insideTable2">
//                                         <div> {skill.Name} </div>
//                                         <div className="lighttext"> {skill.Followers} </div>
//                                     </td>
//                                     <td className="insideTable3"><h3 className="ContentThreeDots">...</h3></td>
//                                 </tr>
//                             );
//                             })
//                             }
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </Content>
//         );
//     }
//     else{
//         console.log("second");
//         return(
//             <Content>            
//                 <div>
//                     <div className="Topmenu">
//                         <table className="topMenuTable">
//                             <tr>
//                                 <td className="rightIcon"><img src={props.theme === "light" ? searchicon : dark_searchicon} className="searchicon" /></td>
//                                 <td className="topSearchBar"><input type="text" className="searchBoxStyle" placeholder="Search for artists songs and albums" /></td>
//                                 <td className="topEmpty">{/* <button className="button" onClick={() => themeToggler() }>C</button> */}</td>
//                                 <td className="rightIcon"><img src={props.theme === "light" ? lightmode : darkmode} onClick={() => themeToggler()} className="button" /></td>
//                                 <td className="rightIcon"><img src={props.theme === "light" ? settingsicon : dark_settingsicon} className="settingsicon" /></td>
//                                 <td className="rightIcon"><img src={props.theme === "light" ? bellicon : dark_bellicon} className="bellicon" /></td>
//                             </tr>
//                         </table>
//                     </div>


//                     <div class="featuredVideos">
//                         <div className="topcontent">
//                             <table>
//                                 <tr>
//                                     <td className="topcontentTable1Td"> <h3>Featured Videos</h3> </td>
//                                     <td className="topcontentTable2Td"> <h2 className="threeDot">...</h2></td> 
//                                 </tr>
//                             </table>
//                         </div>
//                         <div className="overflow">
//                             <div className="grid-container">    
//                                 {
//                                 data.Podcasts.map((skill) => {
//                                 return(
//                                     <div className="grid-item">
//                                         <table>
//                                             <tr><td><img src={skill.image} width='100%' height='auto' className="SongImage"/></td></tr>
//                                             <tr><td>{skill.tittle}</td></tr>
//                                         </table>
//                                     </div>
//                                 );
//                                 })
//                                 }
//                             </div>
//                         </div>
//                     </div>


//                     <div className="popularartists">
//                         <div className="thirdTable">
//                             <table className="totalTableSpace">
//                                 <tr>
//                                     <td className="popularArtistsTable1Td"> <h3>Popular Artists</h3> </td>
//                                     <td className="popularArtistsTable2Td"> {showMore} </td>
//                                 </tr>
//                             </table>
//                         </div>
//                         <div className="overflow2">
//                             <table className="totalTableSpace2">
//                                 {
//                                 data.PopularArtists.map((skill) => {
//                                 return(
//                                     <tr>
//                                         <td className="insideTable1"> <img src={skill.Dp} className="profile" alt="" /> </td>
//                                         <td className="insideTable2">
//                                             <div> {skill.Name} </div>
//                                             <div className="lighttext"> {skill.Followers} </div>
//                                         </td>
//                                         <td className="insideTable3"> <h2>...</h2> </td>
//                                     </tr>
//                                 );
//                                 })
//                                 }
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </Content>
//         );
//     }
// }
