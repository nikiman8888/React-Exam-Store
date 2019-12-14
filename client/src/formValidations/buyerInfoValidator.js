import React from 'react';
import { ToastsStore } from 'react-toasts';


function registerValidator(city, money,priceProduct) {
    let patern = new RegExp(/[A-za-z]{2,}/) ;

    if (city === ''  || patern.test(city) === false) {
        ToastsStore.error('City should be valid City name');
        return false;
    }
    if (money === '' || +money < 0 ) {
        ToastsStore.error('Money should be positive number!');
        return false;
    }

    if (money < priceProduct ) {
        ToastsStore.error('Not enough money to buy the item!');
        return false;
    }
    
    return true;
}
export default registerValidator;
