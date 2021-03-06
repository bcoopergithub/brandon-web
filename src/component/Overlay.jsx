import React from 'react';

const Overlay = ({ children }) => {
    return (
        <>
            <div className="w-screen min-h-full h-auto bg-black bg-opacity-80 bg-no-repeat absolute">
                {children}
            </div>
        </>

    )
}

export default Overlay;