import React from 'react'
import EventImage from './EventImage'
import EventDiscription from './EventDiscription'
import './EventProfile.css'
import SideBar from '../../MainPage/SideBar'





export default function EventProfile() {
    return (
        <div className="event_disc">
            <div className="side_bar">
                <SideBar />
            </div>
            <div className="event_image">
                <EventImage />
            </div>
            <div className="event_desco">
                <EventDiscription />
            </div> 
                     
            
        </div>
    )

}
