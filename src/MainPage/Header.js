import {React,useContext,useEffect} from 'react'
import {  NavLink,Link} from 'react-router-dom'
import Navigation from './Navigation'
import './Header.css'
import ToolBar from './ToolBar'
import AuthContext from '../context/AuthContext'


export default function Header() {
 
  const auth=useContext(AuthContext);

  return (
    <div className="header_top">
          
          <Link to="/"> <img height="100" width="140" src="https://ufc-video.s3.amazonaws.com/image/NONEVENT/EVENT_logoTM_1PMS.jpg" />
          </Link>
        

          <div className="navigation_nav">
            <Navigation />
          </div>
         
          <div className="tool_bar">
          <ToolBar />
        </div>
           
          


    </div>
  );
}
