import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const CountdownTimer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <>
                <div class="text-lg sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-full countdown-timer grid grid-cols-4 gap-x-8 self-center ...">
                    <div className="countdown-container p-0 rounded-2xl sm:rounded-2xl md:rounded-3xl section shadow-2xl ...">
                        <div className="days">
                        <div className="wraper">
                            <div>{days}</div>
                            <div>Days</div>
                            </div>
                        </div>
                    </div>
                    <div className="countdown-container p-0 rounded-2xl section shadow-2xl ...">
                        <div className="hours">
                        <div className="wraper">
                            <div>{hours}</div>
                            <div>Hours</div>
                            </div>
                        </div>
                    </div>
                    <div className="countdown-container p-0 rounded-2xl section shadow-2xl ...">
                        <div className="minutes">
                        <div className="wraper">
                            <div>{minutes}</div>
                            <div>Minutes</div>
                            </div>
                        </div>
                    </div>
                    <div className="countdown-container p-0 rounded-2xl section shadow-2xl ...">
                        <div className="seconds">
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
