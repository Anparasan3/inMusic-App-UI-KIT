import './Style/Content.css'
import data from './data.json';
import React, { useState } from 'react';


export default function PopularArtists(props){
    const [NoOfPopularArtists, setNoOfPopularArtists] = useState(6);
    var showMore = "show more";
    const showmore = () => {
        if(document.getElementById("more").innerHTML === "show more"){  
            setNoOfPopularArtists(data.PopularArtists.length);  
            document.getElementById("more").innerHTML = "show less"; //showMore = "show less"; 
        }
        else{
            setNoOfPopularArtists(6);
            document.getElementById("more").innerHTML = "show more"; //showMore = "show more";
        }
    }

    if (props.width > 400) {
        return(
            <div className="popularartists">
                <div className="container1">
                    <div className="PopolarArtistsHeading"> Popular Artists </div>
                    <div className="PopularArtistsShowmore" onClick={ () => showmore()} id="more">{showMore}</div>     
                </div>
                <div className="overflow2">
                    <div>
                        {
                        data.PopularArtists.slice(0,NoOfPopularArtists).map((a) => {
                        return(
                            <div className="container2">
                                <div> <img src={a.Dp} className="profile" alt="hai" /> </div>
                                <div className="PopularArtistsName">
                                    <div className="PopularArtistsFirstName"> {a.Name} </div>
                                    <div className="PopularArtistsFollowers"> {a.Followers} </div>
                                </div>
                                <div><h3 className="ContentThreeDots">...</h3></div>
                            </div>
                        );
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="popularartists">
                <div>
                    <div className="PopolarArtistsHeadingPortraitMode"> Popular </div>
                    <div className="PopularArtistsShowmorePortraitMode" onClick={ () => showmore()} id="more">{showMore}</div>     
                </div>
                <div className="overflow2">
                    <div>
                        {
                        data.PopularArtists.slice(0,NoOfPopularArtists).map((b) => {
                        return(
                            <div className="containerPortraitMode">
                                <div> <img src={b.Dp} className="profilePortraitMode" alt="" /> </div>
                                <div className="PopularArtistsFirstNamePortraitMode"> {b.Name} </div>
                                <div className="PopularArtistsFollowersPortraitMode"> {b.Followers} </div>
                            </div>
                        );
                        })     
                        }
                    </div>
                </div>
            </div>
        );
    }
}
            





// return(
//     <div className="popularartists">
//         <div className="thirdTable">
//             <table className="totalTableSpace1">
//                 <tr>
//                     <td className="popularArtistsTable1Td"> <h3>Popular Artists</h3> </td>
//                     <td className="popularArtistsTable2Td" onClick={ () => showmore()} id="more">{showMore}</td>
//                 </tr>
//             </table>
//         </div>
//         <div className="overflow2">
//             <table className="totalTableSpace2">
//                 {
//                 data.PopularArtists.slice(0,NoOfPopularArtists).map((skill) => {
//                 return(
//                     <tr>
//                         <td className="insideTable1"> <img src={skill.Dp} className="profile" alt="" /> </td>
//                         <td className="insideTable2">
//                             <div> {skill.Name} </div>
//                             <div className="lighttext"> {skill.Followers} </div>
//                         </td>
//                         <td className="insideTable3"><h3 className="ContentThreeDots">...</h3></td>
//                     </tr>
//                 );
//                 })
//                 }
//             </table>
//         </div>
//     </div>
// );
// }







  // "homepage": "https://Anparasan3.github.io/inMusic-App-UI-Kit",
  // "predeploy": "npm run build",
  //  "deploy": "gh-pages -d build",