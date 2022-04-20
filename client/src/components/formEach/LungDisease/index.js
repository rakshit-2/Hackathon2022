import React, { useEffect } from 'react';
import { useState } from 'react';
const LungDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Throat Irritation"},
    {name:"Blood in Sputum"},]
    
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeLung(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default LungDisease;