"use client"
import { useState, useRef } from "react";

function ButtonPlayer({playFunction}){
    return (
        <div
            onClick={playFunction} 
            className="position-absolute top-50 start-50 translate-middle bg-color-barton rounded-circle w-25" 
            style={{zIndex : 1000, aspectRatio : 1/1}}> 
                <div className="arrow-right position-absolute top-50 translate-middle " style={{left : "55%"}}></div>
        </div>
    );
}

function ButtonPause({pauseFunction}){  
    return (
        <div onClick={pauseFunction} className="position-absolute top-0 start-0 w-100 h-100"></div>
    );
}

export default function VideoComponent({url}){

    const [play, setPlay] = useState(false);
    const videoPlayerRef = useRef(null);

    const playVideo = () => {     
        videoPlayerRef.current.play();
        setPlay(true);
    }

    const puaseVideo = () => {
       videoPlayerRef.current.pause();
       setPlay(false);
    }

    return (
        <div className="container position-relative d-flex">
            
            {play ? "" : <ButtonPlayer playFunction={playVideo} />}
            {!play ? "" : <ButtonPause pauseFunction={puaseVideo} />}

        <video ref={videoPlayerRef} className="w-100 video " style={{aspectRatio : 16 / 9, pointerEvents : "none", opacity: "1 !important"}}  controls preload="none">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}