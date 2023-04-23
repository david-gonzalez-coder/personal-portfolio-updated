import { useEffect, useRef, useState } from "react";
import backgroundMusic from "../assets/audios/backgroundMusic.mp3"
import styled from 'styled-components'
const Btn = styled.button`
    border: 1px solid #fff;
    :hover {
        border: 1px solid #fff;
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #BABECC;
    }
    :active {
        box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff;
    }
`

const Footer = () => {
    const [musicState, setMusicState] = useState(false);
    const btnRef = useRef(null)
    const musicRef = useRef(null)
    useEffect(()=>{
         if(musicState){
            musicRef.current.play()
            btnRef.current.innerHTML ="Pause Music"
         }else{
            musicRef.current.pause()
            btnRef.current.innerHTML ="Play Music" 
         }
}, [musicState])
    return (
        <div className="h-[10vh]  bg-white rounded-t-lg flex items-center justify-center">
            <Btn 
                className="transition-all text-sm px-16 py-2 duration-200 pointer rounded-full font-semibold transition-all text-[#61677C]" 
                onClick={()=> setMusicState(!musicState)} 
                ref={btnRef}
            >
                Play Music
            </Btn>
            <audio src={backgroundMusic} ref={musicRef} loop></audio>
        </div>
    )
}
export default Footer