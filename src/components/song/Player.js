import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({props}) {

    const {currentSong, setCurrentSong, isPlaying, setIsPlaying} = props;

    const audioRef = useRef(null);

    function handlePlay() {
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play()
        }
    }

    return (
        <div className="song-player">
            <div className="progress">
                <p>00:00</p>
                <input type="range" />
                <p>99:99</p>
            </div>
            <div className="controller">
                <FontAwesomeIcon className="prev" icon={faCaretLeft} size="3x" />
                <FontAwesomeIcon className="play" icon={isPlaying ? faPause : faPlay} size="2x" onClick={handlePlay}/>
                <FontAwesomeIcon className="next" icon={faCaretRight} size="3x" />
            </div>
            <audio ref={audioRef} src={currentSong.audio} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}></audio>
        </div>
    )
}

export default Player