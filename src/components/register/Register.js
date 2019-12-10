import React, {Component} from 'react';
import '../register/register.css';
import { directive } from '@babel/types';
import services from '../../services/userService';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
           username:'',
           password:'',
           repeadPassword:'',
           errors:null,
           succesRegister:''
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
    changeHandlerRePass =(e)=>{
        this.setState({
            repeadPassword:e.target.value
        }) 
    }
    submitHandler =() =>{
        //tuk triabva validacii za poletatta
        
        const data = this.state;
       
       services.register(data).then(()=>{
           console.log(this.props);
           
           this.props.history.push('/login');
        })
       
    }
   
    
    render (){
        return (
            
            <div className = "shop-container">
               <h2>Please Register</h2>
               <form>
                   <div className = "container-input">
                      <label htmlFor = "username">Username</label>
                      <input type ="text" onChange ={this.changeHandlerUsername} placeholder = "username" name = "username" />
                   </div>
                   <div className = "container-input">
                      <label htmlFor = "password">Password</label>
                      <input type ="text" onChange ={this.changeHandlerPass} placeholder = "password" name = "pasword" />
                   </div>
                   <div className = "container-input">
                      <label htmlFor = "re-password">Re-Password</label>
                      <input type ="text" onChange ={this.changeHandlerRePass} placeholder = "re-password" name = "re-password" id = "re-pass"/>
                   </div>
                   <div className = "container-input" >
                      <button type ="button" onClick = {this.submitHandler}>Register</button>
                   </div>
               </form>
            </div>
        )
    }
    
}


export default Register;