import React  from 'react';
import './Products.css';
import Product from '../Product/Product';

function Products ({products,page}){
         
        return(  
                products.map(product =>(                   
                 <Product key = {product._id.toString()} product = {product} page = {page}/>                    
             ))                                      
        )   
}

export default Products;