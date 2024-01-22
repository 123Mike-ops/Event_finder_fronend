import React from 'react'
import SideBar from '../MainPage/SideBar'
import Booking from './Booking'
import './BookingView.css'

export default function BookingView() {
    return (
        <div className="booking_view">
            <div className="side_bar">
                <SideBar />
            </div>
            <div className="booking_pannel">
                <Booking />
            </div>
            
        </div>
    )
}
