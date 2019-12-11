import React, { Component } from 'react';
import './main.css';
import productService from '../../services/productService';
import Products from '../products/Products';
import NoProducts from '../NoProducst/NoProducts';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        console.log(this.props);
        let islog = this.props.isLogged;
        console.log(islog);
        productService.getAll() // moje bi i data
            .then(res => res.json())
            .then(products => {
                
                this.setState({ products: products })                                         
            })
            .then(()=>{
                if(this.state.products.length === 0){
                    this.props.history.push('/no-products')
                }
            })
    }
   
    render() {
        const page = 'main'
        return (

            <div className=".slider-latest-products">
                <h2>All Products</h2>
                <Products products={this.state.products} page={page} />
            </div>
        )
    }
}


export default Main;