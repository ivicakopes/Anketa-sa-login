import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = ()=> {
   return(
      <ul className="right">
         <li>negde</li>
         <li><NavLink to='/'>Log Out</NavLink></li>
         <li><NavLink to='/' className='btn-floating pink lighten-1 center'>NN</NavLink></li>  
      </ul>
   )
}

export default SignedInLinks;