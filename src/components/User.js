import { Input } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header/Header';

const User = () => {
    let history= useHistory ();
    const logoutUser = () =>{
        localStorage.clear("username")
        history.push('./Login')
        window.location.reload(true)

    }
    return (
        <div>
            <Header/>
            <div>
               <div>Username: &nbsp;   Seema sahu</div> <br></br>
                    Password:  &nbsp;<input 
                                        placeholder={!onchange  && '*********'} 
                                        type={!onchange ? 'text' :'password'} 
                                        style={{border:!onchange && 'none'}}>
                                      </input>
            </div>
            <div style={{display:'flex',padding:'12px 40px',marginTop:'70px'}}>
            <div style={{padding:'12px 20px',border:'1px solid',borderRadius:'3px',cursor:'pointer'}}> Forgot Password</div>
            <div onClick={logoutUser} style={{padding:'12px 20px',border:'1px solid',borderRadius:'3px',marginLeft:'10px',cursor:'pointer'}}> LOGOUT</div>

            </div>
        </div>

    );
};

export default User;