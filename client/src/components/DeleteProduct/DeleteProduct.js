import React from 'react';
import './DeleteProduct.css';
import productServices from '../../services/productService';
import cookieParser from '../../utils/cookieParser';

class DeleteProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    UNSAFE_componentWillMount() {
        const cookies = cookieParser();
        const isLogged = !!cookies['x-auth-token'];
        if (!isLogged) {
            this.props.history.push({ pathname: '/', browser: true });
            return;
        }
    }

    componentDidMount() {
        //taka se chete ako w link e polzwano query - this.props.location.query.id
        //let id = this.props.location.query.id;

        //taka se prawi ako sme pratili id-to kato chast ot url-a     
        //let id = this.props.location.search.substring(4);

        let id = this.props.match.params.prodId;
        //console.log(id);

        productServices.getOne(id)
            .then(res => res.json())
            .then(product => {
                this.setState({
                    title: product.title
                })
            }).catch(console.error)
    }

    submitHandlerYes = () => {
        let id = this.props.match.params.prodId;

        productServices.delete(id)
            .then(() => {
                this.props.history.push('/my-products')
            })
    }

    submitHandlerNo = () => {
        this.props.history.push('/my-products')

    }

    render() {
        return (
            <div className="delete-container">
                <h2>Delete Product</h2>
                <form>
                    <div className="container-input">
                        <h3>Are you sure you want to delete {this.state.title}</h3>
                    </div>

                    <div className="container-input" >
                        <button type="button" onClick={this.submitHandlerYes}>Yes</button>
                    </div>
                    <div className="container-input" >
                        <button type="button" onClick={this.submitHandlerNo}>No</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default DeleteProduct;