import React from 'react'
import Card from '@material-ui/core/Card'
import './BookPayment.css'

export default function BookPayment() {
    return (
        <div>
            <div>
                <h3>Pay With </h3>
            </div>
                    <div className="payment__card">
                        
                        <div>
                        <Card>
                                <img height="65" width="100"src="https://pbs.twimg.com/profile_images/1020309482545573888/FxVoLA05.jpg" />      
                        </Card>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>
                        <Card>
                                <img height="65" width="100"src="https://play-lh.googleusercontent.com/Zw151nWA-Gfq3qlUDkjhR8zOr5mN5M0IPxG2Vo7V6YA5C5SntmIEWN_fzP2QfwjAlcLw" />      
                        </Card></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div> 
                        <Card>
                                <img height="65" width="100"src="https://media-eu.camilyo.software/media-eu/static/0189/221.png" />      
                        </Card>
                        </div>
                        
                    </div>
        </div>
    )
}
