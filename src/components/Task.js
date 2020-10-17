import { TableBody, TableCell, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import Header from './Header/Header';
import Navbar from './Navbar';

const Task = () => {
  
    const API_URL = `http://jsonplaceholder.typicode.com/todos`;
  
    const [taskdata, setTaskData] = useState([]);
    const[newItem,setNewItem]=useState("");
    const[list,setList]=useState([]);
    const[showText,setShowtext]=useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const[value,setStateValue]=useState("");
  
    useEffect(() => {
      loadData();
    }, []);
    const onChangeHandler = event => {
        setNewItem(event.target.value);
      };
  
   const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTaskData(data);
      console.log(data.hits);
    }

  
      
    const addTask = ()=>{
        setShowtext(true)
        const newItem1 = {
            id: 1 + Math.random(),
            value: newItem
          };
      
          //copy current list of items
          const list = [...taskdata];
      
          //add new item to the list
          list.push(newItem1);
      
          //update state with new list and reset new item
        //   this.setState({
        //     list,
        //     newItem: ""
        //   });
        setList(list)
        setNewItem("")
    }

    const deleteTask = (id)=>{
        
        //copy list
        const list = [...taskdata];
        console.log(list);

        //filter out deleted object
        //remember that the list (each object) gets assigned a value and id when its added to list
        const updatedList = list.filter(item => item.id !== id);
    
        //update state
        setTaskData(updatedList)
        console.log("item",updatedList,list);

    }
    return (
        <div style={{padding:'12px 140px'}}>
            <Header/>
            <Table>
                <TableBody>
                  
                        { taskdata && taskdata.map((item)=>{
                            console.log("com",item.completed)
                            return(
                             
                                  <TableRow key={item.id}>
                                  
                                        <TableCell align="left">{item.id}</TableCell>
                                        <TableCell align="left">{item.title}</TableCell>
                                        <TableCell align="left">{item['completed']===true ? "true" : "false"}</TableCell>
                                        <TableCell>
                                            <div onClick={()=>deleteTask(item.id)} style={{padding:'5px 10px',backgroundColor:'#d9534f',color:'#ffffff',borderRadius:'5px',cursor:'pointer'}}>DELETE</div>
                                        </TableCell>
                                        
                                </TableRow>
                               


             
                            )
                        })}
                </TableBody>
              
            </Table>
            {/* <div onClick={addTask} style={{padding:'5px 10px',backgroundColor:'#d9534f',color:'#ffffff',borderRadius:'5px',cursor:'pointer'}}>Add Task</div>
                            {
                                showText &&  <input
                                type="text"
                                placeholder="type the item here"
                                value={newItem}
                                onChange={onChangeHandler}                              />
                            } */}
        </div>

    );
};

export default Task;