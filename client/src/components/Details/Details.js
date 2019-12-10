import React from 'react';
import './Details.css';
import db from '../../db';

class Details extends React.Component{
    
    state = {
        product:null
    }

    componentDidMount(){
        const idProducts = this.match.params.id;
        const product = fetch(db).then(res =>res.json).filter((id)=>id === idProducts);
        this.setState({product})
    }


    render (){
        return(
            <div>
             {this.state.product.id}
            </div>
        )
    }
}

export default Details;