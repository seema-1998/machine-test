import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'reactstrap';
import './../../styles/login.scss'
const Login = () => {
    let history=useHistory();
        const [username,setUserName] = useState("");
        const [password,setPassWord] = useState("");
        const[isLoggedIn,setIsLoggedin] = useState(false)

        // useEffect(()=>{
        //     console.log("set",username)

            
        // },[])
    const onSubmit=(e)=>{
        console.log("get",username)
        e.preventDefault()
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        {(username=== "user" && password==="user123") ? history.push("/HomePage") : history.push("/Login") }
        window.location.reload(true)
    }
    return (
        <div className='Modal'>
            
              <form className="form" onSubmit= {onSubmit }>
              <h5>Login</h5>
                <Input onChange={(e)=>setUserName(e.target.value)} className="Input" type='text' name='username' placeholder='username' />
                <Input onChange={(e)=>setPassWord(e.target.value)}  className="Input" type='password' name='password' placeholder='password' />
                <button className="signin"> Sign In</button>
              </form>
             
            
           </div>
    );
};

export default Login;