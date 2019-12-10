import React, {Component} from 'react';
import '../topNav/nav.css';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route,Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import cookieParser from '../../utils/cookieParser';
import userService from '../../services/userService';


class  TopNav extends React.Component {
 

  render(){
    const {isLogged} = this.props;
    return(
      <div className = "topnav">
      <Link to ='/'>Home</Link>
      <Link to ='/contact'>Contact</Link>      
      <Link to ='/choose'>Category</Link>    
      {isLogged &&<Link to ='/my-products'>My Products</Link>}
      {!isLogged &&<Link to ='/register'>Sell with us?</Link>}
      {!isLogged &&<Link to ='/login'>Login</Link>}
      
      {isLogged && <Link to ='/create-product'>Create Product</Link>}
      {isLogged &&<Link to ='/logout'>Logout</Link>}
    </div>
    )
  }
 
}
      

export default TopNav;