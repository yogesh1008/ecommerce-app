import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

class HeaderComp extends React.Component{
render(){
    return(
    
      

        <div className='header'>
            {/* Logo */}
         <Link className='logo-container' to="/">
            <Logo className='logo'/> 
         </Link>  
        
         <Link className="logo-text" to="/">
         FashionSwag
         </Link> 
             
          

             {/* Menu Items in Header */}
        <div className='options'>
        <Link to="/shop" className='option'>  Shop </Link>
        {/* <Link to="/topic" className='option'>Topic</Link>   */}
        <Link to="/signinregister" className='option'>  Sign In</Link> 
        <Link to="/contact" className='option'>  Contact</Link> 
     
        
        </div>
      
        </div>

       
    );
}
}


export default HeaderComp; 