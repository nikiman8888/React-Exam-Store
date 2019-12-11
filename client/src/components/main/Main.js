import React, { Component } from 'react';
import './main.css';
import productService from '../../services/productService';
import Products from '../products/Products';
import NoProducts from '../NoProducst/NoProducts';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            senderInfo:''
        }
    }
    
    componentDidMount() {
        this.setState({senderInfo:this.props.location.senderInfo}) // vzemame info ot koia stranica sym prepraten
              
        productService.getAll() 
            .then(res => res.json())
            .then(products => {
                if(this.state.senderInfo!== undefined){   //akoi imame senderInfo zna4i idva ot Category
                    
                    let newProducts = products
                    .filter(product =>product.category === this.state.senderInfo);
                                     
                    this.setState({products:newProducts});
                    this.setState({senderInfo:this.props.location.senderInfo});
                        
                }else{
                    this.setState({ products: products })   
                }                                      
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

            <div >              
                    <h2>{this.state.senderInfo === undefined? 'All Products':this.state.senderInfo.toLocaleUpperCase()}</h2>
                <Products products={this.state.products} page={page} />
            </div>
        )
    }
}


export default Main;