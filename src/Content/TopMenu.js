import './Style/Content.css'
import searchicon        from './Sources/icons/SearchIconLight.png';
import dark_searchicon   from './Sources/icons/SearchIconDark.png';
import settingsicon      from './Sources/icons/SettingsIconLight.png';
import dark_settingsicon from './Sources/icons/SettingsIconDark.png';
import bellicon          from './Sources/icons/NotificationIconLight.png';
import dark_bellicon     from './Sources/icons/NotificationIconDark.png'
import lightmode from './Sources/icons/ModeIconLight.png';
import darkmode from './Sources/icons/ModeIconDark.png';


export default function Topmenu(props){
    const themeToggler = () => {
        props.setTheme(props.theme === "dark" ? "light" : "dark");
    }
    return(
        <div className="Topmenu">
            <table className="topMenuTable">
                <tr>
                    <td className="rightIcon"><img src={props.theme === "light" ? searchicon : dark_searchicon} className="searchicon" /></td>
                    <td className="topSearchBar">
                        <input 
                            type="search"
                            className="searchBoxStyle" 
                            placeholder="Search for artists songs and albums"
                            style= {props.theme == "light" ? {color: "black"} : {color: "white"} }
                            onChange={(event)=> {
                                props.setSearchTerm(event.target.value);
                            }}
                        />
                    </td>
                    <td className="topEmpty"></td>
                    <td className="rightIcon"><img src={props.theme === "light" ? lightmode : darkmode} onClick={() => themeToggler()} className="button" /></td>
                    <td className="rightIcon"><img src={props.theme === "light" ? settingsicon : dark_settingsicon} className="settingsicon" /></td>
                    <td className="rightIcon"><img src={props.theme === "light" ? bellicon : dark_bellicon} className="bellicon" /></td>
                </tr>
            </table>
        </div>
    );
}