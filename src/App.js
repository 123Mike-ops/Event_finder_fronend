
import './App.css';
import {React ,useState,useCallback,useEffect,useContext} from 'react';
import MainIndex from './MainPage/MainIndex.js'
import Header from './MainPage/Header.js'
import Auth from './Authnication/Auth'
import EventView from './EventPage/EventView'
import {BrowserRouter as Router,
       Route,
       Switch,
       Redirect
      } from 'react-router-dom'
import AuthContext from './context/AuthContext';
import BookingView from './BookingPage/BookingView';
import BookProcess from './BookingPage/BookProcess/BookProcess';
import EventProfile from './EventPage/EventProfie/EventProfile.js';




function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const auth=useContext(AuthContext)

  useEffect(()=>{setIsLoggedIn(auth.isLoggedIn)},[auth.isLoggedIn])
  

  const login= useCallback(()=>{
    setIsLoggedIn(true);
    
  },[]);

  const logout=useCallback(()=>{
    setIsLoggedIn(false);
  },[]);
    let routes;
    
 if (isLoggedIn)
    routes=(
          <Switch>
                  
                  <Route path="/userPage">
                    <MainIndex />
                  </Route>

                  <Route path="/myevents"  exact>
                    <EventView />
                  </Route>
                  <Route path="/mybooking"  exact>
                    <BookingView />
                  </Route>
                  <Route path="/booknow"  exact>
                    <BookProcess />
                  </Route>
                  <Route path="/EventProfile"  exact>
                    <EventProfile />
                  </Route>
                
                  <Redirect to="/userPage"/>
          </Switch> 

    )
 else
   routes=(
        <Switch>
                    <Route path="/auth" >                
                          <Auth />
                    </Route>
                    <Route path="/">
                        <MainIndex />
                    </Route>
                  <Redirect to="/" />
        </Switch>

   );
 
  

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}}>

          <Router>
          <Header />
      <main>{routes}</main>

          </Router>
    
    </AuthContext.Provider>
  );
        
    

  
}

export default App;
