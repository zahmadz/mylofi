import React from 'react'

function Cover({currentSong = {}}) {

    return (
        <div className="song-cover">
            <img src={currentSong.cover} alt={currentSong.name} />
            <div className="my-2">
                <h1 className="text-3xl font-bold">{currentSong.name}</h1>
                <h2 className="text-xl">{currentSong.artist}</h2>
            </div>
        </div>
    )
}

export default Cover
