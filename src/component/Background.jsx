import React from 'react';
import background_desktop from '../img/kuma.jpg';
import background_mobile from '../img/kuma-mobile.jpg';

const Layout = ({ children }) => {
    return (
        <>
                  <div style={{ backgroundImage: `url(${background_desktop})`,zIndex:'-1' }} className="w-full h-full bg-no-repeat bg-cover bg-right invisible sm:visible  absolute"></div>
            <div style={{ backgroundImage: `url(${background_mobile})`,zIndex:'-1'  }} className="w-full h-full bg-no-repeat bg-cover bg-right visible sm:invisible absolute ">
            </div>
        </>

    )
}

export default Layout;