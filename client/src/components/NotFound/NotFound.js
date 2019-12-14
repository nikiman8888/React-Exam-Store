import React from 'react';
import './NotFound.css'
import {Link} from 'react-router-dom';

function NotFound (){

    return (
    <React.Fragment>
         <h2>Not Found</h2>
        <div className = "not-found">
            <h1>Not Found or Unauthorized</h1>
            <Link to = "/">Go to home page</Link>
            
        </div>
    </React.Fragment>
    )
}

export default NotFound;