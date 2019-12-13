import React from 'react';
import './DeleteProduct.css';
import productServices from '../../services/productService';

class DeleteProduct extends React.Component {
    constructor(props){
        super(props)
            this.state ={
                title: ''
            }
    }

    submitHandlerYes = () =>{
        let id = this.props.match.params.prodId;

        productServices.delete(id)
        .then(()=>{
            this.props.history.push('/my-products')
        })
    }

    submitHandlerNo = () =>{       
         this.props.history.push('/my-products')
        
    }
    componentDidMount() {
        //taka se chete ako w link e polzwano query - this.props.location.query.id
        //let id = this.props.location.query.id;

        //taka se prawi ako sme pratili id-to kato chast ot url-a     
        //let id = this.props.location.search.substring(4);

        let id = this.props.match.params.prodId;
        console.log(id);

        productServices.getOne(id)
            .then(res => res.json())
            .then(product => {
                this.setState({        
                   title:product.title
                })
            }).catch(console.error)
    }
    
    render (){
        return(
            <div className = "delete-container">
               <h2>Delete Product</h2>
               <form>
                   <div className = "container-input">
                       <h3>Are you sure you want to delete {this.state.title}</h3>                     
                   </div>

                   <div className = "container-input" >
                      <button type = "button" onClick = {this.submitHandlerYes}>Yes</button>
                   </div>
                   <div className = "container-input" >
                      <button type = "button" onClick = {this.submitHandlerNo}>No</button>
                   </div>
               </form>
            </div>
        )
    }
    
}

export default DeleteProduct;