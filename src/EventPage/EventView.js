import React from 'react'
import SideBar from '../MainPage/SideBar'
import MyEvent from './MyEvent'
import './EventView.css'

export default function EventView() {
    return (
        <div className="event_view">
            
            <div className="side_bar">
            <SideBar />
            </div>

            <div className="event_road">
                <MyEvent />
            </div>


            
        </div>
    )
}
