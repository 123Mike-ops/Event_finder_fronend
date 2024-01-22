import React,{useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Event.css"
import AuthContext from '../context/AuthContext'
import Modal from '@material-ui/core/Modal'
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    maxWidth: 355,
  },
  media: {
    height: 140,
  
  },
  
});






export default function Events(props) {

  const classes = useStyles();
  const auth=useContext(AuthContext);



 

  return (
  <div className="events">
      <Card className={classes.root}>
       
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
            {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.eventDiscription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Link className="book_now"to="/EventProfile">
          <Button  size="small" color="primary">
            Read More
          </Button>
          </Link>
        </CardActions>



        {auth.isLoggedIn ? 
        <div className="book_now">
          <Link to="/booknow">
        <Button size="small" color="secondary">
            book now
          </Button>
          </Link>
        </div>:null}
        
      </Card>
    </div>
    
  );
}
