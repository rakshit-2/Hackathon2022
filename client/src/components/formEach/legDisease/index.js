import React, { useEffect } from 'react';
import { useState } from 'react';
const LegDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Swollen Legs"},
    {name:"Prominent Veins On Calf"},]
    
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeLegs(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default LegDisease;