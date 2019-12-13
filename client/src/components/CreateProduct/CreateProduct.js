import React, { Component } from 'react';
import './CreateProduct.css';
import productServices from '../../services/productService';
import productValidator from '../../formValidations/productValidator';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import cookieParser from '../../utils/cookieParser';

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            price: '',
            imageUrl: '',
            category: 'hats', // zashtoto ako potrebitelia ne smeni options categoriata ostava prazna
            description: '',                          // i zatova go setvam predvariteelno
            sales: 0
        }
    }
    UNSAFE_componentWillMount() {
        const cookies = cookieParser();
        const isLogged = !!cookies['x-auth-token'];

        if (!isLogged) {
            this.props.history.push('/');

        }
    }
    
    changeHandlerTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSelect = (e) => {
        this.setState({ category: e.target.value });
    }

    changeHandlerDescription = (e) => {
        this.setState({
            description: e.target.value

        })
    }

    changeHandlerPrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    changeHandlerImage = (e) => {
        this.setState({
            imageUrl: e.target.value
        })
    }

    submitHandler = () => {

        let validator = productValidator(
            this.state.title,
            this.state.price,
            this.state.imageUrl,
            this.state.description
        )
        if (!validator) {
            return;
            //debugger;
        }
        const data = this.state;
        productServices.post(data)
            .then(() => {
                this.props.history.push('/my-products')
            })
        //this.props.login(this.props.history,data);
    }

    render() {
        return (
            <React.Fragment>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} />
                <div className="shop-container">
                    <h2>Create Product</h2>
                    <form>
                        <div className="container-input">
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder="title" name="title" onChange={this.changeHandlerTitle} />

                        </div>

                        <div className="container-input">
                            <label htmlFor="select">Select Category</label>
                            <select type="text" name="select" onChange={this.handleChangeSelect} >

                                <option value="hats"  >Hats</option>
                                <option value="gloves">Gloves</option>
                                <option value="shoes">Shoes</option>
                                <option value="toys">Toys</option>
                            </select>
                        </div>

                        <div className="container-input">
                            <label htmlFor="desription">Description</label>
                            <textarea type="text" placeholder="max 50 symbols" name="description" onChange={this.changeHandlerDescription} />
                        </div>

                        <div className="container-input">
                            <label htmlFor="price">Price</label>
                            <input type="number" placeholder="price" name="price" onChange={this.changeHandlerPrice} />
                        </div>


                        <div className="container-input">
                            <label htmlFor="imageUrl">Photo</label>
                            <input type="text" placeholder="image url (data:image...)" name="imageUrl" onChange={this.changeHandlerImage} />
                        </div>

                        <div className="container-input" >
                            <button type="button" onClick={this.submitHandler}>Create</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>

        )
    }
}

export default CreateProduct;