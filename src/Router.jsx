// import {Router, Switch,Route} from 'react-router-dom';
// import history from '../utils/history'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import React, {useState} from 'react'
import WelcomePage from './Page/WelcomePage'
import Qpage from './Page/Qpage'
import ProtectedRoute from './Page/Protected'
import About from './Page/About'
import Journey from './Page/Journey'





// import ScecondPage from '../Pages/Protect';
// import Test from '../Pages/Test.jsx';

const AppRouter = () => {
  const [isAutheticated, setisAutheticated] = useState(false);

  console.log('auth ?',isAutheticated)
  return (
    <div className="router">

      {/* <Router history ={history}> */}
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Qpage verify = {(value)=>setisAutheticated(value)}/>  } />
          <ProtectedRoute path='/welcome' component={WelcomePage} auth={isAutheticated} />
          <ProtectedRoute path='/about' component={About} auth={isAutheticated}/>
          <ProtectedRoute path='/album' component={Journey} auth={isAutheticated}/>
          <ProtectedRoute path='/journey' component={Journey} auth={isAutheticated}/>
          <ProtectedRoute path='/subscribe' component={Journey} auth={isAutheticated}/>


        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
