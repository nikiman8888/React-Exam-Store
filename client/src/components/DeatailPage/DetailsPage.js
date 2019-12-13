import React from 'react';
import './DetailsPage.css';
import productServices from '../../services/productService';

class DetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: '',
            isHidden: true,
            isNotHidden:false,
            city:'',
            money:''

        }
    }

    componentDidMount() {

        let id = this.props.match.params.prodId;
        console.log(this.props)
        productServices.getOne(id)
            .then(res => res.json())
            .then(product => {
                console.log(product)
                this.setState({ product: product })
            }).catch(console.error)
    }
    toggleHidden = () => this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
   
               
    //toggleNotHidden = () => this.setState((prevState) => ({ isNotHiden: !prevState.isNotHiden }))    

    submitHandlerBuy = () => {
        let id = this.props.match.params.prodId;
        let sales = this.state.product.sales + 1;

        productServices.updateSell(id, { sales: sales })
            .then(() => {
                this.props.history.push('/')
            })
    }
    submitHandlerHome = () => {
        this.props.history.push('/')
    }

    cityHandler = (e)=>{
        this.setState({city:e.target.value})
    }

    moneyHandler = (e)=>{
        this.setState({money:e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <div className="shop-container">
                    <h2>Details Page</h2>

                    <div className="container-details">
                        <img src={this.state.product.imageUrl} className="product-price" />
                        <span className="product-title">Title: {this.state.product.title}</span>

                        <span className="product-price">Price: {this.state.product.price}</span>
                        <span className="product-category">Category: {this.state.product.category}</span>
                        <span className="product-description">Description: {this.state.product.description}</span>

                        <span className="product-sales">Sales: {this.state.product.sales}</span>
                        <div className="buyer-info">
                            {!this.state.isHidden && <label htmlFor="adress">Fill your City</label>}
                            {!this.state.isHidden && <input name="adress" />}
                            {!this.state.isHidden && <label htmlFor="money">Make your payment</label>}
                            {!this.state.isHidden && <input type="number" name="money" />}
                            {!this.state.isHidden && <button type="button" onClick = {this.submitHandlerBuy}>Confirm</button>}
                            {!this.state.isHidden && <button type="button" onClick = {this.toggleHidden}>Cancel</button>}
                        </div>
                        <div className = "btn-buy-home">
                            {!this.state.isNotHidden &&<button type="button" onClick={this.toggleHidden}>Buy</button>}

                            {!this.state.isNotHidden &&<button type="button" onClick={this.submitHandlerHome}>Home page</button>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DetailsPage;

