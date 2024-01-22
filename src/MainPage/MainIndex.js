import React,{useState,useContext} from 'react'
import Events from '../EventPage/Events.js'
import SideBar from './SideBar'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AuthContext from '../context/AuthContext'

import './MainIndex.css'





export default function MainIndex() {
    
    const auth=useContext(AuthContext);
    

    let [events,setEvents]=useState([]);


    events=[{

      name:"Talaku Rucha B Ethiopia",
      eventDiscription: "Jogging and Salsa",
      location:"Addis Ababa",
      imgUrl:"https://inspiredsoundblog.files.wordpress.com/2020/11/music-event-photographer-2.jpg",
      locationDiscription:"werede belachu sebategna shele mender west tageggnutalachu",
   
    },
    {
         name:"Food Festival",
         eventDiscription:"Food in Blue Garden Hotel",
         location:"Mekelle  ",
         imgUrl:"https://cache.marriott.com/marriottassets/marriott/ADDLC/addlc-hotel-exterior-night-4692-hor-feat.jpg",
         locationDiscription:"pissa cinema Ampire"
    }, 
    
    {
         name:"Lengershema Music Concert",
         eventDiscription:"Music Concert By Rhophnan Nuri",
         location:"Addis Ababa, Ethiopia",
         imgUrl:"https://www.akwaabamusic.com/wp-content/uploads/2018/09/WhatsApp-Image-2018-09-20-at-4.21.12-PM.jpeg",
         locationDiscription:"Yeka Kifle Ketama , Lafto Mall"
    }
    , 
    
    {
         name:"Lengershema Music Concert",
         eventDiscription:"Music Concert By Rhophnan Nuri",
         location:"Addis Ababa, Ethiopia",
         imgUrl:"http://outlookethiopia.com/images/joomlart/news/Teddy_afro.png",
         locationDiscription:"Yeka Kifle Ketama , Lafto Mall"
    }
    , 
    
    {
         name:"Lengershema Music Concert",
         eventDiscription:"Music Concert By Rhophnan Nuri",
         location:"Addis Ababa, Ethiopia",
         imgUrl:"https://i.ytimg.com/vi/bWccytiwWmI/maxresdefault.jpg",
         locationDiscription:"Yeka Kifle Ketama , Lafto Mall"
    }
   
   
   ];
   const top100Films = [
    { title: 'Talaku Erucha ', year: 1994 },
    { title: 'irecha', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 }];

    return (
      
        <div className="allof_all">
                    <div className="search_bar" style={{ width: 300 }}>
                                {/* <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={top100Films.map((option) => option.title)}
                                    renderInput={(params) => (
                                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                                    )}
                                /> */}
                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={top100Films.map((option) => option.title)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search for Events"
                                        margin="normal"
                                        className="search_field"
                                        variant="outlined"
                                    
                                        InputProps={{ ...params.InputProps, type: 'search' }}
                                    />
                                    )}
                                />
                     </div>



                        <div className="all_element">
                                <div className="side_bar">
                                    <SideBar />
                                </div>
                                <div className="events_list">
                              
                                           
                                                
                                            
                                                
                                                { 
                                                    events.map((event)=>(
                                                   
                                                <Events 
                                                            name={event.name}
                                                            eventDiscription={event.eventDiscription}
                                                            imgUrl={event.imgUrl}
                                                            location={event.location}
                                                            locationDiscription={event.locationDiscription}
                                                           
                                                            />
                                                               
                                                    ))}
                                           
                                                   
                                                 

                                               
                                     </div>
                                
                        </div>
       </div>
    );
}
