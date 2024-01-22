import {React,useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './SideBar.css'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'
import ReceiptIcon from '@material-ui/icons/Receipt';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideBar() { 
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const auth=useContext(AuthContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div className="side_bars">
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Evento Event Finder
        </ListSubheader>
      }
      className={classes.root}
    >
        {auth.isLoggedIn && (
        <Link  className="auth_links" to="/myevents">
            <ListItem button>
            <ListItemIcon>
            <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText secondary="My Event" />
          </ListItem>
        </Link>


      )}
       {auth.isLoggedIn && (
        <Link className="auth_links" to="/mybooking">
            <ListItem button>
            <ListItemIcon>
            <ReceiptIcon />
            </ListItemIcon>
            <ListItemText secondary="My Booking Status" />
          </ListItem>
        </Link>


      )}
     
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText secondary="Available Events" />
      </ListItem>
    
    
   
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText secondary="Upcoming Events" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Top" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </div>
  );
}