import React, { useContext } from 'react';
import { dropcontext } from './DropDown';

const Information = (props) => {


    return (
        <div id="para-info">
          <div >
                <div style={{padding:'12px 240px'}}>
            
                <span style={{fontWeight:'400'}}> {props.selectedProduct === "About us" ? 
                    ' Nimap Infotech is in Web and Mobile software development Industries since 2012. We have been into outsourcing software development services since 2014 and yielding quality of business to other companies and startups.'
                    :
                    props.selectedProduct === "Clients" ? 'Nimap`s clients and their results are the best proof that our methodologies work. But we’ve also received numerous awards and praise from the media and our peers.' 
                    : 
                    "To make your business process work smooth and efficient we develop bespoke software. We outsource our software developers to Bespoke software development on a timely basis (weekly/monthly/yearly) for easy communication between clients and customers." } 
                </span>  
                
            </div>
        </div>

            

        
    
    
      </div>
     
    );
};

export default Information;