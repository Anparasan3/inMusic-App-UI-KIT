import './Style/Left.css';
import React from 'react';
import Logo from './Sources/icons/Logo.jpg';
import leftData from './leftData.json';
import { Left } from './Style/LeftStyled';

export default function Leftbox(props) {
    const changeContentBox = (arg) => {
        props.setContent(arg);       
    }
    console.log("testing window function : ", window.anpu);
    if (props.width > 500){
        return(
            <Left>
                <div>
                    <table className="Logo">
                        <tr>
                            <td className="Icon"> <img src={Logo} className = "LogoImage"/> </td>
                            <td className="LogoTable">
                                <tr className="logoText"> inMusic </tr>
                                <tr className="logoLightText"> App UI kit </tr>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="Leftmenu">
                    <table className="leftMenuTable">
                        {
                            leftData.Left.map((LEFT) => {
                                if (props.content == LEFT.leftTitle) {
                                    return(
                                        <tbody>
                                        <tr className="changeCursor">
                                            <td className="leftMenuTableTd"> <img src={LEFT.icons.leftIconPink} className="playlist" alt=""/> </td>
                                            <td className="PinkColorTittle"> {LEFT.leftTitle} </td>
                                            <td> <img src={LEFT.icons.leftIconAddPink} className="playlist" alt=""/> </td>
                                            <td className="PinkColorLine"></td>
                                        </tr>
                                        </tbody>
                                    );    
                                }
                                else{
                                    return(
                                        <tbody>
                                        <tr className="changeCursor" onClick={() => changeContentBox(LEFT.leftTitle)}>
                                            <td className="leftMenuTableTd"> <img src={props.theme === "light" ? LEFT.icons.leftIconLight : LEFT.icons.leftIconDark} className="playlist" alt=""/> </td>
                                            <td className="leftTableContent"> {LEFT.leftTitle } </td>
                                            <td> <img src={props.theme === "light" ? LEFT.icons.leftIconAddLight : LEFT.icons.leftIconAddDark} className="playlist" alt=""/> </td>
                                            <td> </td>
                                        </tr>
                                        </tbody>
                                    );
                                }
                            })
                        }
                        <tr>
                            <td></td>
                            <td>
                                {                   
                                leftData.Playlist.map((playlist) => {
                                    return(<div className="LeftPlaylist">{playlist.subText}</div>);
                                })
                                }
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </Left>  
        );
    }
    else{
        return(
            <Left>
                <div>
                    <table className="Logo">
                        <tr> <td className="Icon"> <img src={Logo} className = "LogoImage"/> </td> </tr>
                        <tr>
                            <div className="Text1"> inMusic </div>
                            {/* <div className="Text2"> App UI kit </div> */}
                        </tr>
                    </table>
                </div>
                <div className="Leftmenu">
                    <table className="leftMenuTable">
                        {
                            leftData.Left.map((LEFT) => {
                                if (props.content == LEFT.leftTitle) {
                                    return(
                                        <tbody>
                                        <tr className="changeCursor">
                                            <td className="leftMenuTableTd"> <img src={LEFT.icons.leftIconPink} className="playlist" alt=""/> </td>
                                        </tr>
                                        </tbody>
                                    );    
                                }
                                else{
                                    return(
                                        <tbody>
                                        <tr className="changeCursor" onClick={() => changeContentBox(LEFT.leftTitle)}>
                                            <td className="leftMenuTableTd"> <img src={props.theme === "light" ? LEFT.icons.leftIconLight : LEFT.icons.leftIconDark} className="playlist" alt=""/> </td>
                                        </tr>
                                        </tbody>
                                    );
                                }
                            })
                        }
                    </table>
                </div>
            </Left>  
        );
    }
}



















                    // <table className="leftMenuTable">
                    // {
                    // leftData.Left.map((skill) => {
                    // return(
                    //     <tbody>
                    //     <tr className="changeCursor" onClick={() => changeContentBox(skill.id)}>
                    //         <td className="leftMenuTableTd"> <img src={props.theme === "light" ? skill.leftIconLight : skill.leftIconDark} className="playlist" alt=""/> </td>
                    //         <td> {skill.leftTitle || <div className="leftPlaylistSubText">{skill.subText}</div> } </td>
                    //         <td> <img src={props.theme === "light" ? skill.leftIconAddLight : skill.leftIconAddDark} className="playlist" alt=""/> </td>
                    //         <td style = {props.left === "yes" ? {background:"rgb(226, 43, 217)"} : {background:"transparent"}}></td>
                    //     </tr>
                    //     </tbody>
                    // );
                    // })
                    // }
                    // </table>  




                  {/* <table className="leftMenuTable">
                    <tr onClick={() => podcasts(1)}>
                        <td className="leftMenuTableTd"><i class="fa fa-podcast" aria-hidden="true"></i></td>
                        <td>Podcasts</td>
                    </tr>
                    <tr onClick={() => podcasts(2)}>
                        <td className="leftMenuTableTd"> <i class="fa fa-file-video-o" aria-hidden="true"></i> </td>
                        <td> Videos </td>
                    </tr>
                    <tr onClick={() => podcasts(3)}>
                        <td className="leftMenuTableTd"> <i class="fa fa-line-chart" aria-hidden="true" ></i></td>
                        <td> Top Lists </td>
                    </tr>
                    <tr onClick={() => podcasts(4)}>
                       <td className="leftMenuTableTd"> <i class="fa fa-cc-discover" aria-hidden="true"></i> </td>
                       <td> Discover </td>                            
                    </tr>
                    <tr onClick={() => podcasts(5)}>
                        <td className="leftMenuTableTd"> <i class="fa fa-heart-o" aria-hidden="true"></i> </td>
                        <td> Favourites </td>   
                    </tr>
                    <tr onClick={() => podcasts(6)}>
                        <td className="leftMenuTableTd"> <i class="fa fa-commenting-o" aria-hidden="true"></i> </td>
                        <td> Message </td>
                    </tr> 
                    <tr onClick={() => podcasts(7)}>
                        <td className="leftMenuTableTd"> <img src={props.theme === "light" ? playlist : dark_playlist} className="playlist"/> </td>
                        <td> Playlist </td>
                        <td> <img src={props.theme === "light" ? playlistadd : dark_playlistadd} className="leftPlaylistAdd"/></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td className="leftPlaylistText">Summer Vibes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="leftPlaylistText"> Chil Out </td>
                        <td></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td className="leftPlaylistText"> Clasic Rock </td>
                        <td> </td>
                    </tr> 
                    <tr>
                        <td> </td>
                        <td className="leftPlaylistText"> Kids Music </td>
                        <td></td>
                    </tr>        
                </table> */}










