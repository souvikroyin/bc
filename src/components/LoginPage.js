import React from 'react'
import "../assets/css/Login.css";


const LoginPage=()=> {
  return (
    <>
    <body>
      
    <div className="mainBox">
     <div className="box">
<h2>Please Login</h2>
<form action="">
    <div className="inputBox">
        <input type="text" name="" required=""/>
        <label>Username</label>
    </div>
    <div className="inputBox">
        <input type="password" name="" required=""/>
        <label>Password</label>
    </div>
   <input type="submit" name="" value="Login"/>
</form>
    </div>
    </div>
    </body>
    </>
  )
}

export default LoginPage
