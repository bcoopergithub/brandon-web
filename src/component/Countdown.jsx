import React from 'react';
import ReactDOM from 'react-dom';

const Countdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
                <div className="text-base xl:text-8xl w-full countdown-timer flex  flex-row justify-around  ...">
                    <div className=" flex flex-col rounded-2xl section shadow-2xl h-auto...">
                        <div className="date">{days}</div>
                        <div className="text">Days</div>
                    </div>
                    <div className="flex flex-col rounded-2xl section shadow-2xl ...">
                        <div className="date">{hours}</div>
                        <div class="text">Hours</div>
                    </div>
                    <div className="flex flex-col rounded-2xl section shadow-2xl ...">
                        <div className="date">{minutes}</div>
                        <div className="text">Minutes</div>
                    </div>
                    <div className="flex flex-col rounded-2xl section shadow-2xl ...">
                        <div className="date">{seconds}</div>
                        <div className="text">Seconds</div>
                    </div>
                </div>
      </>
        
      );
    }
  };

export default Countdown