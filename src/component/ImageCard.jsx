import React from 'react';

const ImageCard = ({image}) => {
    console.log(image.url)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.src.portrait} className = "w-full"/>
        

        </div>

    )
}

export default ImageCard;