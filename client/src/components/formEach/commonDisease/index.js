import React, { useEffect } from 'react';
import { useState } from 'react';
const CommonDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Mild Fever"},
    {name:"Weight Loss"},
    {name:"Watering Eyes"},
    {name:"Sweating"},
    {name:"Swollen Extremities"},]
    
    useEffect(()=>{
    setUser(userData);
    },[]);
    
  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeCommon(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default CommonDisease;