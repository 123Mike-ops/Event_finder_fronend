import React from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
export default function EventDiscription() {


    
    return (
        <div>
            <Card>
                <div className="disc_content">
                <p>Rophnan Nuri Muzeyin known mononymously as Rophnan (stylized as all caps), is an ... Rophnan. A signature photo pose of Rophnan. Background information ... At the first half of 2019 Rophnan went on the My Generation national tour, ...
                </p>
                </div>
            </Card>
            <Link to="/userPage">
            <Button color="primary" variant="filled">Back To Menu</Button> 
            </Link> 
        </div>
    )
}
