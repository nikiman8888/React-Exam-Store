import React, { Component } from 'react';
import './MyProducts.css';
import productService from '../../services/productService';
import Product from '../Product/Product';
import cookieParser from '../../utils/cookieParser';


class MyProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            profit:0
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
                this.setState({ products: products })  
                let getProfit = 0;  
                products.map(product =>{     // vzimam prodadajbite za da nameria pe4albata
                    let current = product.price*product.sales;
                    getProfit += current;
                }) 
                this.setState({profit:getProfit})         
            })
    }

    render() {
        const page = 'myPage';
        return (
            <React.Fragment>
                <div className="shop-container">
                <h2>My Products Profit: {this.state.profit}</h2>
                    {this.state.products.map(product => (
                        <Product key={product._id.toString()} product={product} page={page} />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default MyProducts;