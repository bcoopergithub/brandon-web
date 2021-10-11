import React, { useState, useEffect } from 'react';
import '../css/home.css';
import Countdown from 'react-countdown';
import background_desktop from '../img/kuma.jpg';
import background_mobile from '../img/kuma-mobile.jpg';
import CountdownTimer from '../component/Countdown';

function App() {
    const people = [
        {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ];

    console.log('%c%s', 'color: #757e11');
    // Create the count state.
    const [count, setCount] = useState(0);
    const Completionist = () => <span>You are good to go!</span>;

    // const date = new Date('2022/06/22 18:00');
    // Update the count (+1 every second).
    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);
    // Return the App component.
    return (
        <>
            <div style={{ backgroundImage: `url(${background_desktop})` }} className="w-full h-full bg-no-repeat bg-cover bg-right invisible sm:visible  absolute">
            </div>
            <div style={{ backgroundImage: `url(${background_mobile})` }} className="w-full h-full bg-no-repeat bg-cover bg-right visible sm:invisible absolute ">
                {' '}
            </div>
            <div className="w-full h-full flex flex-col justify-start relative lg:justify-start">
                <div className="absolute  flex flex-col w-full 2xl:w-4/6 xl:w-3.5/6 lg:w-3/6 md:m-4 text-center ...">
                    <div className="header-container my-4 relative App-header">
                        <div className="my-4 2xl:text-6xl xl:text-4xl lg:text-4xl md:2xl text-center">
                            <p>Welcome to Little Brandon 's World</p>
                        </div>
                        <div className="nav flex flex-row justify-around ">
                            <div>About </div>
                            <div>Alums</div>
                            <div>Blog</div>
                            <div>Subscribe</div>
                        </div>
                    </div>
                    <div className="body-container w-full h-full relative flex flex-col content-center justify-around">
                        <div>Time to little Brandon to be born is : </div>
                        <br />
                        <Countdown date={new Date('2021/11/12 8:00')} renderer={CountdownTimer} />
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
}

export default App;
