import React from 'react';

const Overlay = ({ children }) => {
    return (
        <>
            <div className="w-screen h-auto bg-black bg-opacity-90 bg-no-repeat absolute">
                {children}
            </div>
        </>

    )
}

export default Overlay;