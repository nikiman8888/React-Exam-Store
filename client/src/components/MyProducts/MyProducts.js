import React, { Component } from 'react';
import './MyProducts.css';
import productService from '../../services/productService';
import Product from '../Product/Product';
import cookieParser from '../../utils/cookieParser';


class MyProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    UNSAFE_componentWillMount() {
        const cookies = cookieParser();
        const isLogged = !!cookies['x-auth-token'];
        if (!isLogged) {
            this.props.history.push({ pathname: '/not-found', browser: true });
            return;
        }

    }
    componentDidMount() {

        productService.getMy() 
            .then(res => res.json())
            .then(products => {
                console.log(products)
                this.setState({ products: products })
            })
    }

    render() {
        const page = 'myPage';
        return (
            <React.Fragment>
                <div className="shop-container">
                    <h2>MyProducts</h2>
                    {this.state.products.map(product => (
                        <Product key={product._id.toString()} product={product} page={page} />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default MyProducts;