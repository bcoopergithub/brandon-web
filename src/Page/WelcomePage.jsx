import React, { useState, useEffect, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';

import isReact from 'is-react';
import '../css/home.css';
import Countdown from 'react-countdown';
import CountdownTimer from '../component/Countdown';
import Layout from '../component/Background';


const WelcomePage = () => {
    // console.log(isReact.functionComponent(CountdownTimer))
  let history = useHistory();


    // Create the count state.
    const [count, setCount] = useState(0);
    const Completionist = () => <span>You are good to go!</span>;

    // const date = new Date('2022/06/22 18:00');
    // Update the count (+1 every second).
    // useEffect(() => {
    //     const timer = setTimeout(() => setCount(count + 1), 1000);
    //     return () => clearTimeout(timer);
    // }, [count, setCount]);
    // Return the App component.
    return (
        <>
        <Layout></Layout>
            <div className="w-full h-full flex flex-col justify-start relative lg:justify-start">
                <div className="entire-content w-full h-full relative  flex flex-col   lg:w-3/6 xl:w-4/6 2xl:w-4/6   md:my-5 px-0 md:px-6 lg:px-0 xl:pr-36 2xl:pr-20 text-center ...">
                    <div className="header-container my-4 relative App-header">
                        <div className="welcome-text text-center my-4 md:2xl lg:text-2xl xl:text-4xl 2xl:text-5xl   ">
                            <p>Welcome to Little Brandon 's World</p>
                        </div>
                        <div className="top-nav flex flex-row justify-around text-lg 2xl:text-3xl">
                        <Link to="/about">About</Link>
                        <Link to="/albums">Albums</Link>
                        <Link to="/journey">Blog</Link>
                        <Link to="/subscribe">Subscribe</Link>
                        </div>
                    </div>
                    <div className="body-container w-full h-full relative grid grid-rows-2">
                        <Countdown date={new Date('2021/11/12 11:00')} renderer={CountdownTimer} />
                        <div className="greeting  self-center countdown-title text-3xl ">
                            <div>
                                <p className="text-lg lg:text-3xl self-start ">I'm looking forward to see ya... mate !</p>
                            </div>
                            <br></br>
                            <div>
                                <p className="text-base lg:text-2xl self-end justify-items-end text-right">-- Little Brandon</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
      <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-red-900 bg-gray-500">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
      </div> */}
            </div>
          
        </>
    );
};

export default WelcomePage;
