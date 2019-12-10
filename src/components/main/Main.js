import React, { Component } from 'react';
import './main.css';
import productService from '../../services/productService';
import Products from '../products/Products';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        productService.getAll() // moje bi i data
            .then(res => res.json())
            .then(products => {
                //console.log(products)
                this.setState({ products: products })
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