import React from 'react'

import BookEventImage from './BooKEventImage'
import BookForm from './BookForm'
import BookPayment from './BookPayment'
import './BookProcess.css'
import SideBar from '../../MainPage/SideBar'
export default function BookProcess() {
    return (
        <div className="main_book">
                <div className="side_bar"> <SideBar /> </div>
                <div className="booking_proc">
                    
                    <div className="book_form"> <BookForm /><br /><br /><br /><div className="book_payment"><BookPayment/></div></div>
                    <div className="book_event_img"><BookEventImage /></div>
                   
                    
                    
                </div>
                {/* <div className="book_payment"><BookPayment /></div> */}
        </div>
    )
}
