import Image from 'react-bootstrap/Image';


export default function ImageCut({url, alt}){
    return (        
    <Image src={url} alt={alt} className='w-100 buttom-space' />
    );
}