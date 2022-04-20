import React, { useEffect } from 'react';
import { useState } from 'react';
const OralDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Ulcer On Tongue"},
    {name:"Patches In Throat"},
    {name:"Slurred Speech"},]
    
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeOral(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default OralDisease;