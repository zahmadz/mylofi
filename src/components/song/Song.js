import React, { useContext, useEffect, useState } from 'react'
import { SongContext } from '../../contexts/SongContext'
import Cover from './Cover'
import Player from './Player'

function Song() {

    const {songs, activeSong, isPlaying, setIsPlaying} = useContext(SongContext)
    const [currentSong, setCurrentSong] = useState({})

    useEffect(() => {
        setCurrentSong(songs[activeSong])
    }, [activeSong, songs])

    return (
        <div>
            <Cover currentSong={currentSong} />
            <Player props={{currentSong, setCurrentSong, isPlaying, setIsPlaying}} />
        </div>
    )
}

export default Song
