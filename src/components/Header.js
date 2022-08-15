import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Users from '../users/Users';
import Calcul from "../calcul/Calcul";
import App from '../App';
import Home from './Home';

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
          <button className='yk btn navbar-brand'>YK</button>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
            <ul className='navitems navbar-nav mr-auto'>
              <li className='nav-item active'><Link className='nav-link' to='/'>Home</Link></li>
              <li className='nav-item active'><Link className='nav-link' to='/Users'>Users</Link></li>
              <li className='nav-item active'><Link className='nav-link' to='/Calcul'>Calcul</Link></li>
              <button className='btn btn-primary'>Login</button>
            </ul>
          </div>
        </div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Calcul' element={<Calcul />}/>
          </Routes>
      </BrowserRouter>
    )
  }
}


export default Header;
