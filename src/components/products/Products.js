import React, {Component}  from 'react';
import '../products/products.css';
import {Link} from 'react-router-dom';
import Product from '../Product/Product';
import db from '../../db';
import service from '../../services/productService';

function Products ({products,page}){
       
        return(  
                 products.map(product =>(                   
                 <Product product = {product} page = {page}/>                    
             ))                                      
        )   
}

export default Products;