import React, { useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import {ToastsStore } from 'react-toasts';
import TopNav from './components/topNav/TopNav'
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import MyProducts from './components/MyProducts/MyProducts';
import DetailsPage from './components/DeatailPage/DetailsPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import cookieParser from './utils/cookieParser.js';
import userServices from './services/userService';
import Logout from './components/Login/Logout';
import Category from './components/Category/Category';
import CreateProduct from './components/CreateProduct/CreateProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import NotFound from './components/NotFound/NotFound';
import NoProducts from './components/NoProducst/NoProducts';


function render(title, Cmp, otherProps) {
  return function (props) {
    return <Cmp title={title} {...props} {...otherProps} />
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    const cookies = cookieParser();
    const isLogged = !!cookies['x-auth-token'];
    this.state = {
      isLogged,
      username: '',
    };
  }

  logout = (history) => {
    userServices.logout().then(() => {
      localStorage.removeItem("auth");
      this.setState({ isLogged: false });

      history.push('/')

    })
  }

  login = (history, data) => {
    userServices.login(data)
      .then(res => res.json())
      .then(res => {

        if (!res.success) {
          ToastsStore.error(res.message)
        } else {
          //console.log(res.user);        
          ToastsStore.success(res.message);
          this.setState({ isLogged: true, username: res.user.username });
          //console.log(res.user.username)
          history.push('/my-products')
        }
      }).catch(error => {
        ToastsStore.error(error.message)
      })
  }

  render() {
    const { username } = this.state;
    const { isLogged } = this.state;

    return (
      <Router>
        <TopNav isLogged={isLogged} username={username} />
        <Switch>
          <Route path="/" exact render={render('Main', Main, isLogged)} />
          <Route path="/contact" component={Contact} />
          <Route path="/my-products" render={render('Main', MyProducts, isLogged)} />
          <Route path="/login" render={render('Login', Login, { isLogged, login: this.login })} />
          <Route path="/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />)
          <Route path="/details/:prodId" component={DetailsPage} />
          <Route path="/register" component={Register} />
          <Route path="/create-product" render={render('Main', CreateProduct, isLogged)} />
          <Route path="/update/:prodId" component={UpdateProduct} />
          <Route path="/category" component={Category} />
          <Route path="/delete/:prodId" component={DeleteProduct} />
          <Route path="/no-products" render={render('No Porducts', NoProducts)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
