import React, {Component} from 'react';
import './Login.css';
import { directive } from '@babel/types';
import services from '../../services/userService';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            errors:null,
            senderInfo:''
        }
    }
    componentDidMount(){
        console.log('inside');
        console.log(this.props.location.senderInfo)
        //this.setState({senderInfo:this.props.location.senderInfo});
        if(this.props.location.senderInfo === 'register'){
            console.log('here')
            ToastsStore.success('Register succes...Please login')
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
            <React.Fragment>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} />
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
            </React.Fragment>
            
        )
    }
    
}


export default Login;