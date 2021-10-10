import React, {useState, useEffect} from 'react';
import '../css/home.css'
import Background from '../img/kuma.jpg'
import Countdown from 'react-countdown';


function App() {
  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  // Create the count state.
  const [count, setCount] = useState(0);
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
                <div class="countdown-timer flex flex-row justify-around ...">
                    <div class="p-16 rounded-3xl section">
                        <div class="date">{days}</div>
                        <div class="text">Days</div>
                    </div>
                    <div class="p-16 rounded-3xl section">
                        <div class="date">{hours}</div>
                        <div class="text">Hours</div>
                    </div>
                    <div class="p-16 rounded-3xl section ...">
                        <div class="date">{minutes}</div>
                        <div class="text">Minutes</div>
                    </div>
                    <div class="p-16 rounded-3xl section ... ">
                        <div class="date">{seconds}</div>
                        <div class="text">Seconds</div>
                    </div>
                </div>
      </>
        
      );
    }
  };
  // const date = new Date('2022/06/22 18:00'); 
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (

    <div style= {{backgroundImage: `url(${Background})`}}className="background">
    <div className = "content">
      <header className="App-header">

        {/* <p>
          Page has been open for <code>{count}</code> seconds.
        </p> */}

        <div><h1>Welcome to Little Brandon 's World </h1></div>
        <Countdown date={new Date('2021/11/12 8:00')} renderer={renderer}/>
      </header>
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

  );
}

export default App;