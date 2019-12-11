import React from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

function Category(){
    return (
        <React.Fragment>
        <h2>Choose item type</h2>
        <div className = "links-container">
        <Link to = "/hats">Santa Hats</Link>
        <Link to = "/toys">Santa Gloves</Link>
        <Link to = "/gloves">Santa Boots</Link>
        <Link to = "/boots">Santa Toys</Link>
        </div>

     </React.Fragment>
    )
}

export default Category;