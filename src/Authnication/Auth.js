import {React,useContext,useCallback,useState} from 'react'
import './Auth.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { FormatShapesRounded } from '@material-ui/icons';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
  
      width: '80ch',
    },
  },
}));


export default function Auth() {
  let history=useHistory();
  const classes = useStyles();
  


  const[signup,setSignUp]=useState(false)
 
    const auth=useContext(AuthContext);

    const [authform,setAuth]=useState({

  
      name:'',
      email:'',
      phone:'',
      password:''
    

    })
  const [name,setName]=useState();
  authform.name=name;
  const [email,setEmail]=useState();
  authform.email=email;
  const [phone,setPhone]=useState();
  authform.phone=phone;
  const [password,setPassWord]=useState();
  authform.password=password;

    
    const submitHandler=event=> {
      event.preventDefault();
    
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        }
      };     
        if(signup){

            try{
             
            axios.post('http://localhost:5000/api/user/',{
              name:authform.name,email:authform.email,password:authform.password,phone:authform.phone
            },axiosConfig).then(

                  res=>{console.log(res);
                    console.log(res.data);
                    
                    }
                  
                    
                    )
                    auth.login();
                    history.push('/userPage') 

       
            }catch(err){

              
              console.log("error happens in signup !!!")
            }

        }else{
            try{
              axios.post('http://localhost:5000/api/user/login',{email:authform.email,password:authform.password},axiosConfig).then(
                
                res=>{console.log(res.data)
                  if(res.data){
                  auth.login()
                history.push('/userPage') }
                   else{
                    history.push('/userPage')  
                   }}
                
               

              )
             
                        
            }catch(err){
              console.log("login fails......");


            }
        }

       
     
       history.push('/userPage') 
      };
    const signUpMode=()=>{
      setSignUp(true);
    }
    const loginMode=()=>{
      setSignUp(false);
    }
    
    return (
     <div>
        <div className="logo">
           
               <img src="https://ufc-video.s3.amazonaws.com/image/NONEVENT/EVENT_logoTM_1PMS.jpg" height="150" width="200"/>
           
              
        </div>
        <div className="form_control">
            
                  <form method="POST" onSubmit={submitHandler}>
             
                  {signup ?  <TextField  id="name" onChange={event=>setName(event.target.value)} label="username" className="input_user" />:null}
            <br />
            <div><TextField id="email" onChange={event=>setEmail(event.target.value)}  margin="normal"type="text" label="email" className="input_user" /><br /></div>
            
             
          
              {signup ? <div><TextField  id="phone"onChange={event=>setPhone(event.target.value)}  margin="normal"type="text" label="phone" className="input_user" /><br /></div>:null}
           
              <TextField  margin="normal" id="password" onChange={event=>setPassWord(event.target.value)} type="password" label="password" className="input_user" />
      
              {signup ?  
              <div><TextField  margin="normal"type="password" label="confirm password" className="input_user" /><br /></div>:null}

              
            <div className="login_but">
            {signup ? null :<Button color="primary" variant="outlined" type="submit"> login</Button>}
          
            </div>
            
            <div className="login_but">
            {signup ?  <Button color="primary" variant="outlined" type="submit"> Sign Up</Button>:null}
          
            </div>
            {signup ? <p>already have an account?<IconButton onClick={loginMode} className="signup_link" size="small"> login </IconButton> </p>:
            <p>didnt have an account?<IconButton onClick={signUpMode} className="signup_link" size="small" > signup</IconButton> </p>
          }
            
          </form>
          
        </div>
    </div>
            
    
    );
};
