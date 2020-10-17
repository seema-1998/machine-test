import { Container, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import Information from './Information';

export const dropcontext= React.createContext()
      const DropDown = (props) => {
      const[dropdownvalue,setDropDownvalue] = useState("")
  

      const dropValue=[
        {
            id: 0,
            title: 'About us',
            selected: false,
            key: 'dropdown'
        },
        {
          id: 1,
          title: 'Services',
          selected: false,
          key: 'dropdown'
        },
        {
          id: 2,
          title: 'Clients',
          selected: false,
          key: 'dropdown'
        },
      
      ];
  
        const accountTypeSelectStyles = makeStyles(theme => ({
          root: {
            height: "2rem !important",
            variant:'none',
            width:'80%',
            border:'1px solid'
          }
        }));
        
      
    return (
        <>
        <div >
        <FormControl style={{minWidth: 220,minHeight:50,marginTop:'24px'}} variant="outlined" >
              {/* <InputLabel htmlFor="outlined-age-native-simple">Dropdown</InputLabel> */}
                  <Select
                    native
                    className="form-control form-control-sm"
                    value={props.selectedProduct}
                    onChange={e => {
                      props.handleSelectedProduct(e.target.value);
                    }}
                    label="Dropdown"
                    autoWidth
                    >
                    <option aria-label="None" value="" />
                      {dropValue.map(item=>{
                        return(
                          <option key={item.id} value={item.title}>{item.title}</option>
                        )
                      })}
                  </Select>

          </FormControl>
        </div>
         
        </>
    );
};

export default DropDown;