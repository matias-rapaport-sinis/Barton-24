"use client"
import { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";

function ButtonPlayer({playFunction}){
    return (
        <div
            onClick={playFunction} 
            className="position-absolute top-50 start-50 mt-5 translate-middle bg-barton rounded-circle d-flex justify-content-center align-items-center " 
            style={{zIndex : 1000, aspectRatio : 1/1, width: 100, height :100}}> 
                <Image className="" style={{marginLeft : 12}} src="/play-48.png" width="48" height="48" alt="play bottom" />
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
        <Container fluid >
            <Row>
                <Col className="p-0">
                    {play ? "" : <ButtonPlayer playFunction={playVideo} />}
                    {!play ? "" : <ButtonPause pauseFunction={puaseVideo} />}
                    <video ref={videoPlayerRef} className="w-100 video" style={{aspectRatio : 3 / 1, pointerEvents : "none", opacity: "1 !important"}}  controls preload="none">
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </Container>
    );
}