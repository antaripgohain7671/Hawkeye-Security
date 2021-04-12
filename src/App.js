import React, {useState} from 'react'
import Loginform from './components/Loginform';
import Navbar from './components/Navbar';
import Cocossd from './components/cocossd';

import "./App.css"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user,setUser] = useState({email:""});
  const [error,setError] = useState();

  const Login = details => {
    console.log("Logged in");
    if(details.email===adminUser.email && details.password===adminUser.password){
      console.log("Loggedin");
      setUser({
        email: details.email
      });
    }
    else{
      console.log("details dont match")
      setError("details dont match")
    } 
  }

  const Logout = () => {
    console.log("logout");
    setUser({email:""})
    setError("")
  }

  return (
    <div className="App">
      {(user.email!=="")?(
        <div className="Menu">
          <Cocossd/>
        </div>
      ):( 
        <Loginform Login={Login} error ={error}/>
      )}
    </div>
  )
}

export default App
