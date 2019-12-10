import React from 'react';
import '../header/header.css'

class Header extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                data: ""
            }
        }
      
      


        render()
        {
            return(
             <header className = "header">
                 <h1>The Christmas Store</h1>
             </header>           
            )
    }
}


export default Header;