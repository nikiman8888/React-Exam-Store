import React from 'react';
import './UpdateProduct.css';
import productServices from '../../services/productService';

class UpdateProduct extends React.Component {
    constructor(props){
        super (props)
        this.state ={
            product:''
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

    changeHandlerTitle =(e)=>{
        this.setState({
            title:e.target.value
        }) 
    }

    handleChangeSelect = (e) =>{
        this.setState({category:e.target.value});
      }

    changeHandlerDescription = (e) =>{
        this.setState({
            description:e.target.value
            
        })
    }

    changeHandlerPrice =(e)=>{
        this.setState({
            price:e.target.value
        }) 
    }
    
    changeHandlerImage =(e)=>{
        this.setState({
            imageUrl:e.target.value
        }) 
    }

    submitHandler =() =>{
      
        //tuk triabva validacii za poletatta
     const data = this.state;
     let id = this.props.match.params.prodId;

     productServices.update(id,data)
     .then(()=>{
         this.props.history.push('/my-products')
     })   
     
     //this.props.login(this.props.history,data);
       
    }



    render (){
        return (
            
            <div className = "shop-container">
               <h2>Update Product</h2>
               <form>
                   <div className = "container-input">
                      <label forHtml = "title">Title</label>
                      <input type ="text" placeholder = "title" name = "title" onChange = {this.changeHandlerTitle} defaultValue = {this.state.product.title}/>
                      
                   </div>

                   <div className = "container-input">
                      <label forHtml = "select">Category</label>
                      <select type ="text"  name = "select" onChange = {this.handleChangeSelect} defaultValue = {this.state.product.category}>
                          
                          <option value = "hats"  >Hats</option>
                          <option value = "gloves">Gloves</option>
                          <option value = "shoes">Shoes</option>
                          <option value = "toys">Toys</option>
                      </select>
                   </div>

                   <div className = "container-input">
                      <label forHtml = "desription">Description</label>
                      <textarea type ="text" placeholder = "max 50 symbols" name = "description"  onChange = {this.changeHandlerDescription} defaultValue= {this.state.product.description}/>
                   </div>

                   <div className = "container-input">
                      <label forHtml = "price">Price</label>
                      <input type ="text" placeholder = "price" name = "price"  onChange = {this.changeHandlerPrice} defaultValue= {this.state.product.price}/>
                   </div>

                  
                   <div className = "container-input">
                      <label forHtml = "imageUrl">Photo</label>
                      <input type ="text" placeholder = "price" name = "imageUrl"  onChange = {this.changeHandlerImage} defaultValue= {this.state.product.imageUrl}/>
                   </div>
                  
                   <div className = "container-input" >
                      <button type = "button" onClick = {this.submitHandler}>Create</button>
                   </div>
               </form>
            </div>
        )
    }
}

export default UpdateProduct;