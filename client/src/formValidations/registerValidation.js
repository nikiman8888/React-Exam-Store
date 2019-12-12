import React from 'react';
import {ToastsStore} from 'react-toasts';


function registerValidator (username,password,repeadPassword){

    if(username === '' || username.length <2){
        ToastsStore.error('Username should be more than 2 charachter');
        return false;
    }
    if(password === '' || password.length < 3){
        ToastsStore.error('Password must be at least 3 characters lon')
    }
    if (password !== repeadPassword) {
        ToastsStore.error("Password and Repead Password don't match");
        return false;
      }
      return true;
}
export default registerValidator;
