import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

function Category() {
    return (
        <React.Fragment>
            <h2>Choose item type</h2>
            <div className="links-container">
                <Link to={{ pathname: '/', senderInfo: 'hats' }}>Santa Hats</Link>
                <Link to={{ pathname: '/', senderInfo: 'gloves' }}>Santa Gloves</Link>
                <Link to={{ pathname: '/', senderInfo: 'shoes' }}>Santa Shoes</Link>
                <Link to={{ pathname: '/', senderInfo: 'toys' }}>Santa Toys</Link>
            </div>
        </React.Fragment>
    )
}

export default Category;