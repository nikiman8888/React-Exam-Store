import React from 'react';
import './UpdateProduct.css';

class UpdateProduct extends React.Component {
    constructor(props){
        super (props)

    }


    render (){
        return (
            
            <div className = "shop-container">
               <h2>Please Register</h2>
               <form>
                   <div className = "container-input">
                      <label htmlFor = "username">Username</label>
                      <input type ="text" onChange ={this.changeHandlerUsername} placeholder = "username" name = "username" />
                   </div>
                   <div className = "container-input">
                      <label htmlFor = "password">Password</label>
                      <input type ="text" onChange ={this.changeHandlerPass} placeholder = "password" name = "pasword" />
                   </div>
                   <div className = "container-input">
                      <label htmlFor = "re-password">Re-Password</label>
                      <input type ="text" onChange ={this.changeHandlerRePass} placeholder = "re-password" name = "re-password" id = "re-pass"/>
                   </div>
                   <div className = "container-input" >
                      <button type ="button" onClick = {this.submitHandler}>Register</button>
                   </div>
               </form>
            </div>
        )
    }
}

export default UpdateProduct;