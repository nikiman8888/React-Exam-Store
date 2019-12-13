import React from 'react';
import { ToastsStore } from 'react-toasts';


function registerValidator(title, price,imageUrl,description) {

    const regexImage = new RegExp('^data:image/*');

    if (title === '' || title.length < 2) {
        ToastsStore.error('Title should be more than 2 charachter');
        return false;
    }
    if (price === '' ||  +price === undefined || +price < 0) {
        ToastsStore.error('Price have to be valid positve number ');
        return false;
    }

    if (imageUrl === '' || !regexImage.test(imageUrl)) {
        ToastsStore.error('Image Url should valid url');
        return false;
    }

    if (description === '' || description.length < 5|| description.length >50 ) {
        ToastsStore.error('Description must be between 5 and 50 charachters');
        return false;
    }
    
    return true;
}
export default registerValidator;
