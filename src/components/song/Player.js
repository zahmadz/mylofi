import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function Player() {
    return (
        <div className="song-player">
            <div className="progress">
                <p>00:00</p>
                <input type="range" />
                <p>99:99</p>
            </div>
            <div className="controller">
                <FontAwesomeIcon className="prev" icon={faCaretLeft} size="3x" />
                <FontAwesomeIcon className="play" icon={faPause} size="2x" />
                <FontAwesomeIcon className="next" icon={faCaretRight} size="3x" />
            </div>
        </div>
    )
}

export default Player