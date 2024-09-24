import Image from "next/image";

export default function WhatappButton(){
    return(
        <div className="fixed-bottom w-100 d-flex justify-content-end" >
            <Image src="/whatapp-icon.png" className="p-2" alt="icono de whatapp" height="100" width="100" />
        </div>

    );
}