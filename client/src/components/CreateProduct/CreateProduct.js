import React,{Component} from 'react';
import './CreateProduct.css';
import productServices  from '../../services/productService';

class CreateProduct extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:'',
            price:'',
            imageUrl:'',
            category: '',
            description: '',
            sales:0
        }
    }
    counter = () =>{

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
     productServices.post(data)
     .then(()=>{
         this.props.history.push('/my-products')
     })   
     
     //this.props.login(this.props.history,data);
       
    }
        
    render (){
        return (
            
            <div className = "shop-container">
               <h2>Create Product</h2>
               <form>
                   <div className = "container-input">
                      <label forHtml = "title">Title</label>
                      <input type ="text" placeholder = "title" name = "title" onChange = {this.changeHandlerTitle}/>
                      
                   </div>

                   <div className = "container-input">
                      <label forHtml = "select">Category</label>
                      <select type ="text"  name = "select" onChange = {this.handleChangeSelect}>
                          
                          <option value = "hats" selected >Hats</option>
                          <option value = "gloves">Gloves</option>
                          <option value = "shoes">Shoes</option>
                          <option value = "toys">Toys</option>
                      </select>
                   </div>

                   <div className = "container-input">
                      <label forHtml = "desription">Description</label>
                      <textarea type ="text" placeholder = "max 50 symbols" name = "description"  onChange = {this.changeHandlerDescription}/>
                   </div>

                   <div className = "container-input">
                      <label forHtml = "price">Price</label>
                      <input type ="text" placeholder = "price" name = "price"  onChange = {this.changeHandlerPrice}/>
                   </div>

                  
                   <div className = "container-input">
                      <label forHtml = "imageUrl">Photo</label>
                      <input type ="text" placeholder = "price" name = "imageUrl"  onChange = {this.changeHandlerImage}/>
                   </div>
                  
                   <div className = "container-input" >
                      <button type = "button" onClick = {this.submitHandler}>Create</button>
                   </div>
               </form>
            </div>
        )
    }
    
}

export default CreateProduct;