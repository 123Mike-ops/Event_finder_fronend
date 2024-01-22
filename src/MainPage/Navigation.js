import {React,useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
import AuthContext from '../context/AuthContext'
export default function Navigation() {
    const auth=useContext(AuthContext)
    return (
    <div className="nav_links">
        <Link className="nav_links_each" to="/"> Home</Link>
        <Link className="nav_links_each" > About </Link>
      
        <Link className="nav_links_each"> Contact</Link>
        {auth.isLoggedIn ? null : <Link className="nav_links_each" to="/auth"> Login</Link>}
    </div>
    )
}
