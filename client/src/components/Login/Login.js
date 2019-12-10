import React, {Component} from 'react';
import './Login.css';
import { directive } from '@babel/types';
import services from '../../services/userService';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            errors:null
        }
    }
    changeHandlerUsername =(e)=>{
        this.setState({
            username:e.target.value
        }) 
    }
    changeHandlerPass =(e)=>{
        this.setState({
            password:e.target.value
            
        }) 
    }
    

    submitHandler =() =>{
        //tuk triabva validacii za poletatta

     const data = this.state;
     this.props.login(this.props.history,data);
       
    }
        
    render (){
        return (
            
            <div className = "shop-container">
               <h2>Please Login</h2>
               <form>
                   <div className = "container-input">
                      <label htmlFor = "username">Username</label>
                      <input type ="text" placeholder = "username" name = "username" onChange = {this.changeHandlerUsername}/>
                      
                   </div>
                   <div className = "container-input">
                      <label htmlFor = "password">Password</label>
                      <input type ="text" placeholder = "password" name = "pasword"  onChange = {this.changeHandlerPass}/>
                   </div>
                  
                   <div className = "container-input" >
                      <button type = "button" onClick = {this.submitHandler}>Login</button>
                   </div>
               </form>
            </div>
        )
    }
    
}


export default Login;