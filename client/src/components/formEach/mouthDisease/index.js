import React, { useEffect } from 'react';
import { useState } from 'react';
const MouthDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Cough"},
    {name:"Ulcers On Tongue"},
    {name:"Patches In Throat"},
    {name:"Slurred Speech"},]
    
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeMouth(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default MouthDisease;