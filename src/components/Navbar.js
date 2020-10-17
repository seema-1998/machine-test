import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../styles/navbar.scss';
import DropDown from './DropDown';
import Header from './Header/Header';
import Information from './Information';
const Navbar = () => {

const[selectedProduct,setSelectedProduct]=useState("About us")

  const  handleSelectedProduct = selection => {
       setSelectedProduct(selection)
      };
    return (
     
        <>
            <Header/>
            <div style={{textAlign:'left'}}>
                <DropDown  handleSelectedProduct={handleSelectedProduct}
                selectedProduct={selectedProduct}/>
                <Information selectedProduct={selectedProduct}/>
            </div>
         </>
    );
};

export default Navbar;