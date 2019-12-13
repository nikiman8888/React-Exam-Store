import React, { Component } from 'react';
import './TopNav.css';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {

  render() {
    const { isLogged } = this.props;
    console.log(this.props)
    return (
      <div className="topnav">
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/category'>Category</Link>

        {isLogged && <Link to='/my-products'>My Products</Link>}
        {isLogged && <Link to='/#'>Welcome</Link>}
        {!isLogged && <Link to='/register'>Sell with us?</Link>}
        {!isLogged && <Link to='/login'>Login</Link>}

        {isLogged && <Link to='/create-product'>Create Product</Link>}
        {isLogged && <Link to='/logout'>Logout</Link>}
      </div>
    )
  }
}


export default TopNav;