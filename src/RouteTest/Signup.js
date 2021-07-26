import React from 'react'
import {BrowserRouter,Route,Link,Redirect} from 'react-router-dom'
import Signin from './Signin'

 const Signup=()=> {
    return (
        <div>
            <BrowserRouter>
            <h1>Sign up page</h1>
            <Link to='signin'>Signin</Link>
            <Redirect path='/signin' component={Signin}></Redirect>
            </BrowserRouter>
        </div>
    )
}

export default Signup