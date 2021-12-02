import { createContext, useEffect, useState } from "react";
import SongsData from '../data/songs.json'

export const SongContext = createContext()

export const SongContextProvider = props => {

    const [songs, setSongs] = useState([])
    const [activeSong, setActiveSong] = useState(0)


    useEffect(() => {
        setSongs(SongsData)
    }, [])

    return (
        <SongContext.Provider value={{songs, activeSong, setActiveSong}}>
            {props.children}
        </SongContext.Provider>
    )

}