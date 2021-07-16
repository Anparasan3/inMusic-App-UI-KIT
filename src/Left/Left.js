import './Style/Left.css';
import React            from 'react';
import musicimage       from './Sources/icons/music.png';
import playlist         from './Sources/icons/PlaylistsIconLight.png';
import dark_playlist    from './Sources/icons/PlaylistsIconDark.png';
import playlistadd      from './Sources/icons/AddIconLight.png';
import dark_playlistadd from './Sources/icons/AddIconDark.png';
import styled           from 'styled-components';
import Logo from './Sources/icons/Logo.jpg';

const Left = styled.div`
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.LeftBackground};
    position: absolute;
    left: 0%;
    right: 79.27%;
    top: 0%;
    bottom: 11.56%;  
`;
function Leftbox(props) {
    return (
        // <div class="Left">
        <Left>
            <div>
                <table className="Logo">
                    <tr>
                        <td className="Icon"> <img src={Logo} className = "LogoImage"/> </td>
                        <td></td><td></td><td></td>
                        <td>
                            <tr className="Text1"> inMusic </tr>
                            <tr className="Text2"> App UI kit </tr>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="Leftmenu">
                <table className="leftMenuTable">
                    <tr>
                        <td className="leftMenuTableTd"><i class="fa fa-podcast" aria-hidden="true"></i></td>
                        <td>Podcasts</td>
                    </tr>
                    <tr>
                        <td className="leftMenuTableTd"> <i class="fa fa-file-video-o" aria-hidden="true"></i> </td>
                        <td> Videos </td>
                    </tr>
                    <tr>
                        <td className="leftMenuTableTd"> <i class="fa fa-line-chart" aria-hidden="true" ></i></td>
                        <td> Top Lists </td>
                    </tr>
                    <tr>
                       <td className="leftMenuTableTd"> <i class="fa fa-cc-discover" aria-hidden="true"></i> </td>
                       <td> Discover </td>                            
                    </tr>
                    <tr>
                        <td className="leftMenuTableTd"> <i class="fa fa-heart-o" aria-hidden="true"></i> </td>
                        <td> Favourites </td>   
                    </tr>
                    <tr>
                        <td className="leftMenuTableTd"> <i class="fa fa-commenting-o" aria-hidden="true"></i> </td>
                        <td> Message </td>
                    </tr> 
                    <tr>
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
                </table>
            </div>
        </Left>
      
    );
  }
  
  
  export default Leftbox;
