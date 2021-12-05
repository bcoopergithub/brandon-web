import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';


const CountdownTimer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        const Completionist = () => <h1>Little Brandon is Born !</h1>;
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <>
                <div className="px-1 sm:px-5 md:px-3 lg:pl-6 lg:pr-0 text-lg sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl w-full countdown-timer grid  grid-cols-4 justify-items-center self-center ...">
                    <div className="justify-items-center days w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-28 lg:h-28 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 countdown-container p-0 rounded-2xl sm:rounded-2xl md:rounded-3xl shadow-2xl ...">
                        <div className=" ">
                        <div className="wraper">
                            <div>{days}</div>
                            <div>Days</div>
                            </div>
                        </div>
                    </div>
                    <div className="hours w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-28 lg:h-28 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 countdown-container p-0 rounded-2xl shadow-2xl ...">
                        <div className=" ">
                        <div className="wraper">
                            <div>{hours}</div>
                            <div>Hours</div>
                            </div>
                        </div>
                    </div>
                    <div className="minutes w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-28 lg:h-28 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 countdown-container p-0 rounded-2xl shadow-2xl ...">
                        <div className="">
                        <div className="wraper">
                            <div>{minutes}</div>
                            <div>Minutes</div>
                            </div>
                        </div>
                    </div>
                    <div className="seconds w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-28 lg:h-28 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 countdown-container p-0 rounded-2xl shadow-2xl ...">
                        <div className="">
                          <div className="wraper">
                          <div>{seconds}</div>
                            <div>Seconds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default CountdownTimer;
