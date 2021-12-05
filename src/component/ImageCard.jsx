import React from 'react';

const ImageCard = ({image}) => {
    // console.log(image.urls)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.urls.regular} className = "w-full"/>
        

        </div>

    )
}

export default ImageCard;