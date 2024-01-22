import React from 'react'
import TextField from '@material-ui/core/TextField'
import  IconButton  from '@material-ui/core/IconButton'
import './BookForm.css'

export default function BookForm() {
    const submitHandler=()=>{
        console.log("submited")
    }
    return (
        <div className="form_box">
            <form className="forms_in">
               <TextField size="small" label="Name"/>&nbsp;&nbsp;&nbsp;
                <TextField size="small"label="Address"/>&nbsp;&nbsp;&nbsp;
                <TextField size="small"label="Phone"/><br /><br /><br />
                <TextField size="small"label="Event Category"/>&nbsp;&nbsp;&nbsp;
                <TextField size="small"label="Event Name"/>&nbsp;&nbsp;&nbsp;
                <TextField size="small"label="Event Organizer"/><br /><br />
                <TextField size="small"label="Event Seat"/>&nbsp;&nbsp;&nbsp;
                <TextField size="small"label="Cost"/>&nbsp;&nbsp;&nbsp;
                <TextField size="small"label="Day"/><br /><br />
                <TextField size="small"label="Duration"/><br/><br /><br />
                <IconButton size="small" color="primary" onCLick={submitHandler} type="submit">
                    Confirm Booking
                </IconButton>

            </form>
        </div>
    )
}
