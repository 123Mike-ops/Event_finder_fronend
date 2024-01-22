import {React,useCallback,useContext} from 'react'
import './ToolBar.css'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MessageIcon from '@material-ui/icons/Message';

import FormLabel from '@material-ui/core/FormLabel'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock';

import AuthContext from '../context/AuthContext'
export default function ToolBar() {
    let history= useHistory();

    const auth=useContext(AuthContext)

    const logoutHandler=event=>{
        event.preventDefault();
        auth.logout();
        history.push('/')
    };

  
    return (
        <div className="tool_bar">
            <div >
            {auth.isLoggedIn &&(
            <MessageIcon />
            )}
            </div>
            <div className="not_icon">
            {auth.isLoggedIn &&(
            < NotificationsActiveIcon />
            )}
            </div>
            
            
           {/* <div className="label_icon">
           {auth.isLoggedIn ?
           <FormLabel>
                {"Mikiyas"}
            </FormLabel>
            :null}
            </div> */}
            
           
            <div className="per_icon">
            {auth.isLoggedIn &&(
                // <Button onClick={logoutHandler} variant="outlined">log out</Button>
                    <IconButton size="small"onClick={logoutHandler} >
                        Logout
                      <LockIcon/>
                    </IconButton>
                     

    )}
            </div>
         
          

            
            
            
        </div>
    )
}
