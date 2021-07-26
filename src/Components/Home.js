import React,{useState} from 'react'
import { BrowserRouter, Route, Link,Switch,NavLink } from "react-router-dom";
import Java from './Java';
// import Login from './Login';


const Home=()=> {
       
   
    return (
        <div className="home">
        <div className="header">
          <ul>
           <li>Online Exam</li>
           <li>Website Home</li>
           <li>Home</li>
           <li>About</li>
           <li></li>
           <li></li>
           <li>Skill Enhancement</li>
           <li>Logout</li>
          </ul> 
          </div> 
         
          <BrowserRouter>

          <div  className="wrapper">
           <div className='selectCourse'>
                   <h1>Technologies</h1> <br></br>
                   <p>Choose your technology to start your test</p>
                   <NavLink activeClassName={'active-btn-link'} className='course' to='/java'>Java</NavLink>
                   <NavLink activeClassName={'active-btn-link'} className='course' to='/python'>Python</NavLink>
                   <NavLink activeClassName={'active-btn-link'} className='course' to='/react'>React</NavLink>
                 </div> 
           
           <div className="content">
               <Route path="/java" component={Java}></Route>
               {/* <Route path="/level1" component={Java}></Route> */}

           </div>
           </div>
           </BrowserRouter>
        
        </div>
    )
}


export default Home