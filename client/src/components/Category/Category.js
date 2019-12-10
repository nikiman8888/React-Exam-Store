import React from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

function Category(){
    return (
        <React.Fragment>
        <h2>Choose item type</h2>
        <div className = "links-container">
        <Link to = "/santa-hats">Santa Hats</Link>
        <Link to = "/santa-toys">Santa Gloves</Link>
        <Link to = "/santa-gloves">Santa Boots</Link>
        <Link to = "/santa-boots">Santa Toys</Link>
        </div>

     </React.Fragment>
    )
}

export default Category;