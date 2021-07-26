import React,{useState} from 'react'
import {NavLink,Route,Switch,BrowserRouter} from "react-router-dom"
import Java from './Java'
const Login=()=> {
      
   
    return (
        
        <div className="level1">
            <BrowserRouter>
            <label>Enter Your level</label>
            <NavLink activeClassName={'active-btn-link'} className='course' to='/level1'>Level1</NavLink>
            <Route path="/level1" exact component={Java}></Route>
            </BrowserRouter>
        </div>
        
    )
}


export default Login