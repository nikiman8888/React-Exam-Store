import React from 'react';
import './DetailsPage.css';
import productServices from '../../services/productService';
import productService from '../../services/productService';
class DetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: ''
        }
    }

    componentDidMount() {
        //taka se chete ako w link e polzwano query - this.props.location.query.id
        //let id = this.props.location.query.id;

        //taka se prawi ako sme pratili id-to kato chast ot url-a     
        //let id = this.props.location.search.substring(4);

        let id = this.props.match.params.prodId;
        console.log(this.props)
        productServices.getOne(id)
            .then(res => res.json())
            .then(product => {
                console.log(product)
                this.setState({ product: product })
            }).catch(console.error)
    }

    submitHandler = () =>{
        let id = this.props.match.params.prodId;
        let sales = this.state.product.sales+1;
        
        productServices.updateSell(id,{sales:sales})
        .then(()=>{
            this.props.history.push('/')
        })
    }
   

    render() {
        //const { _id, title, price, imageUrl, } = this.state;

        return (
            <React.Fragment>
                <div className="shop-container">
                    <h2>Details Page</h2>

                    <div className="container-details">
                        <img src = {this.state.product.imageUrl} className="product-price"/>
                        <span className="product-title">Title: {this.state.product.title}</span>
                        
                        <span className="product-price">Price: {this.state.product.price}</span>
                        <span className="product-category">Category: {this.state.product.category}</span>
                        <span className="product-description">Description: {this.state.product.description}</span>
                        <span className="product-sales">Sales: {this.state.product.sales}</span> 
                        <div>
                        <button type="button" onClick={this.submitHandler}>Buy</button>
                        </div>                      
                        
                        
                    </div>



                </div>
            </React.Fragment>
        )
    }
}

export default DetailsPage;

