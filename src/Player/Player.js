import { Player } from './Style/PlayerStyled';
import musicimg         from './Sources/icons/AlbumIconLight.png';
import dark_musicimg    from './Sources/icons/AlbumIconDark.png';
import separator        from './Sources/icons/SeparatorIconLight.png';
import dark_separator   from './Sources/icons/SeparatorIconDark.png';
import backwardimg      from './Sources/icons/PreviousIconLight.png';
import dark_backwardimg from './Sources/icons/PreviousIconDark.png';
import playimg          from './Sources/icons/PlayIconLight.png';
import dark_playimg     from './Sources/icons/PlayIconDark.png';
import forwardimg       from './Sources/icons/NextIconLight.png';
import dark_forwardimg  from './Sources/icons/NextIconDark.png';
import addSongimg       from './Sources/icons/AddSongIconLight.png';
import dark_addSongimg  from './Sources/icons/AddSongIconDark.png';
import repeatimg        from './Sources/icons/ShuffleIconLight.png';
import dark_repeatimg   from './Sources/icons/ShuffleIconDark.png';
import volumeimg        from './Sources/icons/SoundIconLight.png';
import dark_volumeimg   from './Sources/icons/SoundIconDark.png';
import 'react-h5-audio-player/lib/styles.css';
import './Style/Player.css';
import {useState, useRef} from 'react';
import song1   from './Sources/audio/song1.mp3';
import Slider from './slider';
import pauseIcon      from './Sources/icons/PauseIconLight.png'
import dark_pauseIcon from './Sources/icons/PauseIconDark.png'


export default function Footer(props){
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
  
    const audioRef = useRef()
    const onChange = (e) => {
      const audio = audioRef.current
      audio.currentTime = (audio.duration / 100) * e.target.value
      setPercentage(e.target.value)
    }  
    const play = () => {
      const audio = audioRef.current
      audio.volume = 0.1
  
      if (!isPlaying) {
        setIsPlaying(true)
        audio.play()
      }
  
      if (isPlaying) {
        setIsPlaying(false)
        audio.pause()
      }
    } 
    const getCurrDuration = (e) => {
      const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
      const time = e.currentTarget.currentTime
  
      setPercentage(+percent)
      setCurrentTime(time.toFixed(2))
    }
    function secondsToHms(seconds) {
        if (!seconds) return '00:00'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
        let sec = parseInt(duration)
        if (sec < 10) {
            sec = `0${sec}`
        }
        if (min < 10) {
            min = `0${min}`
        }
        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min == 0) {
            return `00:${sec}`
        } else {
            return `${min}:${sec}`
        }
    }
    //console.log("play",{play});
    //console.log("isPlaying",{isPlaying});

    if(props.width > 500){
      return(
        <Player>  
            <table className="playerTable">
                <tr>
                    <td className="playerIconTd"> <img src={props.theme === "light" ? musicimg : dark_musicimg} className="musicImage" /> </td>
                    <td className="songTittle"> Song Tittle  </td>
                    <td className="playerIconTd"> <img src={props.theme === "light" ? separator : dark_separator} className="strightlineImage" /> </td>
                    <td className="playerIconTd"> <img src={props.theme === "light" ? backwardimg : dark_backwardimg} className="backwardImage" /> </td>
                    <td className="playerIconTd"> 
                        <img src={isPlaying===true ? (props.theme=="light"?pauseIcon:dark_pauseIcon):(props.theme==="light"?playimg:dark_playimg)} onClick={play} isPlaying={isPlaying} className="playImage" />
                    </td>   
                    <td className="playerIconTd"> <img src={props.theme === "light" ? forwardimg : dark_forwardimg} className="forwardImage" /> </td>
                    <td className="timing"> {secondsToHms(currentTime)} </td>
                    <td>
                    <div className="range1">
                        <audio
                            ref={audioRef}
                            onTimeUpdate={getCurrDuration}
                            onLoadedData={(e) => {
                                setDuration(e.currentTarget.duration.toFixed(2))
                            }}
                            src={song1}
                        ></audio>
                        <div className='control-panel'> <Slider percentage={percentage} onChange={onChange} /> </div>
                    </div>
                    </td>
                    <td className="timing"> {secondsToHms(duration)} </td>
                    <td className="playerIconTd"> <img src={props.theme === "light" ? addSongimg : dark_addSongimg} className="addPlaylistImage" /> </td>
                    <td className="playerIconTd"> <img src={props.theme === "light" ? repeatimg : dark_repeatimg} className="repeatImage" /> </td>
                    <td className="playerIconTd"> <img src={props.theme === "light" ? volumeimg : dark_volumeimg} className="volumeImage" />  </td>
                </tr>
            </table>   
        </Player>
      );
    }
    else{
        return(
            <Player>  
                <div className="PlayerPortraitMode">
                    <div className="FirstDivision">
                        <div> <img src={props.theme === "light" ? musicimg : dark_musicimg} className="musicImage" /> </div>
                        <div className="FirstDivisionSongTitle"> Songs Title</div>
                    </div>
                    <div className="SecondDivision"> 

                        <div className="SecondDivisionPlayer">
                            <div className="timingPortraitMode"> {secondsToHms(currentTime)} </div>
                            <div> 
                                <audio
                                ref={audioRef}
                                onTimeUpdate={getCurrDuration}
                                onLoadedData={(e) => {
                                    setDuration(e.currentTarget.duration.toFixed(2))
                                }}
                                src={song1}
                                ></audio>
                                <div className='control-panel'> <Slider percentage={percentage} onChange={onChange} /> </div>
                            </div>
                            <div className="timingPortraitMode"> {secondsToHms(duration)} </div>
                        </div>

                        <div className="SecondDivisionPlayerControls">
                            <div> <img src={props.theme === "light" ? backwardimg : dark_backwardimg} className="backwardImagePortraitMode"/></div>
                            <div> <img src={isPlaying===true ? (props.theme=="light"?pauseIcon:dark_pauseIcon):(props.theme==="light"?playimg:dark_playimg)} onClick={play} isPlaying={isPlaying} className="playImagePortraitMode" /> </div>
                            <div> <img src={props.theme === "light" ? forwardimg : dark_forwardimg} className="forwardImagePortraitMode" /> </div>
                            <div> <img src={props.theme === "light" ? addSongimg : dark_addSongimg} className="addPlaylistImagePortraitMode" /></div>
                            <div> <img src={props.theme === "light" ? repeatimg : dark_repeatimg} className="repeatImagePortraitMode" /> </div>
                            <div> <img src={props.theme === "light" ? volumeimg : dark_volumeimg} className="volumeImagePortraitMode" /></div>
                        </div>
                    
                    </div>
                </div>
            </Player>
        );
    }
}