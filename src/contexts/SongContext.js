import { createContext, useEffect, useState } from "react";
import SongsData from '../data/songs.json'

export const SongContext = createContext()

export const SongContextProvider = props => {

    const [songs, setSongs] = useState([{
        name: "",
        artist: "",
        id: "",
        active: "",
        cover: "",
        audio: ""
    }])
    const [activeSong, setActiveSong] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)


    useEffect(() => {
        setSongs(SongsData)
    }, [])

    return (
        <SongContext.Provider value={{songs, activeSong, setActiveSong, isPlaying, setIsPlaying}}>
            {props.children}
        </SongContext.Provider>
    )

}