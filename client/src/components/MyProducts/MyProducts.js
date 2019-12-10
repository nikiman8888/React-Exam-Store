import React, {Component} from 'react';
import './MyProducts.css';
import {Link} from 'react-router-dom';
import productService from '../../services/productService';
import Product from '../Product/Product';

class MyProducts  extends Component{
    constructor(props){
        super(props)

        this.state = {
           products:[]
        }       
    }
     componentDidMount(){
         
        productService.getMy() // moje bi i data
        .then(res=>res.json())
        .then(products => {
            //console.log(products)
            this.setState({products:products})
        })            
        }
    
    
    render (){
        const page = 'myPage';
        return (
         <React.Fragment>
             <div className = "shop-container">
                    <h2>MyProducts</h2>
                    {this.state.products.map(product =>(
                <Product product = {product} page = {page}/>
            ))}
             </div>
            
         </React.Fragment>
        )        
    }
}



export default MyProducts;