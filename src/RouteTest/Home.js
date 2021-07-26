import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import Create from './Create'
import {BrowserRouter,NavLink,Link,Switch,Route} from 'react-router-dom'
const  Home=()=> {
    return (
        <div>
            <h1>Home</h1>
          <BrowserRouter>
           <div>
            <NavLink to='/signup'>Signup</NavLink>
            <NavLink to='/signin'>Signin</NavLink>
            <NavLink to='/create'>Create</NavLink>
            </div>
            <div>
          <Switch>
             <Route path='/signup' component={Signup}></Route>
             <Route path='/signin' component={Signin}></Route>
             <Route path='/create'component={Create}></Route>
          </Switch>
          </div>
         </BrowserRouter>

        </div>
    )
 }

export default Home