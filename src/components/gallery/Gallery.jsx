import React, { useState, useEffect, useCallback } from "react";
import { FcNext, FcPrevious } from 'react-icons/fc';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [ currentImage, setCurrentImage ] = useState(images[0]);

    const nextImage = useCallback(() => {
        if(images.indexOf(currentImage) < images.length - 1) {
            setCurrentImage(images[images.indexOf(currentImage) + 1]);
        }else {
            setCurrentImage(images[0]);
        }
    },[currentImage, images]);

    const previousImage = () => {
        if(images.indexOf(currentImage) >= 1) {
            setCurrentImage(images[images.indexOf(currentImage) - 1]);
        }else {
            setCurrentImage(images[images.length - 1]);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId);
      }, [currentImage, nextImage]);


    return (
        <div className="gallery">
            <div className="btn" onClick={previousImage}><FcPrevious size={40}/></div>
            <div className="imgView">
            <img className="currImg" src={currentImage.url} alt='our work' />
            <div className="goImg">
                <div onClick={previousImage}><FcPrevious size={30}/></div>
                <div onClick={nextImage}><FcNext size={30}/></div>
            </div>
            </div>
            <div className="btn" onClick={nextImage}><FcNext size={40}/></div>
        </div>
    )
};

export default Gallery;
