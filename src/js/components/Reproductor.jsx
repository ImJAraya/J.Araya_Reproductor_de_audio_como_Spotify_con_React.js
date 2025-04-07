import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBackward, faForward, faPause } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.css"

import Boton from "../components/Boton";

const Reproductor = () => {

    const [songs, setSongs] = useState([])
    const [url, setUrl] = useState("")
    const audioRef = useRef(null)
    const [indice, setIndice] = useState(null)

    const handlerCancion = (index) => {
        setUrl("https://playground.4geeks.com" + songs[index].url)
        setIndice(index)
    }

    const handlerBackward = () => {
        if (indice !== null) {
            if (indice == 0) {
                setUrl("https://playground.4geeks.com" + songs[songs.length-1].url)
                setIndice(songs.length-1)
            } else {
                setUrl("https://playground.4geeks.com" + songs[indice - 1].url)
                setIndice(indice - 1)
            }
        }

    }

    const handlerForward = () => {
        if (indice !== null ) {
            if (indice == songs.length - 1) {
                setUrl("https://playground.4geeks.com" + songs[0].url)
                setIndice(0)
            } else {
                setUrl("https://playground.4geeks.com" + songs[indice + 1].url)
                setIndice(indice + 1)
            }

        }

    }

    const getData = async () => {
        try {
            let response = await fetch("https://playground.4geeks.com/sound/songs")
            if (!response.ok)
                throw new Error("Error al realizar el get")
            let data = await response.json()
            setSongs(data.songs)

        } catch (error) {
            console.error("Algo salio mal")
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const handlerPause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }

    const handlerPlay = () => {
        if (audioRef.current && url !== "") {
            audioRef.current.play();
        }
    }

    useEffect(() => {
        if (url !== "") {
            handlerPlay();
        }
    }, [url]);

    return (
        <div >
            {songs.map((song, index) => (
                <div key={index} className="card col" onClick={() => handlerCancion(index)}>
                    {`${index + 1} ${song.name}`}
                </div>
            ))}
            <audio ref={audioRef} src={url}></audio>
            <div className="controlButtons gap-3">
                <Boton icono={<FontAwesomeIcon icon={faBackward} onClick={handlerBackward} />} />
                <Boton icono={<FontAwesomeIcon icon={faPause} onClick={handlerPause} />} />
                <Boton icono={<FontAwesomeIcon icon={faPlay} />} onClick={handlerPlay} />
                <Boton icono={<FontAwesomeIcon icon={faForward} onClick={handlerForward} />} />
            </div>
        </div>
    )
}

export default Reproductor