// import './Style/Left.css';
// import React            from 'react';
// import styled           from 'styled-components';
// import Logo from './Sources/icons/Logo.jpg';
// import leftData from './leftData.json';


// const Left = styled.div`
//     color: ${(props) => props.theme.fontColor};
//     background-color: ${(props) => props.theme.LeftBackground};
//     position: absolute;
//     left: 0%;
//     right: 79.27%;
//     top: 0%;
//     bottom: 11.56%;  
// `;
// export default function Leftbox(props) {
//     const changeContentBox = (arg) => {
//         if(arg==="1"){
//             console.log("id is == 1"); 
//             props.setPodcasts(props.podcasts === "first" ? "second" : "first"); 
//             props.setLeft(props.left === "yes" ? "no" : "yes");
//         }
//         else if(arg==="2"){
//             console.log("id is == 2");   
//         }
//         else if(arg==="3"){
//             console.log("id is == 3");   
//         }
//         else if(arg==="4"){
//             console.log("id is == 4");   
//         }
//         else if(arg==="5"){
//             console.log("id is == 5");   
//         }
//         else if(arg==="6"){
//             console.log("id is == 6");   
//         }
//         else if(arg==="7"){
//             console.log("id is == 7");   
//         }
//     }
//     return(
//         <Left>
//             <div>
//                 <table className="Logo">
//                     <tr>
//                         <td className="Icon"> <img src={Logo} className = "LogoImage"/> </td>
//                         <td></td><td></td><td></td>
//                         <td>
//                             <tr className="Text1"> inMusic </tr>
//                             <tr className="Text2"> App UI kit </tr>
//                         </td>
//                     </tr>
//                 </table>
//             </div>
//             <div className="Leftmenu">
//                 <table className="leftMenuTable">
//                     {
//                     leftData.Left.map((skill) => {
//                     return(
//                         <tbody>
//                         <tr className="changeCursor" onClick={() => changeContentBox(skill.id)}>
//                             <td className="leftMenuTableTd"> <img src={props.theme === "light" ? skill.leftIconLight : skill.leftIconDark} className="playlist" alt=""/> </td>
//                             <td> {skill.leftTitle || <div className="leftPlaylistSubText">{skill.subText}</div> } </td>
//                             <td> <img src={props.theme === "light" ? skill.leftIconAddLight : skill.leftIconAddDark} className="playlist" alt=""/> </td>
//                             <td style = {props.left === "yes" ? {background:"rgb(226, 43, 217)"} : {background:"transparent"}}></td>
//                         </tr>
//                         </tbody>
//                     );
//                     })
//                     }
//                 </table>
//             </div>
//         </Left>  
//     );
//   }


