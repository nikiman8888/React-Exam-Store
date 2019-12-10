import React, { Component } from 'react';
import './Product.css';
import { Link, useParams } from 'react-router-dom';


class Product extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        const detailsUrl = '/details/' + this.props.product._id;
        const updateUrl = '/update/' +this.props.product._id;
        //let linkUrl = "/details?id="+this.props.product._id;
        //<Link to={{ pathname: '/details', query: { id: this.props.product._id } }}/>
        //taka go chetem this.props.location.query.id

        //ako prashtame id-to w urla
        //<Link to = {linkUrl} ...
        //i poluchawame this.props.location.search no tam e kato string s "?id=" koeto trjabwa da mahnem
        
        return (
            <div className="products">
                <p key={this.props.product.id} className="title">{this.props.product.title}</p>
                <img src={this.props.product.imageUrl} className="img-atr" />
                <p className="price">Price {this.props.product.price}</p>
                <p className="sales">Sales {this.props.product.sales}</p>
                {this.props.page === "myPage" && <Link to={updateUrl} className="update" >Update</Link>}
                {this.props.page === "myPage" && <Link to="/my-products" className="details" product-id={this.props.product.id}>Delete</Link>}
                {this.props.page === "main" && <Link to={detailsUrl} className="details" >Details</Link>}
            </div>
        )
    }
}

export default Product;