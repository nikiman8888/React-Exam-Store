import React from 'react';
import './NoProducts.css';
import { Link } from 'react-router-dom';

function NoProducts({ isLogged }) {
    
    return (
        <div className="no-product-conntainer">
            <h2>No products yet</h2>
        </div>
    )
}

export default NoProducts;